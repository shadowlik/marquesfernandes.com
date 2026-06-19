import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

/**
 * Content collections for the trilingual (pt/en/es) site.
 *
 * Layout: one folder per article, one Markdown file per language, named by
 * locale — `src/content/blog/<translationKey>/{pt,en,es}.md`. The shared
 * `translationKey` links the trio (see `src/lib/translations.ts`); each file
 * carries its own per-language `slug` and (for migrated posts) `canonicalPath`.
 */

const lang = z.enum(['pt', 'en', 'es']);

/** Frontmatter shared by every content type. Field names match TranslatableData. */
const base = {
  title: z.string(),
  description: z.string().optional(),
  lang,
  /** Shared across the pt/en/es trio. */
  translationKey: z.string(),
  /** Per-language URL slug. */
  slug: z.string(),
  /** Exact historical path; authoritative for migrated content. */
  canonicalPath: z.string().optional(),
  /** Original WordPress post ID (provenance + comment join). */
  wpId: z.number().int().optional(),
  draft: z.boolean().default(false),
  /** True for machine translations awaiting human review. */
  needsReview: z.boolean().default(false),
};

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      /** Primary category slug, preserved in the URL. */
      category: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    ...base,
    /** Optional ordering hint for nav/footer listings. */
    order: z.number().optional(),
  }),
});

export const collections = { blog, pages };
