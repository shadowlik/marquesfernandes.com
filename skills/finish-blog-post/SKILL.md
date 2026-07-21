---
name: finish-blog-post
description: Review, reconcile, translate, and prepare marquesfernandes.com blog articles for publication in Portuguese, English, and Spanish. Use when an article is described as finished, final, ready, complete, publishable, ready to ship, or ready to publish; when performing a final editorial or terminology review; when completing missing PT/EN/ES versions; or before changing an article from draft to published.
---

# Finish a blog post

Treat this skill as the publication gate after `write-blog-post`. A draft may begin in Portuguese, English, or Spanish, but a shippable article must have a stable Portuguese source and complete, natural PT/EN/ES versions.

## 1. Load the publishing context

1. Read `CLAUDE.md`, `skills/write-blog-post/SKILL.md`, and `docs/guia-de-estilo-de-escrita.md` completely.
2. Read every existing language file and inspect every asset in the article folder.
3. Inspect the content schema, routes, translation helpers, layout, styles, and one recent complete PT/EN/ES article group. Determine the actual publication requirements instead of assuming them.
4. Inspect related series entries, trusted product copy, and nearby project context when terminology, chronology, or links depend on them.

Portuguese is the canonical source language for this site even when drafting started in another language.

## 2. Establish the factual source

Identify the draft that contains the author's original facts and intent. Reconcile differences across language files before editing prose.

- Never invent personal experiences, opinions, results, dates, metrics, quotations, or product history.
- Flag contradictions or missing outcomes that cannot be resolved from trusted context.
- Verify unstable external facts with current primary sources when they materially affect publication.
- Treat personal screenshots, photographs, and supplied documents as evidence. Do not replace them with generated approximations.

If drafting began in English or Spanish, preserve its meaning while creating or updating the Portuguese source. Resolve factual ambiguity before propagating it to all three languages.

## 3. Perform the Portuguese editorial review

Review the complete Portuguese article for:

- Grammar, spelling, accents, agreement, punctuation, rhythm, repetition, and awkward phrasing.
- Correct grammatical gender, articles, capitalization, and brand terminology. In Portuguese, use **o HAID**, never **a HAID**, when referring to the product.
- Henrique's established voice without imitating mistakes from old posts.
- Clear structure, useful headings, focused paragraphs, and a conclusion earned by the article.
- Internal consistency in chronology, series numbering, goals, dates, metrics, and verb tense.
- Unsupported claims, accidental absolutes, stale future statements, placeholders, broken references, and AI-like filler.
- Accurate titles, descriptions, slugs, tags, links, image paths, alternative text, and frontmatter.

Preserve intentional informality. Do not flatten the author's personality into generic formal prose.

## 4. Complete all three languages

Do not call an article shippable until `pt`, `en`, and `es` files exist and express the same facts, argument, examples, links, and visual evidence.

- Translate naturally for each audience. Never translate sentence by sentence when a different construction is more idiomatic.
- Localize titles, descriptions, slugs, category names, internal links, captions, and alternative text according to repository conventions.
- Preserve the same `translationKey` across the group.
- Preserve code, media, quotations, names, measurements, and factual meaning.
- Keep series numbering and cross-links aligned in all languages.
- Set `needsReview: true` for machine-assisted translations until a human explicitly approves that language. Never clear it silently.

Review each translation independently for grammar and naturalness after checking semantic parity with Portuguese.

## 5. Validate the visual presentation in the real renderer

Confirm that every image and presentation device has editorial purpose and renders correctly in the repository environment.

- Check intrinsic dimensions, file size, aspect ratio, crop, caption, and localized alternative text.
- Confirm that sizing decisions are appropriate per image instead of relying on a global workaround. Use MDX with Astro's imported `<Image />` or `<Picture />` when a local content asset needs explicit presentation control.
- Review callouts, blockquotes, tables, code blocks, `<details>`, dividers, and color usage. Confirm that each device matches its semantic role, uses repository components and tokens, and remains consistent across translations.
- Limit decorative density. Avoid consecutive callouts, arbitrary inline colors, redundant pull quotes, and visual elements that repeat nearby prose without adding emphasis or understanding.
- Preview representative desktop and mobile widths when layout or media changed.
- Confirm that portrait screenshots do not dominate the column, diagrams remain legible, and covers crop acceptably.
- Use only Markdown, MDX, components, and styling supported by this repository.

Do not invent unsupported syntax to fix presentation. Implement the smallest reusable capability within scope or report the limitation.

## 6. Enforce the shipping gate

Before publishing, require all of the following:

1. `pt`, `en`, and `es` files exist.
2. Portuguese is stable and the translations have semantic parity.
3. All personal claims and time-sensitive statements are resolved.
4. Terminology and grammatical gender are consistent, including **o HAID**.
5. Every language has valid localized metadata and a shared `translationKey`.
6. Canonical paths, alternates, category conventions, sitemap behavior, and internal series links match the actual routing implementation.
7. Assets exist, are referenced correctly, and render appropriately.
8. There are no placeholders, broken links, em dashes, debug text, or unsupported claims.
9. `needsReview` accurately reflects human review status for each language.
10. The complete validation required by `CLAUDE.md` passes.

Keep `draft: true` unless the user explicitly asks to publish and every gate passes. If any gate remains open, report the exact blocker and do not describe the article as ready to ship.

## 7. Hand off the finished article

Report:

- Files and assets changed.
- Editorial and terminology corrections that materially affected meaning or consistency.
- Translation and `needsReview` status for PT, EN, and ES.
- Unresolved factual, temporal, visual, or routing questions.
- Validation results and whether the article passes the shipping gate.
