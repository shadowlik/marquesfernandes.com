# Favicon set + per-page OG images — Design

**Date:** 2026-06-19
**Status:** Approved (design), pending implementation plan
**Related:** WordPress→Astro migration epic (#15)

## Problem

The site ships an incomplete social/icon setup:

- `public/favicon.ico` is good (the "h" monogram, multi-size, restored in `f8ab71d`).
- `public/favicon.png` is a junk placeholder (179 bytes, 1-bit, 80×80). It is used
  for both the PNG icon **and** the Apple touch icon, so iOS home-screen bookmarks
  and PNG-preferring browsers get a degraded icon.
- There is no `site.webmanifest`, no Android/maskable icons, and no `theme-color`.
- There are **zero** Open Graph / Twitter meta tags anywhere, and no social preview
  images. Sharing the homepage or any article on WhatsApp / X / LinkedIn / Slack
  yields no image and no controlled title/description.

`old.marquesfernandes.com` now 301-redirects to the new site, and the Wayback
Machine has no archive of the WordPress original, so neither is a source for old
assets. We don't need them: the proper `.ico` (the "h" mark) is already committed
and is the single source of truth for the icon set.

## Goals

1. A complete, crisp favicon/icon set derived from the existing "h" mark.
2. Correct Open Graph + Twitter Card meta tags on every page, with absolute URLs.
3. A per-page generated 1200×630 branded OG image for **every** page, including
   the full migrated article archive, in all three languages.

## Non-goals

- No redesign of the "h" mark or the site brand.
- No cover-image-based OG variant (decided: single branded text card for all pages).
- No external/runtime image service. Everything is generated at build, served static.

## Brand reference

From `src/styles/tokens.css`:

- Accent: `#e9204f` (red) · Heading: `#101010` · Background: `#ffffff`
- Heading font: **Poppins** · Body font: **Roboto Condensed** (both self-hosted via
  `@fontsource`)
- Wordmark: `MF.` · Icon mark: lowercase "h" monogram (black on white)

## Architecture

Three independent parts. A and B are small head/asset changes; C is the new
generator.

```
BaseLayout.astro (owns <head>)
  ├── Part A: icon links + manifest + theme-color
  ├── Part B: OG / Twitter meta (driven by new optional props)
  └── og:image URL → Part C generated PNG

src/pages/og/[...route].png.ts   ← Part C: satori + sharp, getStaticPaths
public/site.webmanifest          ← Part A
public/{favicon.png, apple-touch-icon.png, android-chrome-192.png, android-chrome-512.png}
```

### Part A — Icon set

Source: the existing `public/favicon.ico` "h" mark. Because the largest frame is
only 64px, upscaling to 512px directly would be soft. The mark is pure black on
white and geometric, so we vectorize it (e.g. `potrace` on a thresholded bitmap)
to an SVG, then rasterize crisp PNGs at each target size. If vectorization tooling
is unavailable in the build environment, fall back to a high-quality Lanczos
upscale from the 64px frame (acceptable for a high-contrast geometric glyph). The
icon set is generated **once** and committed to `public/` — it is not part of the
build pipeline.

Generated assets (committed to `public/`):

| File | Size | Purpose |
|---|---|---|
| `favicon.ico` | existing | keep (multi-size) |
| `favicon.png` | 32×32 | replaces the junk placeholder |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192.png` | 192×192 | manifest |
| `android-chrome-512.png` | 512×512 | manifest |
| `site.webmanifest` | — | PWA metadata |

`site.webmanifest`:

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

`BaseLayout` head additions (replacing the current three icon links):

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#e9204f" />
```

### Part B — OG / Twitter meta in `BaseLayout`

Add optional props to `BaseLayout`:

```ts
interface Props {
  // ...existing...
  /** Absolute-or-root path to the page's OG image. Defaults to the site default card. */
  ogImage?: string;
  /** 'website' (default) or 'article'. */
  ogType?: 'website' | 'article';
  /** Article-only metadata (ignored when ogType !== 'article'). */
  publishedTime?: Date;
  modifiedTime?: Date;
  section?: string;       // category
  articleTags?: string[];
}
```

Locale mapping: `pt → pt_BR`, `en → en_US`, `es → es_ES`.

Emitted tags (image always resolved to an absolute URL via `Astro.site`):

```html
<meta property="og:site_name" content="MF." />
<meta property="og:locale" content={ogLocale} />
<!-- one og:locale:alternate per other language -->
<meta property="og:type" content={ogType} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:image" content={absoluteOgImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content={title} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={absoluteOgImage} />
<!-- when ogType === 'article': -->
<meta property="article:published_time" content={publishedTime.toISOString()} />
<meta property="article:modified_time" content={modifiedTime?.toISOString()} />
<meta property="article:section" content={section} />
<!-- one article:tag per tag -->
```

Wiring:

- `BlogPostLayout` passes `ogType="article"`, the article's `ogImage`,
  `publishedTime` (date), `modifiedTime` (updated), `section` (category),
  `articleTags` (tags).
- `HomePage` and the blog-listing pages pass their own `ogImage` (website type).
- Pages with no specific card fall back to a generated default card.

### Part C — Per-page OG image generator

A single static endpoint renders every card at build:

```
src/pages/og/[...route].png.ts
```

- Uses `getStaticPaths()` to enumerate the full set:
  - every blog entry, in each language it exists (`pt`/`en`/`es`)
  - every static page, per language
  - homepage per language, blog listing per language
  - a `default` card for the fallback / 404
- Renders with **satori** (JSX → SVG) using the real **Poppins** (title) and
  **Roboto Condensed** (meta) fonts loaded as font buffers, then converts SVG →
  PNG with **sharp** (already a dependency). Adds `satori` as a new dependency.
- Output: `1200 × 630` PNG.

**Deterministic image URLs** (so `getStaticPaths` and the page-side `ogImage`
prop agree without threading state):

| Page | OG image path |
|---|---|
| Article | `/og/<lang>/<translationKey>.png` |
| Static page | `/og/<lang>/page-<slug>.png` |
| Homepage | `/og/home-<lang>.png` |
| Blog listing | `/og/blog-<lang>.png` |
| Default / 404 | `/og/default.png` |

A shared helper (e.g. `src/lib/og.ts`) exposes both:
`ogImagePathFor(entry|kind, lang)` used by pages, and the matching route
enumeration used by `getStaticPaths` — single source of truth for the mapping.

**Card template** (matches the approved mockup):

- White background `#ffffff`.
- Top-left wordmark `MF.` in Poppins 700, `#101010`.
- Red accent bar `#e9204f` under the wordmark.
- Title: Poppins 700, `#101010`, large, wrapped and truncated to fit (cap length /
  lines so long titles don't overflow).
- Meta line (bottom): Roboto Condensed, uppercase, `CATEGORY · DATE`, where DATE is
  localized per language (e.g. `12 ABR 2020` for pt). For non-article cards
  (home/blog/default) the meta line uses the site tagline or is omitted.
- Category label derived from the category slug (uppercase, hyphens → spaces),
  since categories have no i18n display names.

**Fonts for satori:** satori needs `ttf`/`woff`/`otf` buffers. Source Poppins (700)
and Roboto Condensed (400/600) font files into the repo (e.g.
`src/assets/fonts/`) for the renderer. (`@fontsource` ships `woff2`, which satori
cannot read directly, so dedicated `ttf` files are added for generation only; they
are not shipped to the client.)

## Affected files

- `src/layouts/BaseLayout.astro` — icon links, manifest, theme-color, OG/Twitter meta + new props.
- `src/layouts/BlogPostLayout.astro` — pass article OG props down.
- `src/components/HomePage.astro` — pass home OG image.
- `src/pages/blog/[...page].astro`, `src/pages/en/blog/[...page].astro`, `src/pages/es/blog/[...page].astro` — pass listing OG image.
- `src/pages/en/index.astro`, `src/pages/es/index.astro` — pass home OG image (per lang).
- `src/pages/[...path].astro` — already passes article data; ensure OG props flow.
- `src/pages/404.astro` — default OG image.
- `src/pages/og/[...route].png.ts` — **new** generator endpoint.
- `src/lib/og.ts` — **new** shared path-mapping + card-rendering helper.
- `public/` — new icon set + `site.webmanifest`; replace `favicon.png`.
- `src/assets/fonts/` — **new** ttf font files for satori (generation only).
- `package.json` — add `satori`.

## Edge cases

- **Long titles** overflow the card → wrap + truncate with an ellipsis at a fixed
  line cap.
- **Accents** (á, ç, ã, ñ, …) must render — verify the chosen ttf subset includes
  Latin Extended; do not strip accents (project i18n rule).
- **Missing description** → omit `og:description`/`twitter:description` (don't emit empty).
- **Article without `updated`** → omit `article:modified_time`.
- **Build time / count**: one PNG per page per existing language across the full
  archive. Acceptable per decision; if build time becomes a problem, satori+sharp
  is fast and cards are cached by Astro's static output.

## Verification

1. `pnpm build` generates all `/og/**.png` files; spot-check one is exactly 1200×630.
2. Visually inspect a sample article card and the default card (accents render,
   title truncates cleanly, brand colors correct).
3. View source on home + an article: OG/Twitter tags present, `og:image` and
   `twitter:image` are **absolute** URLs, `og:locale` correct, article tags emitted.
4. Confirm icon set: `favicon.png` is a real 32px image, manifest + apple-touch +
   android icons resolve, `theme-color` present.
5. `pnpm lint && pnpm check:types && pnpm build` all green (0 errors/warnings).
