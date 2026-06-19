/**
 * Featured-image (cover) migration — idempotent, targeted.
 *
 * For each post that has a WordPress featured image (`_thumbnail_id`), copies
 * that image into the article folder and adds a `cover: ./file` line to the
 * Markdown frontmatter. Posts without a featured image are left untouched.
 *
 * Requires WP_DB_* + WP_BACKUP_DIR in .env. Usage: pnpm migrate:covers
 */
import { readdirSync, existsSync, copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const BLOG_DIR = join(ROOT, 'src/content/blog');

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}

/** Frontmatter block (between the first pair of `---`). */
function frontmatter(content: string): string {
  return content.split('\n---')[0] ?? '';
}

async function main() {
  process.loadEnvFile(join(ROOT, '.env'));
  const backup = process.env.WP_BACKUP_DIR;
  if (!backup) throw new Error('WP_BACKUP_DIR not set in .env');
  const uploads = join(backup, 'wp-content', 'uploads');

  const db = await mysql.createConnection({
    host: process.env.WP_DB_HOST,
    port: Number(process.env.WP_DB_PORT ?? 3306),
    user: process.env.WP_DB_USER,
    password: process.env.WP_DB_PASSWORD,
    database: process.env.WP_DB_NAME,
  });
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT p.ID AS id, am.meta_value AS file
       FROM wp_posts p
       JOIN wp_postmeta tm ON tm.post_id = p.ID AND tm.meta_key = '_thumbnail_id'
       JOIN wp_postmeta am ON am.post_id = tm.meta_value AND am.meta_key = '_wp_attached_file'
      WHERE p.post_type = 'post' AND p.post_status = 'publish'`,
  );
  await db.end();
  const featured = new Map<number, string>(rows.map((r) => [r.id, r.file]));

  const stats = { added: 0, missing: 0, skipped: 0, noThumb: 0 };

  for (const md of walk(BLOG_DIR)) {
    const content = readFileSync(md, 'utf8');
    if (/\ncover:/.test(frontmatter(content))) {
      stats.skipped++;
      continue;
    }
    const wpId = Number(content.match(/^wpId: (\d+)$/m)?.[1]);
    const file = featured.get(wpId);
    if (!file) {
      stats.noThumb++;
      continue;
    }
    const src = join(uploads, file);
    if (!existsSync(src)) {
      stats.missing++;
      continue;
    }
    const name = file.replaceAll('/', '-');
    const dest = join(dirname(md), name);
    if (!existsSync(dest)) copyFileSync(src, dest);
    writeFileSync(md, content.replace(/^(wpId: \d+)$/m, `$1\ncover: ./${name}`));
    stats.added++;
  }

  console.log(
    `Covers added: ${stats.added} | already had: ${stats.skipped} | no featured image: ${stats.noThumb} | missing from backup: ${stats.missing}`,
  );
}

await main();
