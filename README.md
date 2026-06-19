# marquesfernandes.com

Personal blog and portfolio of Henrique Marques Fernandes — _Tecnologia,
desenvolvimento e design_. A fast, static **Astro** site authored in
Markdown/MDX, trilingual in **Portuguese (default), English, and Spanish**.

Migrated off WordPress. See the design spec in
[`docs/superpowers/specs/`](docs/superpowers/specs/) and the tracking epic (#15).

## Stack

- [Astro 6](https://astro.build) — static output, built-in i18n, content collections
- Markdown/MDX content in `src/content/`
- Deployed as a Docker image (nginx) to Dokploy via GitHub Actions

## Develop

```bash
pnpm install
pnpm dev          # local dev server
pnpm build        # static build to dist/
pnpm preview      # serve the build
```

Quality gates (run before committing):

```bash
pnpm lint && pnpm check:types && pnpm build
```

## Authoring a post

```
src/content/blog/<translation-key>/
  pt.md   # source (required)
  en.md   # optional translation
  es.md   # optional translation
```

Write `pt.md`, fill the frontmatter, `git push` — the site rebuilds and deploys.

## i18n

Portuguese is the default language and lives at the site root. English and
Spanish are served under `/en/` and `/es/`. URLs from the WordPress era are
preserved exactly; see `CLAUDE.md` for the rules.
