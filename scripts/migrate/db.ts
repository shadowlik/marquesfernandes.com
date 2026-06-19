import mysql from 'mysql2/promise';
import type { Lang } from './transform';

export interface WpPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: Date;
  modified: Date;
}

/** Connect using WP_DB_* env vars (read-only credentials). */
export async function connect(): Promise<mysql.Connection> {
  return mysql.createConnection({
    host: process.env.WP_DB_HOST,
    port: Number(process.env.WP_DB_PORT ?? 3306),
    user: process.env.WP_DB_USER,
    password: process.env.WP_DB_PASSWORD,
    database: process.env.WP_DB_NAME,
  });
}

/** Map of every published post id -> its slug (post_name). */
export async function getSlugs(db: mysql.Connection): Promise<Map<number, string>> {
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT ID AS id, post_name AS slug FROM wp_posts
      WHERE post_type = 'post' AND post_status = 'publish'`,
  );
  const map = new Map<number, string>();
  for (const r of rows) map.set(r.id, r.slug);
  return map;
}

/**
 * Polylang translation groups. Each group's `post_translations` description is a
 * serialized PHP array mapping language -> post id. Returns one record per group.
 */
export async function getTranslationGroups(
  db: mysql.Connection,
): Promise<Array<Partial<Record<Lang, number>>>> {
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT tt.description AS description
       FROM wp_term_taxonomy tt WHERE tt.taxonomy = 'post_translations'`,
  );
  const groups: Array<Partial<Record<Lang, number>>> = [];
  for (const r of rows) {
    const desc: string = r.description ?? '';
    const group: Partial<Record<Lang, number>> = {};
    for (const [, lang, id] of desc.matchAll(/"(pt|en|es)";i:(\d+)/g)) {
      group[lang as Lang] = Number(id);
    }
    if (Object.keys(group).length) groups.push(group);
  }
  return groups;
}

/** Yoast permalink (exact historical URL) per post id. */
export async function getPermalinks(
  db: mysql.Connection,
  ids: number[],
): Promise<Map<number, string>> {
  if (!ids.length) return new Map();
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT object_id AS id, permalink FROM wp_yoast_indexable
      WHERE object_type = 'post' AND object_id IN (?)`,
    [ids],
  );
  const map = new Map<number, string>();
  for (const r of rows) if (r.permalink) map.set(r.id, r.permalink);
  return map;
}

/** Tag slugs per post id. */
export async function getTags(db: mysql.Connection, ids: number[]): Promise<Map<number, string[]>> {
  if (!ids.length) return new Map();
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT tr.object_id AS id, t.slug AS slug
       FROM wp_term_relationships tr
       JOIN wp_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id AND tt.taxonomy = 'post_tag'
       JOIN wp_terms t ON tt.term_id = t.term_id
      WHERE tr.object_id IN (?)`,
    [ids],
  );
  const map = new Map<number, string[]>();
  for (const r of rows) {
    const list = map.get(r.id) ?? [];
    list.push(r.slug);
    map.set(r.id, list);
  }
  return map;
}

/** Published posts to extract, optionally restricted to a set of ids. */
export async function getPosts(db: mysql.Connection, ids?: number[]): Promise<WpPost[]> {
  const where =
    ids && ids.length
      ? `post_type = 'post' AND post_status = 'publish' AND ID IN (?)`
      : `post_type = 'post' AND post_status = 'publish'`;
  const [rows] = await db.query<mysql.RowDataPacket[]>(
    `SELECT ID AS id, post_title AS title, post_name AS slug, post_content AS content,
            post_excerpt AS excerpt, post_date AS date, post_modified AS modified
       FROM wp_posts WHERE ${where}`,
    ids && ids.length ? [ids] : [],
  );
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    slug: r.slug,
    content: r.content ?? '',
    excerpt: r.excerpt ?? '',
    date: r.date,
    modified: r.modified,
  }));
}
