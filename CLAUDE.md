# marquesfernandes.com — Claude Code Guidelines

## Project Overview

Personal blog and portfolio for Henrique Marques Fernandes ("MF." —
"Tecnologia, desenvolvimento e design"). A **static Astro site** authored in
Markdown/MDX, **migrated off WordPress** (see the design spec below). Trilingual:
**Portuguese (default/source), English, Spanish.**

- Design spec: `docs/superpowers/specs/2026-06-19-wordpress-to-astro-migration-design.md`
- Work is tracked as GitHub issues (epic: #15).

## Tooling

- **Package manager:** pnpm 10+ (never npm/yarn)
- **Framework:** Astro 6 (static output)
- **Node:** 22.12+
- **Content:** Markdown/MDX content collections (`src/content/`)
- **Hosting:** Docker image (nginx serving static `dist/`) deployed to **Dokploy**
- **CI/CD:** GitHub Actions → `registry.marquesfernandes.com` → Dokploy deploy
  (mirrors `~/Projects/apuama/haid/.github/workflows/web-main.yml`)

## i18n (Strict)

- **Default and source language is Portuguese (`pt`)**, not English. PT lives at
  the site root (no prefix); EN/ES are served under `/en/` and `/es/`. This
  mirrors the legacy Polylang setup and **must stay that way** to preserve URLs.
- All user-facing chrome (nav, footer, labels) is internationalized in
  `src/i18n/ui.ts`. Article bodies are authored per-language as Markdown.
- **EN/ES must be natural translations, never literal.**
- **Never strip accents** from Portuguese/Spanish (á, é, í, ó, ñ, ç, ã, õ, etc.).
- Articles are linked across languages by `translationKey` in frontmatter
  (replaces Polylang's grouping).

## URL & SEO Preservation (Strict)

- Migrated posts render at their exact historical path (`canonicalPath` in
  frontmatter): `/{category}/{slug}/` for PT, `/{lang}/{category}/{slug}/` for
  EN/ES. **Never change a migrated post's `canonicalPath`** — it would break
  Google rankings and backlinks built up since 2020.
- New URL changes must come with a 301 in the redirect map (`src/data/redirects.json`).
- Keep `hreflang`, canonical tags, sitemap, and RSS correct.

## Authoring a New Post

For any request to start, outline, draft, revise, translate, or publish a blog
article, read and follow the agent-agnostic
[`write-blog-post` skill](./skills/write-blog-post/SKILL.md). It is the
procedural source of truth for article work and loads
`docs/guia-de-estilo-de-escrita.md` as the shared voice reference.

```
src/content/blog/<translation-key>/
  pt.md      # source (required)
  en.md      # optional; needsReview: true if machine-translated
  es.md      # optional
```

Drafting defaults to PT but may begin in EN or ES when explicitly requested.
Fill frontmatter, then `git push` to rebuild and deploy. No CMS or database is
used at runtime. Before shipping,
follow [`finish-blog-post`](./skills/finish-blog-post/SKILL.md): establish the
stable Portuguese source, complete natural PT/EN/ES versions, perform the final
editorial and visual review, and validate the real publishing contract. Never
set `draft: false` until that gate passes and publication is explicitly approved.

## TypeScript (Strict)

- Avoid `any` — use `unknown` + narrowing, explicit types, or generics.
- The repo type-checks with `astro check`; keep it at **0 errors**.

## Code Style

- Optimize for clarity over cleverness; comments explain "why", not "what".
- **Avoid em dashes; use commas or parentheses instead.**
- Keep sentences short and conversational.
- Duplication is acceptable when it improves readability.

## Boy Scout Rule

Leave code better than you found it.

**Do fix (without asking):** dead code, unused imports, stale comments, misleading
names, small type-safety improvements in files you're already touching.

**Flag first:** refactors outside the task's blast radius, new shared
abstractions, anything that changes behavior, large-scale cleanups.

**Never:** go hunting for unrelated fixes, let cleanup derail the task, or rewrite
working code just because you'd write it differently.

## Linting (Strict)

- Never leave ESLint warnings — treat as errors. Fix properly, or suppress with
  an inline comment only if the rule genuinely doesn't apply.

## Before Committing

```bash
pnpm lint && pnpm check:types && pnpm build
```

- No unused files or debug logs.
- No hardcoded user-facing chrome strings (use `src/i18n/ui.ts`).
- **Never commit secrets** — DB credentials and deploy tokens come from env /
  GitHub Actions secrets, never the repo. This repo is **public**.

## Git & Issues

- Work in the current directory; branch per issue (`git checkout -b feat/<n>-<slug>`).
  Don't set up worktrees for single-feature work.
- Reference the issue in the branch and PR (e.g. "Closes #1").

## Agent Rules

- Do not invent features or expand scope beyond what's needed.
- Prefer existing patterns over new abstractions.
- Clean up what you touch, but don't go on refactoring detours.
- When unsure, ask for clarification.
- **Never** add "Co-Authored-By" lines mentioning Claude or any AI.
- **Never** mention Claude Code or any AI in commit messages, PR descriptions, or
  any GitHub content. Keep contributions stealth.
