import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

/**
 * Content collections — scaffold stub.
 *
 * Issue #2 fleshes out the full frontmatter schema (translationKey linking,
 * canonicalPath, wpId, needsReview, etc.). This minimal version exists so the
 * project type-checks and the `src/content/` convention is in place.
 */

const lang = z.enum(['pt', 'en', 'es']);

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    lang,
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
