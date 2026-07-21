---
name: write-blog-post
description: Start, outline, draft, revise, translate, or prepare publication of articles for marquesfernandes.com while preserving Henrique Marques Fernandes's voice and the repository's content conventions. Use for any blog-authoring task, including tutorials, explainers, recommendations, personal essays, build-in-public updates, and PT/EN/ES article translations.
---

# Write a blog post

Follow this workflow from the repository root. Treat this `SKILL.md` as the procedural source of truth and `docs/guia-de-estilo-de-escrita.md` as the voice reference.

## 1. Load the required context

1. Read `CLAUDE.md` for repository, i18n, URL, and validation rules.
2. Read `docs/guia-de-estilo-de-escrita.md` completely before outlining, drafting, or revising prose.
3. Inspect two or three Portuguese articles only when useful for the requested subject or format. Prefer recent articles for voice and established tutorials for technical structure.

Do not infer the voice from translated articles. Portuguese is the source language.

## 2. Establish the assignment

Identify:

- The article mode: tutorial, explainer, list or recommendation, or personal narrative.
- The intended reader and the question or problem the article resolves.
- The concrete outcome the reader should receive.
- The facts, opinions, anecdotes, screenshots, code, and links supplied by the user.
- Whether the request is for ideation, an outline, a draft, a revision, a translation, or a publishable file.

If a first-person claim, result, opinion, or anecdote is essential but absent, ask the user for that information before presenting it as Henrique's experience. Never fabricate personal details, metrics, product history, quotations, or feelings. An outline may mark missing inputs explicitly.

Verify unstable factual claims with current primary sources when research is in scope. Distinguish sourced facts from Henrique's experience and opinion.

## 3. Plan the article

Use the matching structure from the style guide:

- **Tutorial:** problem, expected result, prerequisites, ordered steps, validation, relevant warnings, conclusion.
- **Explainer:** direct definition, everyday analogy, real example, variations, practical application.
- **List or recommendation:** problem and criteria, options, best fit, limitations, selection guidance.
- **Personal narrative:** tension, context, attempts, what failed, emotional impact, specific lesson, what changes next.

Prefer a direct search-friendly title that still sounds human. Do not stuff keywords or manufacture a dramatic hook.

Share an outline first only when the user requests one or when missing choices would materially change the article. Otherwise proceed with the requested deliverable.

## 4. Draft in Portuguese first

Draft the Portuguese source before translations. Apply the full style guide, with these non-negotiable constraints:

- Write in conversational Brazilian Portuguese with correct accents.
- Sound like an experienced colleague, not a guru, marketer, or distant lecturer.
- Use first person only for facts and views supplied by Henrique or already documented in trusted project context.
- Explain technical ideas in plain language before adding detail.
- Prefer concrete examples, short paragraphs, informative headings, and honest tradeoffs.
- Use humor sparingly and naturally.
- Avoid em dashes; use commas, colons, or parentheses.
- Do not reproduce grammar mistakes, keyword repetition, or generic calls to engagement from older articles.

For technical instructions, explain what success looks like after meaningful steps. Warn before destructive or difficult-to-reverse actions. Test code and commands when the environment makes that practical.

## 5. Create repository files only when requested

Do not create or modify an article file when the user only asks for brainstorming, research, feedback, or an outline.

For a new article, use:

```text
src/content/blog/<translation-key>/
  pt.md
  en.md  # optional
  es.md  # optional
```

Use this frontmatter shape for a new Portuguese draft:

```yaml
---
title: 'Article title'
description: "Concise description of the article's value"
date: 2026-01-01T00:00:00.000Z
lang: pt
translationKey: article-translation-key
slug: article-slug
category: desenvolvimento
tags: []
draft: true
needsReview: false
---
```

Adapt the timestamp, category, tags, key, and slug to the article. Keep the `translationKey` stable and kebab-cased across languages.

- Omit `wpId` for new articles.
- Omit `canonicalPath` unless preserving or deliberately assigning a known URL.
- Add `cover` and `coverAlt` only when the referenced image exists.
- Keep `draft: true` until the user explicitly asks to publish or confirms the article is ready.
- Never change a migrated article's existing `canonicalPath`.

## 6. Translate only after the source is stable

Create English or Spanish versions only when requested.

- Translate naturally instead of literally.
- Preserve the shared `translationKey`.
- Localize the title, description, slug, and category as required by existing site conventions.
- Preserve code, links, media, and technical meaning.
- Set `needsReview: true` for machine-assisted translations awaiting human review.
- Do not silently add translations to a Portuguese-only request.

## 7. Review and validate

Before handing off an article, confirm:

1. The opening establishes a real problem, tension, or outcome.
2. The article provides concrete value and examples.
3. Facts, personal experience, and opinion are distinguishable.
4. No personal detail or result was invented.
5. The prose follows `docs/guia-de-estilo-de-escrita.md` without caricaturing the voice.
6. Headings form a clear progression and paragraphs focus on one idea.
7. Links, code, image paths, frontmatter, accents, and Markdown are valid.
8. There are no em dashes, stale placeholders, or unsupported claims.

After creating or editing content files, run the narrowest relevant repository checks. Before committing, run the complete validation required by `CLAUDE.md`.

In the handoff, identify created or changed files, unresolved factual or editorial questions, and validation results.
