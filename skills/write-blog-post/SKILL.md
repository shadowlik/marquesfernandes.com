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
4. Before creating files or media, inspect the content schema, renderer, layout, styles, and representative content patterns needed for the assignment. Determine what Markdown or MDX features the site actually supports and how assets are processed, sized, captioned, and displayed.

Do not infer the voice from translated articles. Portuguese is the source language.
Do not assume that syntax or layout conventions from another publishing environment work in this repository.

## 2. Establish the assignment

Identify:

- The article mode: tutorial, explainer, list or recommendation, or personal narrative.
- The intended reader and the question or problem the article resolves.
- The concrete outcome the reader should receive.
- The facts, opinions, anecdotes, screenshots, code, and links supplied by the user.
- The visual material supplied by the user and the illustrations that could clarify the subject.
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

## 4. Plan the visual presentation

Always assess how the article can use the Astro publishing environment to improve comprehension, rhythm, and visual hierarchy. Consider images, diagrams, screenshots, charts, callouts, pull quotes, blockquotes, tables, code blocks, dividers, and disclosure sections. Every device must serve an editorial purpose; do not decorate merely to break up text.

- For brainstorming or outline requests, include useful visual opportunities in the plan, but do not create files.
- For article drafts, identify where each useful visual belongs and what it must communicate.
- For publishable article requests, create or source the useful visuals when authorized by the request. Use the appropriate image or diagram skill, keep final assets inside the article folder, and add accurate alternative text.
- Reuse user-supplied media when appropriate. Never invent screenshots, results, people, products, or documentary evidence.
- Verify technical and educational illustrations for conceptual accuracy before including them.
- Avoid text embedded in generated images when a caption or surrounding prose can carry the same information more reliably and accessibly.
- Check each asset's intrinsic dimensions, aspect ratio, file size, and expected rendered size. Portrait screenshots, wide diagrams, cover images, and inline photographs have different layout needs.
- Use only image sizing, captions, classes, components, and Markdown or MDX syntax supported by the current renderer. Follow an existing repository pattern when one exists.
- Decide presentation per image. Do not add a global layout rule to solve one portrait screenshot when covers, wide diagrams, and regular photographs should behave differently.
- Use standard Markdown image syntax when the asset should follow the article's normal responsive width. When a local asset needs individual width, layout, crop, or responsive attributes, use `.mdx`, import the asset, and render Astro's `<Image />` or `<Picture />` with explicit properties.
- Use a native HTML `<img>` only for `public/` or remote images when skipping Astro processing is intentional. Raw HTML in `.md` does not process local images stored under `src/content/`.
- Preview or render the article at desktop and mobile widths when visual layout changes. Confirm that media does not overflow, dominate the reading column, become illegible, or create excessive scrolling.
- If the required presentation is unsupported, do not invent syntax. Either implement the smallest reusable repository-level capability within the requested scope or identify the limitation and ask before expanding scope.

Choose the semantic device that matches the content:

- Use `ArticleCallout.astro` in MDX for a key takeaway, note, success state, or real warning. Select `accent`, `info`, `success`, or `warning` by meaning, not visual variety, and localize its title.
- Use `ArticleFigure.astro` for a local image that needs a caption, credit, or an intentional `narrow`, `content`, or `wide` presentation. Prefer `narrow` for portrait screenshots, `content` for normal editorial images, and `wide` only when detail benefits from the extra space.
- Use `BeforeAfter.astro` when two states, approaches, or outcomes need a direct contrast. Supply localized labels and keep both sides structurally comparable.
- Use `ArticleSteps.astro` for a short conceptual sequence whose order is part of the explanation. Use a normal Markdown ordered list for long procedures, commands, or steps that need rich nested content.
- Use a blockquote for an actual quotation or a deliberately isolated statement, not as a generic colored box.
- Use a table for compact comparison across repeated fields; do not force prose or complex mobile-unfriendly content into one.
- Use code blocks only for code, commands, configuration, or literal machine output.
- Use `<details>` for optional supporting material that would interrupt the main reading path.
- Use section breaks and whitespace for genuine narrative transitions.

Prefer repository components and design tokens over one-off HTML and arbitrary colors. Avoid stacking multiple callouts or visual devices close together. The article should still read coherently with the decoration removed.

If a visual would materially improve the article but creating or sourcing it is outside the request, mention the recommendation in the handoff.

## 5. Draft in the requested language

Start in Portuguese when the user does not specify a language. When the user supplies or requests an English or Spanish draft, work in that language without forcing an early translation. Treat non-Portuguese drafts as working sources; `finish-blog-post` will establish the final Portuguese source and complete the PT/EN/ES group before publication.

Apply the full style guide, adapted naturally to the working language, with these non-negotiable constraints:

- Write in conversational Brazilian Portuguese with correct accents.
- Sound like an experienced colleague, not a guru, marketer, or distant lecturer.
- Use first person only for facts and views supplied by Henrique or already documented in trusted project context.
- Explain technical ideas in plain language before adding detail.
- Prefer concrete examples, short paragraphs, informative headings, and honest tradeoffs.
- Use humor sparingly and naturally.
- Avoid em dashes; use commas, colons, or parentheses.
- Do not reproduce grammar mistakes, keyword repetition, or generic calls to engagement from older articles.

For technical instructions, explain what success looks like after meaningful steps. Warn before destructive or difficult-to-reverse actions. Test code and commands when the environment makes that practical.

## 6. Create repository files only when requested

Do not create or modify an article file when the user only asks for brainstorming, research, feedback, or an outline.

For a new article, use:

```text
src/content/blog/<year>/<month>/<translation-key>/
  pt.md
  en.md  # optional
  es.md  # optional
```

Use zero-padded month folders for new articles, for example
`src/content/blog/2026/07/my-article/`. This hierarchy is organizational only;
never derive a public URL from it. The complete archive follows this convention.

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

## 7. Translate only after the Portuguese source is stable

During normal drafting, create English or Spanish versions only when requested. When the article is being finalized or prepared for publication, use `finish-blog-post`, establish a stable Portuguese source, and complete all three languages.

- Translate naturally instead of literally.
- Preserve the shared `translationKey`.
- Localize the title, description, slug, and category as required by existing site conventions.
- Preserve code, links, media, and technical meaning.
- Set `needsReview: true` for machine-assisted translations awaiting human review.
- Do not silently add translations to a Portuguese-only request.

## 8. Review and validate

Before handing off an article, confirm:

1. The opening establishes a real problem, tension, or outcome.
2. The article provides concrete value and examples.
3. Facts, personal experience, and opinion are distinguishable.
4. No personal detail or result was invented.
5. The prose follows `docs/guia-de-estilo-de-escrita.md` without caricaturing the voice.
6. Headings form a clear progression and paragraphs focus on one idea.
7. Links, code, image paths, frontmatter, accents, and Markdown are valid.
8. There are no em dashes, stale placeholders, or unsupported claims.
9. Every included visual has a clear purpose, an accurate alternative text, and no unsupported or misleading detail.
10. Images and visual components render appropriately on desktop and mobile using capabilities supported by this repository.
11. Callouts, colors, tables, quotes, and other presentation devices have a clear semantic purpose and do not overwhelm the prose.

After creating or editing content files, run the narrowest relevant repository checks. Before committing, run the complete validation required by `CLAUDE.md`.

In the handoff, identify created or changed files, unresolved factual or editorial questions, and validation results.
