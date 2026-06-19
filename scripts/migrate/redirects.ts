/**
 * Generate the 301 redirect map for the category-less URL switch.
 *
 * For every post, the old `/{category}/{slug}/` path redirects to the new
 * `/{slug}/` path; each category archive (`/{category}/`) redirects to the
 * matching blog index. Output: src/data/redirects.json (consumed by
 * astro.config and, in production, nginx). Usage: pnpm migrate:redirects
 */
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const OUT = join(ROOT, 'src/data/redirects.json');

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}

function parts(path: string): { prefix: string; category?: string; slug: string } {
  const segs = path.split('/').filter(Boolean);
  let prefix = '';
  let rest = segs;
  if (segs[0] === 'en' || segs[0] === 'es') {
    prefix = `/${segs[0]}`;
    rest = segs.slice(1);
  }
  return { prefix, category: rest.length > 1 ? rest[0] : undefined, slug: rest[rest.length - 1] };
}

function main() {
  const redirects: Record<string, string> = {};
  for (const md of walk(BLOG_DIR)) {
    const canonical = readFileSync(md, 'utf8')
      .match(/^canonicalPath: (.+)$/m)?.[1]
      ?.trim();
    if (!canonical) continue;
    const { prefix, category, slug } = parts(canonical);
    if (!category) continue; // already category-less
    redirects[canonical] = `${prefix}/${slug}/`;
    redirects[`${prefix}/${category}/`] = `${prefix}/blog/`;
  }

  const sorted = Object.fromEntries(
    Object.entries(redirects).sort(([a], [b]) => a.localeCompare(b)),
  );
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`Wrote ${Object.keys(sorted).length} redirects -> src/data/redirects.json`);
}

main();
