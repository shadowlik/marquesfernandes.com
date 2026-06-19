# Favicon set + per-page OG images — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a complete favicon/icon set and correct, per-page social preview (Open Graph + Twitter) metadata with build-generated 1200x630 branded share cards for every page.

**Architecture:** A pure helper module (`src/lib/og.ts`) owns the OG image URL scheme and label/date formatting (unit-tested). A static Astro endpoint (`src/pages/og/[...route].png.ts`) enumerates every page via `getStaticPaths` and renders each card with `satori` (HTML→SVG) + `sharp` (SVG→PNG), using the self-hosted Poppins/Roboto Condensed `.woff` files already in `node_modules`. `BaseLayout.astro` gains icon/manifest links plus OG/Twitter meta driven by new optional props, and each page-level layout passes its own card path.

**Tech Stack:** Astro 6 (static), TypeScript (strict), `satori` (new dep), `sharp` (existing dep), `@fontsource/poppins` + `@fontsource/roboto-condensed` (existing, `.woff` consumed at build), ImageMagick 7 (`magick`, for one-time icon generation), vitest.

## Global Constraints

- Package manager: **pnpm only** (never npm/yarn). Node >= 22.12.
- `pnpm check:types` (astro check) must stay at **0 errors**. No ESLint warnings (`pnpm lint`).
- Avoid `any`. Avoid em dashes in code comments and copy (use commas/parentheses).
- **Never strip accents.** The fontsource `latin` subset covers pt/es accents (á é í ó ú ç ã õ ñ ü) — use it.
- OG images are exactly **1200 x 630**.
- Brand tokens: accent `#e9204f`, heading `#101010`, background `#ffffff`, text `#747474`; fonts Poppins (headings/title), Roboto Condensed (meta). Wordmark `MF.`.
- `og:image` / `twitter:image` must be **absolute URLs** (resolve via `Astro.site` = `https://marquesfernandes.com`).
- Never mention AI/Claude in commit messages or any git content.
- Site uses `trailingSlash: 'always'`; the `/og/**.png` endpoint paths are file-like (end in `.png`) and are exempt from that rule (Astro emits them as files).

## File Structure

| File | Responsibility | Status |
|---|---|---|
| `src/lib/og.ts` | OG URL scheme + label/date/truncate helpers (pure) | Create |
| `src/lib/og.test.ts` | Unit tests for the helpers | Create |
| `src/pages/og/[...route].png.ts` | Enumerate pages + render each card (satori+sharp) | Create |
| `src/layouts/BaseLayout.astro` | Icon/manifest links, theme-color, OG/Twitter meta + new props | Modify |
| `src/layouts/BlogPostLayout.astro` | Forward article OG props to BaseLayout | Modify |
| `src/pages/[...path].astro` | Compute + pass each article's OG card path | Modify |
| `src/components/HomePage.astro` | Pass the home card path | Modify |
| `src/components/BlogList.astro` | Accept + forward an OG card path | Modify |
| `src/pages/blog/[...page].astro` | Pass the pt blog-listing card path | Modify |
| `src/pages/en/blog/[...page].astro` | Pass the en blog-listing card path | Modify |
| `src/pages/es/blog/[...page].astro` | Pass the es blog-listing card path | Modify |
| `public/favicon.png` | Replace the 179B junk with a real 32px icon | Replace |
| `public/apple-touch-icon.png`, `public/android-chrome-192.png`, `public/android-chrome-512.png` | New raster icons | Create |
| `public/site.webmanifest` | PWA metadata | Create |
| `package.json` | Add `satori` | Modify |

**Out of scope (confirmed):** the `pages` content collection is empty and rendered by no route, so static-page OG is not built. `src/pages/404.astro` needs no change — it inherits BaseLayout's default card automatically.

---

### Task 1: OG helper module (`src/lib/og.ts`)

Pure functions that define the OG image URL scheme and the card text formatting. No Astro/satori imports, so they unit-test in isolation.

**Files:**
- Create: `src/lib/og.ts`
- Test: `src/lib/og.test.ts`

**Interfaces:**
- Consumes: `Lang` from `@/i18n/ui`.
- Produces:
  - `DEFAULT_OG_ROUTE: string` = `'default'`
  - `articleOgRoute(lang: Lang, translationKey: string): string` → `` `${lang}/${translationKey}` ``
  - `homeOgRoute(lang: Lang): string` → `` `home-${lang}` ``
  - `blogOgRoute(lang: Lang): string` → `` `blog-${lang}` ``
  - `ogImagePath(route: string): string` → `` `/og/${route}.png` ``
  - `categoryLabel(slug: string): string` → uppercased, hyphens→spaces
  - `formatOgDate(date: Date, lang: Lang): string` → e.g. `'12 ABR 2020'` (UTC, no periods)
  - `truncateTitle(text: string, max?: number): string` → ellipsis past `max` (default 84)

- [ ] **Step 1: Write the failing test**

Create `src/lib/og.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import {
  DEFAULT_OG_ROUTE,
  articleOgRoute,
  homeOgRoute,
  blogOgRoute,
  ogImagePath,
  categoryLabel,
  formatOgDate,
  truncateTitle,
} from './og';

describe('og routes', () => {
  it('builds article/home/blog routes', () => {
    expect(articleOgRoute('pt', 'afinal-o-que-e-nodejs')).toBe('pt/afinal-o-que-e-nodejs');
    expect(homeOgRoute('en')).toBe('home-en');
    expect(blogOgRoute('es')).toBe('blog-es');
    expect(DEFAULT_OG_ROUTE).toBe('default');
  });

  it('maps a route to its public png path', () => {
    expect(ogImagePath('pt/foo')).toBe('/og/pt/foo.png');
    expect(ogImagePath(DEFAULT_OG_ROUTE)).toBe('/og/default.png');
  });
});

describe('categoryLabel', () => {
  it('uppercases and de-hyphenates the slug', () => {
    expect(categoryLabel('tecnologia')).toBe('TECNOLOGIA');
    expect(categoryLabel('web-design')).toBe('WEB DESIGN');
  });
});

describe('formatOgDate', () => {
  it('formats day month year, uppercase, no periods, TZ-stable', () => {
    expect(formatOgDate(new Date('2020-04-12'), 'pt')).toBe('12 ABR 2020');
    expect(formatOgDate(new Date('2020-04-12'), 'en')).toBe('12 APR 2020');
    expect(formatOgDate(new Date('2020-04-12'), 'es')).toBe('12 ABR 2020');
  });
});

describe('truncateTitle', () => {
  it('keeps short titles and ellipsizes long ones', () => {
    expect(truncateTitle('Short title')).toBe('Short title');
    const long = 'x'.repeat(120);
    const out = truncateTitle(long);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(84);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm vitest run src/lib/og.test.ts`
Expected: FAIL — cannot resolve `./og` (module not found).

- [ ] **Step 3: Write the implementation**

Create `src/lib/og.ts`:

```ts
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm vitest run src/lib/og.test.ts`
Expected: PASS (all assertions green).

- [ ] **Step 5: Commit**

```bash
git add src/lib/og.ts src/lib/og.test.ts
git commit -m "Add OG image URL scheme and card formatting helpers"
```

---

### Task 2: Favicon / icon set + manifest + head links

Generate a crisp icon set from the existing `public/favicon.ico` "h" mark (largest frame is 64px; use ImageMagick Lanczos upscale — `potrace` is not available), add a web manifest, and replace the three icon `<link>`s in `BaseLayout` with the full set plus `theme-color`. The icons are one-time committed assets, not part of the build pipeline.

**Files:**
- Replace: `public/favicon.png`
- Create: `public/apple-touch-icon.png`, `public/android-chrome-192.png`, `public/android-chrome-512.png`, `public/site.webmanifest`
- Modify: `src/layouts/BaseLayout.astro:30-32` (icon links)

- [ ] **Step 1: Generate the raster icons from the "h" mark**

Run (from the worktree root):

```bash
magick 'public/favicon.ico[0]' -filter Lanczos -resize 512x512 public/android-chrome-512.png
magick 'public/favicon.ico[0]' -filter Lanczos -resize 192x192 public/android-chrome-192.png
magick 'public/favicon.ico[0]' -filter Lanczos -resize 180x180 public/apple-touch-icon.png
magick 'public/favicon.ico[0]' -filter Lanczos -resize 32x32  public/favicon.png
```

- [ ] **Step 2: Verify dimensions and that the junk png is gone**

Run: `magick identify public/favicon.png public/apple-touch-icon.png public/android-chrome-192.png public/android-chrome-512.png`
Expected: sizes `32x32`, `180x180`, `192x192`, `512x512`; `favicon.png` is now several KB (not 179 bytes).

- [ ] **Step 3: Create the web manifest**

Create `public/site.webmanifest`:

```json
{
  "name": "MF.",
  "short_name": "MF.",
  "icons": [
    { "src": "/android-chrome-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#e9204f",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

- [ ] **Step 4: Update the icon links in BaseLayout**

In `src/layouts/BaseLayout.astro`, replace the three existing icon links (lines 30-32):

```html
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
```

with:

```html
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#e9204f" />
```

- [ ] **Step 5: Build to confirm assets are served and head is valid**

Run: `pnpm build`
Expected: build succeeds; `dist/site.webmanifest`, `dist/apple-touch-icon.png`, `dist/android-chrome-192.png`, `dist/android-chrome-512.png`, `dist/favicon.png` all exist.

Run: `grep -o 'rel="manifest"\|theme-color\|apple-touch-icon.png' dist/index.html | sort -u`
Expected: all three strings present.

- [ ] **Step 6: Commit**

```bash
git add public/favicon.png public/apple-touch-icon.png public/android-chrome-192.png public/android-chrome-512.png public/site.webmanifest src/layouts/BaseLayout.astro
git commit -m "Add full favicon/icon set, web manifest, and theme-color"
```

---

### Task 3: OG image generator endpoint

A static endpoint that enumerates every card route and renders a 1200x630 branded PNG per route with satori + sharp. satori reads the self-hosted `.woff` fonts directly from `node_modules` (resolved via `import.meta.resolve`); it converts text to vector paths, so sharp rasterizes the SVG reliably.

**Files:**
- Modify: `package.json` (add `satori`)
- Create: `src/pages/og/[...route].png.ts`

**Interfaces:**
- Consumes: `articleOgRoute`, `homeOgRoute`, `blogOgRoute`, `DEFAULT_OG_ROUTE`, `categoryLabel`, `formatOgDate`, `truncateTitle` from `@/lib/og`; `ui` from `@/i18n/ui`; `postsForLang` from `@/lib/blog` (not needed — enumerate raw collection); `getCollection` from `astro:content`.
- Produces: static files at `/og/<route>.png` for every route the consumers reference.

- [ ] **Step 1: Add the satori dependency**

Run: `pnpm add satori`
Expected: `satori` appears under `dependencies` in `package.json`; lockfile updated.

- [ ] **Step 2: Write the endpoint**

Create `src/pages/og/[...route].png.ts`:

```ts
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ui, languages, type Lang } from '@/i18n/ui';
import {
  DEFAULT_OG_ROUTE,
  articleOgRoute,
  homeOgRoute,
  blogOgRoute,
  categoryLabel,
  formatOgDate,
  truncateTitle,
} from '@/lib/og';

const W = 1200;
const H = 630;
const ALL_LANGS = Object.keys(languages) as Lang[];

const fontFile = (spec: string) =>
  readFileSync(fileURLToPath(import.meta.resolve(spec)));

const poppins700 = fontFile('@fontsource/poppins/files/poppins-latin-700-normal.woff');
const roboto600 = fontFile('@fontsource/roboto-condensed/files/roboto-condensed-latin-600-normal.woff');

/** Text supplied to a single card. */
interface CardProps {
  title: string;
  subtitle: string;
}

/** Satori VDOM for one card. Plain object form avoids needing JSX in a .ts file. */
function cardElement({ title, subtitle }: CardProps) {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        backgroundColor: '#ffffff',
        fontFamily: 'Poppins',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column' },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontFamily: 'Poppins', fontWeight: 700, fontSize: 48, color: '#101010' },
                  children: 'MF.',
                },
              },
              {
                type: 'div',
                props: {
                  style: { width: 72, height: 8, backgroundColor: '#e9204f', marginTop: 18 },
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 68,
              lineHeight: 1.1,
              color: '#101010',
              maxWidth: '900px',
            },
            children: truncateTitle(title),
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'Roboto Condensed',
              fontWeight: 600,
              fontSize: 30,
              letterSpacing: '0.04em',
              color: '#101010',
            },
            children: subtitle,
          },
        },
      ],
    },
  };
}

async function renderPng(props: CardProps): Promise<Buffer> {
  const svg = await satori(cardElement(props), {
    width: W,
    height: H,
    fonts: [
      { name: 'Poppins', data: poppins700, weight: 700, style: 'normal' },
      { name: 'Roboto Condensed', data: roboto600, weight: 600, style: 'normal' },
    ],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export const getStaticPaths = (async () => {
  const posts = (await getCollection('blog')).filter(
    (p) => !p.data.draft && p.data.canonicalPath,
  );

  const articleRoutes = posts.map((p) => ({
    params: { route: articleOgRoute(p.data.lang, p.data.translationKey) },
    props: {
      title: p.data.title,
      subtitle: `${categoryLabel(p.data.category)} · ${formatOgDate(p.data.date, p.data.lang)}`,
    } satisfies CardProps,
  }));

  const homeRoutes = ALL_LANGS.map((lang) => ({
    params: { route: homeOgRoute(lang) },
    props: {
      title: 'Henrique Marques Fernandes',
      subtitle: ui[lang]['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  }));

  const blogRoutes = ALL_LANGS.map((lang) => ({
    params: { route: blogOgRoute(lang) },
    props: {
      title: ui[lang]['nav.blog'],
      subtitle: ui[lang]['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  }));

  const defaultRoute = {
    params: { route: DEFAULT_OG_ROUTE },
    props: {
      title: 'Henrique Marques Fernandes',
      subtitle: ui.pt['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  };

  return [...articleRoutes, ...homeRoutes, ...blogRoutes, defaultRoute];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderPng(props as CardProps);
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
```

- [ ] **Step 3: Build and verify the cards are generated at the right size**

Run: `pnpm build`
Expected: build succeeds with no errors.

Run: `magick identify dist/og/home-pt.png dist/og/blog-pt.png dist/og/default.png dist/og/pt/afinal-o-que-e-nodejs.png`
Expected: each reports `1200x630` PNG. (`afinal-o-que-e-nodejs` is an existing pt translationKey; if it was renamed, substitute any folder name under `src/content/blog/` that has a `pt.md`.)

- [ ] **Step 4: Eyeball one card for brand correctness and accents**

Run: `cp dist/og/pt/afinal-o-que-e-nodejs.png /tmp/og-check.png`
Then open `/tmp/og-check.png` (or Read it) and confirm: white background, `MF.` wordmark top-left, red accent bar, Poppins title, `CATEGORY · DATE` meta line, accents rendering (no tofu/boxes). Pick a post with an accented title to confirm (e.g. a `pt` card whose title has á/ç/ã).

- [ ] **Step 5: Commit**

```bash
git add package.json pnpm-lock.yaml src/pages/og/[...route].png.ts
git commit -m "Generate per-page branded OG images at build with satori"
```

---

### Task 4: OG / Twitter meta in BaseLayout

Add optional OG props to `BaseLayout` and emit Open Graph + Twitter Card tags, defaulting the image to the generated default card. Pages that pass nothing (the homepage already does) immediately get correct default tags, which is how this task is verified.

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: `ogImagePath`, `DEFAULT_OG_ROUTE` from `@/lib/og`.
- Produces: new optional props on `BaseLayout` — `ogImage?: string`, `ogType?: 'website' | 'article'`, `publishedTime?: Date`, `modifiedTime?: Date`, `section?: string`, `articleTags?: string[]` — relied on by Task 5.

- [ ] **Step 1: Extend the Props interface and frontmatter**

In `src/layouts/BaseLayout.astro`, add to the `Props` interface (after `overlayHeader`):

```ts
  /** Root-relative path to this page's OG image. Defaults to the site card. */
  ogImage?: string;
  /** Open Graph object type. */
  ogType?: 'website' | 'article';
  /** Article-only metadata (used when ogType === 'article'). */
  publishedTime?: Date;
  modifiedTime?: Date;
  section?: string;
  articleTags?: string[];
```

Update the destructure and add the import + computed values in the frontmatter:

```ts
import { ogImagePath, DEFAULT_OG_ROUTE } from '@/lib/og';
// ...existing imports...

const {
  title,
  description,
  alternates,
  overlayHeader,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  section,
  articleTags,
} = Astro.props;
const lang: Lang = Astro.props.lang ?? getLangFromUrl(Astro.url);
const htmlLang = lang === 'pt' ? 'pt-BR' : lang;
const hreflang = (l: Lang) => (l === 'pt' ? 'pt-BR' : l);

const ogLocales: Record<Lang, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };
const canonicalUrl = new URL(Astro.url.pathname, Astro.site);
const ogImageUrl = new URL(Astro.props.ogImage ?? ogImagePath(DEFAULT_OG_ROUTE), Astro.site);
```

- [ ] **Step 2: Reuse the canonical URL and emit the meta block**

In `src/layouts/BaseLayout.astro`, change the existing canonical link to reuse `canonicalUrl`:

```html
    <link rel="canonical" href={canonicalUrl} />
```

Then, immediately after the `alternates?.map(...)` hreflang block and before `</head>`, add:

```astro
    <meta property="og:site_name" content="MF." />
    <meta property="og:locale" content={ogLocales[lang]} />
    {
      alternates
        ?.filter((alt) => alt.lang !== lang)
        .map((alt) => <meta property="og:locale:alternate" content={ogLocales[alt.lang]} />)
    }
    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={ogImageUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    {description && <meta name="twitter:description" content={description} />}
    <meta name="twitter:image" content={ogImageUrl} />
    {ogType === 'article' && publishedTime && (
      <meta property="article:published_time" content={publishedTime.toISOString()} />
    )}
    {ogType === 'article' && modifiedTime && (
      <meta property="article:modified_time" content={modifiedTime.toISOString()} />
    )}
    {ogType === 'article' && section && <meta property="article:section" content={section} />}
    {ogType === 'article' &&
      articleTags?.map((tag) => <meta property="article:tag" content={tag} />)}
```

- [ ] **Step 3: Type-check and build**

Run: `pnpm check:types`
Expected: 0 errors.

Run: `pnpm build`
Expected: success.

- [ ] **Step 4: Verify default OG tags on the homepage**

Run: `grep -oE 'og:(title|image|type|locale|url)|twitter:card|/og/home-pt\.png|/og/default\.png' dist/index.html | sort -u`
Expected: `og:title`, `og:image`, `og:type`, `og:locale`, `og:url`, `twitter:card` present. (The homepage gets its specific `/og/home-pt.png` only after Task 5; at this point it shows `/og/default.png`. Either is acceptable here.)

Run: `grep -o 'https://marquesfernandes.com/og/[^"]*' dist/index.html | head -1`
Expected: an **absolute** URL (starts with `https://marquesfernandes.com/og/`).

- [ ] **Step 5: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "Emit Open Graph and Twitter Card meta from BaseLayout"
```

---

### Task 5: Wire per-page OG images into all consumers

Pass each page's specific card path down to `BaseLayout`: articles (with full `article:*` metadata), the homepage, and the three blog listings.

**Files:**
- Modify: `src/layouts/BlogPostLayout.astro`
- Modify: `src/pages/[...path].astro`
- Modify: `src/components/HomePage.astro`
- Modify: `src/components/BlogList.astro`
- Modify: `src/pages/blog/[...page].astro`, `src/pages/en/blog/[...page].astro`, `src/pages/es/blog/[...page].astro`

**Interfaces:**
- Consumes: BaseLayout's `ogImage`/`ogType`/`publishedTime`/`modifiedTime`/`section`/`articleTags` (Task 4); `ogImagePath`, `articleOgRoute`, `homeOgRoute`, `blogOgRoute` from `@/lib/og`.

- [ ] **Step 1: Forward article OG props through BlogPostLayout**

In `src/layouts/BlogPostLayout.astro`, add to the `Props` interface:

```ts
  /** Primary category slug (becomes article:section). */
  category?: string;
  /** Last-updated date (becomes article:modified_time). */
  updated?: Date;
  /** Root-relative path to this article's OG card. */
  ogImage?: string;
```

Add `category`, `updated`, `ogImage` to the destructure, then update the `<BaseLayout ...>` open tag to forward them:

```astro
<BaseLayout
  title={title}
  description={description}
  lang={lang}
  alternates={alternates}
  ogType="article"
  ogImage={ogImage}
  publishedTime={date}
  modifiedTime={updated}
  section={category}
  articleTags={tags}
>
```

- [ ] **Step 2: Compute and pass the article card path in `[...path].astro`**

In `src/pages/[...path].astro`, add the import:

```ts
import { ogImagePath, articleOgRoute } from '@/lib/og';
```

Update the `<BlogPostLayout ...>` open tag to pass the new props:

```astro
<BlogPostLayout
  title={d.title}
  description={d.description}
  lang={d.lang}
  date={d.date}
  updated={d.updated}
  tags={d.tags}
  category={d.category}
  needsReview={d.needsReview}
  cover={d.cover}
  alternates={alternates}
  ogImage={ogImagePath(articleOgRoute(d.lang, d.translationKey))}
>
```

- [ ] **Step 3: Pass the home card path in HomePage**

In `src/components/HomePage.astro`, add the import:

```ts
import { ogImagePath, homeOgRoute } from '@/lib/og';
```

Update the `<BaseLayout ...>` open tag to add `ogImage`:

```astro
<BaseLayout
  lang={lang}
  title={`${name} — MF.`}
  description={t('site.tagline')}
  overlayHeader
  ogImage={ogImagePath(homeOgRoute(lang))}
>
```

- [ ] **Step 4: Forward an OG path through BlogList**

In `src/components/BlogList.astro`, add `ogImage?: string;` to the `Props` interface, add `ogImage` to the destructure, and forward it on the `<BaseLayout ...>` open tag:

```astro
<BaseLayout lang={lang} title={`${heading} — MF.`} ogImage={ogImage}>
```

- [ ] **Step 5: Pass each listing's card path from the three listing pages**

In `src/pages/blog/[...page].astro`, add the import and pass the pt card:

```ts
import { ogImagePath, blogOgRoute } from '@/lib/og';
```
```astro
<BlogList lang="pt" heading={t('nav.blog')} page={page} ogImage={ogImagePath(blogOgRoute('pt'))} />
```

Apply the same change to `src/pages/en/blog/[...page].astro` (use `'en'`) and `src/pages/es/blog/[...page].astro` (use `'es'`), matching each file's existing `lang`/`heading` arguments. Add the `import { ogImagePath, blogOgRoute } from '@/lib/og';` line to each.

- [ ] **Step 6: Type-check and build**

Run: `pnpm check:types`
Expected: 0 errors.

Run: `pnpm build`
Expected: success.

- [ ] **Step 7: Verify each page type points at its own card with absolute URLs**

Run:
```bash
grep -o 'https://marquesfernandes.com/og/home-pt.png' dist/index.html | head -1
grep -o 'https://marquesfernandes.com/og/blog-pt.png' dist/blog/index.html | head -1
grep -ro 'https://marquesfernandes.com/og/pt/[^"]*\.png' dist/afinal-o-que-e-nodejs/index.html | head -1
grep -o 'article:published_time\|article:section' dist/afinal-o-que-e-nodejs/index.html | sort -u
```
Expected: home shows `/og/home-pt.png`; blog listing shows `/og/blog-pt.png`; the article shows its `/og/pt/<key>.png` and emits `article:published_time` + `article:section`. (Substitute a current pt slug if `afinal-o-que-e-nodejs` was renamed.)

- [ ] **Step 8: Commit**

```bash
git add src/layouts/BlogPostLayout.astro src/pages/[...path].astro src/components/HomePage.astro src/components/BlogList.astro src/pages/blog/[...page].astro src/pages/en/blog/[...page].astro src/pages/es/blog/[...page].astro
git commit -m "Wire per-page OG images into articles, home, and blog listings"
```

---

### Task 6: Final verification

Confirm the whole suite is green and there are no regressions or leftovers.

- [ ] **Step 1: Run the full gate**

Run: `pnpm lint && pnpm check:types && pnpm build`
Expected: lint clean (0 warnings), 0 type errors, build success.

- [ ] **Step 2: Run unit tests**

Run: `pnpm test`
Expected: all tests pass (including `src/lib/og.test.ts`).

- [ ] **Step 3: Spot-check social tags on all three languages**

Run:
```bash
grep -o 'og:locale" content="[^"]*"' dist/index.html dist/en/index.html dist/es/index.html
```
Expected: `pt_BR` for `dist/index.html`, `en_US` for `dist/en/index.html`, `es_ES` for `dist/es/index.html`.

- [ ] **Step 4: Confirm no stray/oversized assets**

Run: `ls -la public/favicon.png && magick identify public/favicon.png`
Expected: real 32x32 PNG (kilobytes, not 179 bytes).

---

## Self-Review

**Spec coverage:**
- Icon set (favicon.png fix, apple-touch, android 192/512, manifest, theme-color) → Task 2. ✓
- OG/Twitter meta in BaseLayout with absolute URLs, locales, article:* → Task 4. ✓
- Per-page generated 1200x630 cards for articles (all langs), home (×3), blog (×3), default → Task 3. ✓
- Wiring across article/home/listing → Task 5. ✓
- Full archive coverage → Task 3 enumerates the whole `blog` collection. ✓
- Static pages → intentionally dropped (empty collection, no route); 404 → inherits default card (noted). ✓
- Spec said fonts need vendored ttf — corrected: fontsource ships `.woff`, satori reads woff, consumed from node_modules (Task 3). ✓
- Spec said vectorize via potrace — corrected: potrace absent, use ImageMagick Lanczos upscale (Task 2). ✓

**Placeholder scan:** No TBD/TODO; every code step shows complete code; every run step has an expected result. ✓

**Type consistency:** Helper names (`ogImagePath`, `articleOgRoute`, `homeOgRoute`, `blogOgRoute`, `categoryLabel`, `formatOgDate`, `truncateTitle`, `DEFAULT_OG_ROUTE`) are defined in Task 1 and used verbatim in Tasks 3–5. BaseLayout prop names (`ogImage`, `ogType`, `publishedTime`, `modifiedTime`, `section`, `articleTags`) are defined in Task 4 and passed verbatim in Task 5. ✓
