/**
 * Image migration (#4) — idempotent.
 *
 * For every `/wp-content/uploads/...` reference in the extracted Markdown:
 *   - images  -> copied from the backup (full-size original, mapped from any
 *                `-WxH` variant) into the article folder and the Markdown ref
 *                rewritten to a relative `./file` path so Astro optimizes it.
 *   - non-images (csv, mp4, ...) -> copied to `public/wp-content/uploads/...`
 *                and referenced by their root-relative path.
 * Missing-from-backup references are left untouched and reported.
 *
 * Requires WP_BACKUP_DIR in .env. Usage: pnpm migrate:images
 */
import {
  readdirSync,
  statSync,
  existsSync,
  mkdirSync,
  copyFileSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cleanUploadUrl, toOriginalUploadPath, isImagePath } from './transform';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const PUBLIC_DIR = join(ROOT, 'public');

/** Any root-relative upload URL, wherever it appears (img, link href, bare). */
const UPLOAD_REF = /\/wp-content\/uploads\/[^\s)"'\]]+/g;

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}

/** Dest filename for a colocated image: the original path with slashes flattened. */
function colocatedName(originalPath: string): string {
  return originalPath.replace('/wp-content/uploads/', '').replaceAll('/', '-');
}

function main() {
  process.loadEnvFile(join(ROOT, '.env'));
  const backup = process.env.WP_BACKUP_DIR;
  if (!backup) throw new Error('WP_BACKUP_DIR not set in .env');
  const uploadsRoot = join(backup, 'wp-content', 'uploads');
  if (!existsSync(uploadsRoot)) throw new Error(`uploads not found at ${uploadsRoot}`);

  const stats = { images: 0, imageBytes: 0, assets: 0, missing: new Set<string>(), files: 0 };

  for (const mdPath of walk(BLOG_DIR)) {
    const folder = dirname(mdPath);
    const original = readFileSync(mdPath, 'utf8');

    const updated = original.replace(UPLOAD_REF, (rawUrl: string) => {
      const clean = cleanUploadUrl(rawUrl);

      if (isImagePath(clean)) {
        // Map any -WxH variant to its original so every size collapses to one
        // colocated file; Astro generates responsive sizes at build.
        const orig = toOriginalUploadPath(clean);
        const name = colocatedName(orig);
        const src = existsSync(join(backup, orig))
          ? join(backup, orig)
          : existsSync(join(backup, clean))
            ? join(backup, clean)
            : null;
        if (!src) {
          stats.missing.add(clean);
          return rawUrl;
        }
        const dest = join(folder, name);
        if (!existsSync(dest)) {
          copyFileSync(src, dest);
          stats.images++;
          stats.imageBytes += statSync(dest).size;
        }
        return `./${name}`;
      }

      // Non-image asset: preserve its path under public/.
      const src = join(backup, clean);
      if (!existsSync(src)) {
        stats.missing.add(clean);
        return rawUrl;
      }
      const dest = join(PUBLIC_DIR, clean);
      if (!existsSync(dest)) {
        mkdirSync(dirname(dest), { recursive: true });
        copyFileSync(src, dest);
        stats.assets++;
      }
      return clean;
    });

    if (updated !== original) {
      writeFileSync(mdPath, updated);
      stats.files++;
    }
  }

  const mb = (b: number) => `${(b / 1024 / 1024).toFixed(1)} MB`;
  console.log(
    `Colocated ${stats.images} image(s) (${mb(stats.imageBytes)}); ${stats.files} Markdown file(s) updated.`,
  );
  console.log(`Copied ${stats.assets} non-image asset(s) to public/.`);
  if (stats.missing.size) {
    console.log(`Missing from backup (${stats.missing.size}, left as-is):`);
    for (const m of [...stats.missing].sort()) console.log(`  ${m}`);
  }
}

main();
