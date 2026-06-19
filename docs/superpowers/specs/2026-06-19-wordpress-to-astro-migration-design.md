# marquesfernandes.com — WordPress → Astro Migration

**Date:** 2026-06-19
**Status:** Approved design, pending implementation plan

## Goal

Move `marquesfernandes.com` off WordPress to a fast, static, git-based Astro site
that preserves all content, all SEO, and the pt/en/es localization — while making
"posting" as simple as committing a Markdown file. Close the existing translation
gaps (16 EN + 5 ES missing) as part of the migration.

## Current state (measured from the live DB)

- **Platform:** WordPress, theme `gentium`, default language `pt_BR`.
  Site name "MF." — "Tecnologia, desenvolvimento e design."
- **Localization:** Polylang. `language` taxonomy (pt/es/en), `post_translations`
  groups linking each translation trio. Config: `force_lang=1`, `default_lang=pt`,
  `hide_default=1`, `redirect_lang=1`.
- **Permalinks:** `/%category%/%postname%/`.
  - PT (default, no prefix): `marquesfernandes.com/{category}/{slug}/`
  - EN: `marquesfernandes.com/en/{category}/{slug}/`
  - ES: `marquesfernandes.com/es/{category}/{slug}/`
- **Content worth keeping:**
  - **166 unique articles** (translation groups touching a published post), 2020–2026
    - 146 complete (pt+en+es); 15 are es+pt only; 4 are en+pt only; 1 is pt only
    - **Gaps: 16 missing EN, 5 missing ES. PT is always present (source language).**
  - **7 portfolio items** (`portfolio` post type, `portfolio_category` taxonomy)
  - **9 published pages** (curated during migration)
  - **25 categories**, **470 tags**
  - **1,263 media attachments** (images)
  - **548 approved real comments** (wpDiscuz)
- **Bloat left behind:** Wordfence, Jetpack, Yoast, LearnPress, RSS aggregators
  (wpematico/wprss), Formidable, AMP, Elementor, cookie-consent, SMTP logs
  (250 sent-mail rows), ~30 plugins total.

## Target architecture

```
WordPress DB ──(one-time extract script)──> Markdown/MDX + frontmatter (git)
                                                      │
                  Astro build (i18n, image optimization, RSS, sitemap, hreflang)
                                                      │
                Docker multi-stage (node build → nginx serves static dist/)
                                                      │
   GH Actions (path filter) → registry.marquesfernandes.com → Dokploy deploy API
```

### Stack decisions (all confirmed with user)

| Concern        | Decision |
|----------------|----------|
| Framework      | **Astro** (static output, built-in i18n, content collections, image optimization, MDX, RSS, sitemap) |
| Authoring      | **Git + Markdown/MDX.** New post = create folder + write `pt.md` (+ optional en/es), push. |
| Translations   | **AI-translate the 21 gaps PT→EN/ES**, flagged `needsReview: true`; user proofreads post-launch. |
| Comments       | **Giscus** (GitHub Discussions) for new comments; **548 historical comments archived to JSON, rendered read-only** per post. No backend. |
| URLs / SEO     | **Preserve exactly** — PT at root, EN/ES prefixed, category in path, slugs from DB. Generated 301 map for edge cases. |
| Scope          | **All 166 articles + 7 portfolio + curated pages.** |
| Hosting        | **Dokploy** (self-hosted). Docker image, deploy via Dokploy API. |
| CI/CD          | Mirror `~/Projects/apuama/haid/.github/workflows/web-main.yml`. |

## Components

### 1. Content model & repo structure

```
src/content/
  blog/
    <translation-key>/
      pt.md          # source
      en.md          # may be needsReview: true
      es.md
  portfolio/
    <slug>/{pt,en,es}.md
  pages/
    <slug>/{pt,en,es}.md          # about + curated pages
src/assets/blog/<translation-key>/...   # images, optimized by Astro at build
src/data/comments/<wp-post-id>.json     # archived read-only comments
src/data/redirects.json                 # generated old→new 301 map
```

**Frontmatter schema** (Astro content collection, type-checked):
```yaml
title: string
description: string
date: date
lang: 'pt' | 'en' | 'es'
translationKey: string        # links the pt/en/es trio (replaces Polylang grouping)
category: string              # preserved for URL + listing
tags: string[]
cover: image | null
wpId: number                  # provenance / comment join
canonicalPath: string         # exact historical path, for URL preservation
needsReview: boolean          # true for AI-translated drafts
```

The content folder is the single source of truth. Each unit (one article folder)
is self-contained: its three language files + colocated images.

### 2. i18n & URL preservation

- Astro i18n configured `defaultLocale: 'pt'`, `locales: ['pt','en','es']`,
  `routing: { prefixDefaultLocale: false }` → reproduces Polylang's
  PT-at-root / EN-ES-prefixed scheme 1:1.
- Each post renders at its `canonicalPath` extracted from the DB
  (`/{category}/{slug}/` for PT; `/{lang}/{category}/{slug}/` for EN/ES),
  so every existing Google-indexed URL and backlink still resolves.
- `hreflang` alternate tags emitted per page linking the language trio.
- `@astrojs/sitemap` + custom RSS (`/rss.xml`, per-language feeds) included.
- `src/data/redirects.json` (generated by the migration script) → nginx 301
  rules for any URL that doesn't map 1:1 (category renames, attachment pages,
  feed URLs, `?p=ID` shortlinks).

### 3. Migration pipeline (one-time, idempotent script)

A Node/TypeScript script (`scripts/migrate/`) that:
1. Connects to the WP DB (read-only).
2. Selects all published `post` + `portfolio` + curated `page` records, joined
   to their `language` and `post_translations` groups.
3. Converts WP post HTML → clean Markdown (e.g. `unified`/`rehype`/`turndown`),
   stripping shortcodes, Elementor wrappers, and plugin cruft.
4. Rewrites in-content image `src` to local colocated paths; downloads each
   referenced image from the live site into `src/assets/...`.
5. Writes per-language Markdown files with full frontmatter incl. `canonicalPath`
   and `translationKey`.
6. Exports approved comments per post → `src/data/comments/<wpId>.json`.
7. Emits `src/data/redirects.json`.

Idempotent and re-runnable so we can iterate on conversion quality. Output is
committed to git (the DB is not a runtime dependency).

### 4. Translation gap-fill

After extraction, a second pass finds articles whose `translationKey` group is
missing EN and/or ES, AI-translates from the PT source, and writes `en.md`/`es.md`
with `needsReview: true`. The site renders a subtle "machine-translated — pending
review" note for flagged posts. Clearing the flag is a one-line frontmatter edit.
21 gaps total (16 EN, 5 ES). Does not block launch.

### 5. Comments

- Historical: read-only render from `src/data/comments/<wpId>.json` (author name,
  date, body, threading). Fully static, no PII beyond what was already public.
- New: **Giscus** embed (GitHub Discussions), lazy-loaded. Maps post ↔ discussion
  by pathname.

### 6. Deployment

**Dockerfile** (multi-stage, leaner than HAID's since output is static):
```
FROM node:24-alpine AS build  → install deps, astro build → /app/dist
FROM nginx:alpine AS runtime  → COPY dist/ + nginx.conf (gzip, cache headers, 301 map)
```
No Node runtime in the final image; nginx serves static files.

**CI** — `.github/workflows/deploy.yml`, adapted from `web-main.yml`:
- Path-filtered push to `main`.
- buildx build + push to `registry.marquesfernandes.com/marquesfernandes/site:{sha,latest}`.
- `curl` Dokploy `application.deploy` with `DOKPLOY_*` secrets.
- Drop the Infisical build-args step: a static marketing/blog site needs at most
  a public PostHog key (build-arg), likely none. Keep the workflow minimal.

### 7. Cutover

1. Build + deploy Astro site to a staging Dokploy app, verify rendering, i18n,
   URLs, redirects, RSS, sitemap, comments.
2. Spot-check a sample of preserved URLs against the live WP for parity.
3. Point the production domain at the new Dokploy app.
4. Keep the WP DB as a frozen archive until parity is confirmed in production.

## What we are NOT doing (YAGNI)

- No headless CMS, no web editor (git workflow chosen).
- No comment backend / database at runtime.
- No migration of plugin data (security logs, courses, RSS-aggregated feed items,
  forms, sent-mail logs).
- No redesign scope creep — match current information architecture; visual polish
  is a follow-up if desired.

## Risks & open items (resolve during planning/implementation)

- **Image volume:** 1,263 attachments — total byte size unknown until downloaded.
  If too large to commit comfortably, fall back to a Dokploy volume or object
  store while preserving `/wp-content/uploads/...` paths via redirects. Measure
  early in the migration script.
- **HTML→Markdown fidelity:** posts authored across 6 years with varied plugins
  (Elementor, code blocks, embeds). Conversion needs spot-check QA; embeds
  (YouTube, gists) may need MDX components.
- **Category in URL:** posts with multiple categories use a primary one in the
  permalink — must replicate WP's primary-category logic (Yoast primary term /
  first category) to match historical URLs exactly.
- **Comment threading/PII:** render only already-public fields; exclude emails/IPs.
```
