import type { Lang } from '@/i18n/ui';

/** Route (sans extension) for the fallback / 404 card. */
export const DEFAULT_OG_ROUTE = 'default';

/** OG card route for an article, unique per language version. */
export function articleOgRoute(lang: Lang, translationKey: string): string {
  return `${lang}/${translationKey}`;
}

/** OG card route for the homepage of a language. */
export function homeOgRoute(lang: Lang): string {
  return `home-${lang}`;
}

/** OG card route for the blog listing of a language. */
export function blogOgRoute(lang: Lang): string {
  return `blog-${lang}`;
}

/** Public path of a generated card, e.g. `/og/pt/foo.png`. */
export function ogImagePath(route: string): string {
  return `/og/${route}.png`;
}

/** Display label for a category slug: `web-design` -> `WEB DESIGN`. */
export function categoryLabel(slug: string): string {
  return slug.replace(/-/g, ' ').toUpperCase();
}

/**
 * Card date line: `12 ABR 2020`. Uses UTC so date-only frontmatter renders the
 * same calendar day regardless of the build machine's timezone, and drops the
 * locale connector words / abbreviation periods that Intl adds.
 */
export function formatOgDate(date: Date, lang: Lang): string {
  // pt-BR (not bare 'pt'): month abbreviations from generic 'pt' can vary by runtime.
  const locale = lang === 'pt' ? 'pt-BR' : lang;
  const parts = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? '';
  return `${get('day')} ${get('month')} ${get('year')}`.toUpperCase().replace(/\./g, '');
}

/** Trim a title so it fits the card; adds an ellipsis when cut. */
export function truncateTitle(text: string, max = 84): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}
