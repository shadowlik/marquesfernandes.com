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
 * Strip presentational attributes (class, style, align, width, height, and any
 * `data-*`) from table elements. Turndown's GFM plugin only converts a table to
 * Markdown when its cells are plain; Gutenberg tables carry `class` and
 * `data-align` attributes that otherwise make Turndown leave the whole table as
 * raw HTML. Clearing those attributes lets GFM emit a real Markdown table.
 */
function stripTableAttributes(html: string): string {
  return html.replace(/<(table|thead|tbody|tfoot|tr|th|td)\b[^>]*>/gi, '<$1>');
}

/** A paragraph/line that is nothing but a single bare URL (a WordPress oEmbed). */
const STANDALONE_URL = /^(?:<p>)?\s*(https?:\/\/[^\s<]+?)\s*(?:<\/p>)?$/gm;

/** Pull the YouTube video id and optional playlist id out of any YouTube URL. */
function parseYouTube(url: string): { id: string; list?: string } | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, '');
    const list = u.searchParams.get('list') ?? undefined;
    if (host === 'youtu.be') return { id: u.pathname.slice(1), list };
    if (host.endsWith('youtube.com')) {
      const id = u.searchParams.get('v') ?? u.pathname.split('/').pop() ?? '';
      return id ? { id, list } : null;
    }
  } catch {
    /* not a parseable URL */
  }
  return null;
}

/** Pull the owner and gist id out of a gist.github.com URL. */
function parseGist(url: string): { user: string; id: string } | null {
  const m = url.match(/^https?:\/\/gist\.github\.com\/([^/]+)\/([0-9a-f]+)/i);
  return m ? { user: m[1], id: m[2] } : null;
}

/**
 * Replace standalone oEmbed URLs (a bare YouTube or Gist link on its own line)
 * with the matching MDX embed component, mirroring how WordPress auto-embedded
 * them. Posts that gain a component MUST be written with an `.mdx` extension so
 * Astro renders the tag (see `src/components/{YouTube,Gist}.astro`).
 */
function convertEmbeds(markdown: string): string {
  return markdown.replace(STANDALONE_URL, (line, url: string) => {
    const yt = parseYouTube(url);
    if (yt) return `<YouTube id="${yt.id}"${yt.list ? ` list="${yt.list}"` : ''} />`;
    const gist = parseGist(url);
    if (gist) return `<Gist user="${gist.user}" id="${gist.id}" />`;
    return line;
  });
}

/**
 * Convert WordPress post HTML to clean Markdown.
 *
 * Strips Gutenberg block-delimiter comments, expands `[caption]` shortcodes, and
 * clears presentational table attributes so GFM can convert tables, then runs
 * Turndown with the GFM plugin (tables, strikethrough, fenced code). Finally it
 * turns standalone oEmbed URLs into MDX embed components.
 */
export function wpHtmlToMarkdown(html: string): string {
  const cleaned = stripTableAttributes(expandCaptions(html.replace(WP_BLOCK_COMMENT, '')));
  const markdown = makeTurndown().turndown(cleaned);
  return convertEmbeds(markdown);
}
