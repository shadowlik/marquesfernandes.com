import { defaultLang, type Lang } from '@/i18n/ui';

/** Minimal structural shape of a blog entry used by the listing helpers. */
interface BlogLike {
  data: { lang: Lang; category: string; date: Date; draft: boolean; canonicalPath?: string };
}

/** Published posts in a language, newest first. */
export function postsForLang<T extends BlogLike>(posts: readonly T[], lang: Lang): T[] {
  return posts
    .filter((p) => p.data.lang === lang && !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Published posts in a language filtered to one category, newest first. */
export function postsForCategory<T extends BlogLike>(
  posts: readonly T[],
  lang: Lang,
  category: string,
): T[] {
  return postsForLang(posts, lang).filter((p) => p.data.category === category);
}

/**
 * Drop the category segment from a historical post path, keeping the locale
 * prefix: `/tecnologia/slug/` -> `/slug/`, `/en/technology/slug/` -> `/en/slug/`.
 */
export function stripCategoryPath(canonicalPath: string): string {
  const segments = canonicalPath.split('/').filter(Boolean);
  let prefix = '';
  let rest = segments;
  if (segments[0] === 'en' || segments[0] === 'es') {
    prefix = `/${segments[0]}`;
    rest = segments.slice(1);
  }
  const slug = rest[rest.length - 1] ?? '';
  return `${prefix}/${slug}/`;
}

/** Archive path for a category in a language (e.g. `/tecnologia/`, `/en/technology/`). */
export function categoryPath(lang: Lang, category: string): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${category}/`;
}

/** Unique (lang, category) pairs across published posts, with archive path + count. */
export function categoryArchives<T extends BlogLike>(
  posts: readonly T[],
): { lang: Lang; category: string; path: string; count: number }[] {
  const counts = new Map<string, { lang: Lang; category: string; count: number }>();
  for (const p of posts) {
    if (p.data.draft) continue;
    const key = `${p.data.lang}/${p.data.category}`;
    const existing = counts.get(key);
    if (existing) existing.count++;
    else counts.set(key, { lang: p.data.lang, category: p.data.category, count: 1 });
  }
  return [...counts.values()].map((c) => ({ ...c, path: categoryPath(c.lang, c.category) }));
}
