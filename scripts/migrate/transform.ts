import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

export type Lang = 'pt' | 'en' | 'es';

/** Match an absolute upload URL on the site, capturing the root-relative tail. */
const UPLOAD_ABS = /https?:\/\/(?:www\.)?marquesfernandes\.com(\/wp-content\/uploads\/)/gi;

/** Match a root-relative upload path (stops at quotes, whitespace, or parens). */
const UPLOAD_PATH = /\/wp-content\/uploads\/[^\s"')]+/gi;

/** Gutenberg block delimiter comments, e.g. `<!-- wp:paragraph -->`. */
const WP_BLOCK_COMMENT = /<!--\s*\/?wp:[^>]*-->/g;

/**
 * Parse a Yoast permalink into its routing parts.
 *
 * Permalinks follow `/{category}/{slug}/` for pt (default, no prefix) and
 * `/{lang}/{category}/{slug}/` for en/es, so the path is authoritative for
 * the historical URL (`canonicalPath`).
 */
export function parsePermalink(permalink: string): {
  canonicalPath: string;
  lang: Lang;
  category: string;
  slug: string;
} {
  const { pathname } = new URL(permalink);
  const canonicalPath = pathname.endsWith('/') ? pathname : `${pathname}/`;

  const segments = canonicalPath.split('/').filter(Boolean);
  let lang: Lang = 'pt';
  let rest = segments;
  if (segments[0] === 'en' || segments[0] === 'es') {
    lang = segments[0];
    rest = segments.slice(1);
  }

  const slug = rest[rest.length - 1] ?? '';
  const category = rest.length > 1 ? rest[rest.length - 2] : '';
  return { canonicalPath, lang, category, slug };
}

/** Rewrite absolute on-site upload URLs to root-relative paths. */
export function rewriteUploadUrls(html: string): string {
  return html.replace(UPLOAD_ABS, '$1');
}

/** Unique root-relative `/wp-content/uploads/...` paths referenced in the html. */
export function extractUploadPaths(html: string): string[] {
  return [...new Set(html.match(UPLOAD_PATH) ?? [])];
}

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);

/** Drop query strings and trailing entity/quote junk from an upload URL. */
export function cleanUploadUrl(url: string): string {
  return url.replace(/[?&].*$/, '');
}

/** Strip WordPress's `-WIDTHxHEIGHT` size suffix to get the original file path. */
export function toOriginalUploadPath(path: string): string {
  return path.replace(/-\d+x\d+(\.\w+)$/, '$1');
}

/** True when the path's extension is a known raster image format. */
export function isImagePath(path: string): boolean {
  const ext = path.slice(path.lastIndexOf('.')).toLowerCase();
  return IMAGE_EXTS.has(ext);
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  ndash: '–',
  mdash: '—',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
};

/** Decode named, decimal (`&#39;`), and hex (`&#x41;`) HTML entities. */
export function decodeEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-zA-Z][a-zA-Z0-9]*);/g, (match, name) => NAMED_ENTITIES[name] ?? match);
}

function makeTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
    bulletListMarker: '-',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined',
  });
  td.use(gfm);
  return td;
}

/** WordPress `[caption ...]<img>Caption text[/caption]` shortcode. */
const CAPTION = /\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/g;

/** Rewrite `[caption]` shortcodes to an image followed by an emphasized caption. */
function expandCaptions(html: string): string {
  return html.replace(CAPTION, (_, inner: string) => {
    const img = inner.match(/<img[^>]*>/)?.[0] ?? '';
    const caption = inner
      .replace(/<img[^>]*>/, '')
      .replace(/<\/?a[^>]*>/g, '')
      .trim();
    return caption ? `<p>${img}</p><p><em>${caption}</em></p>` : `<p>${img}</p>`;
  });
}

/**
 * Convert WordPress post HTML to clean Markdown.
 *
 * Strips Gutenberg block-delimiter comments and expands `[caption]` shortcodes,
 * then runs Turndown with the GFM plugin (tables, strikethrough, fenced code).
 */
export function wpHtmlToMarkdown(html: string): string {
  const cleaned = expandCaptions(html.replace(WP_BLOCK_COMMENT, ''));
  return makeTurndown().turndown(cleaned);
}
