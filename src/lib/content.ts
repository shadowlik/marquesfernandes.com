import type { CollectionEntry } from 'astro:content';
import type { TranslatableEntry } from './translations';

/**
 * Typed bridge between the content collections and the (framework-agnostic)
 * translation-linking helpers in `./translations`.
 *
 * `Assert` is a compile-time guard: each collection entry MUST satisfy the
 * linking helpers' structural shape (lang / translationKey / slug). If a schema
 * in `content.config.ts` drifts away from that shape, `astro check` fails here —
 * once — instead of at every call site that links translations.
 */
type Assert<T extends TranslatableEntry> = T;

export type BlogEntry = Assert<CollectionEntry<'blog'>>;
export type PageEntry = Assert<CollectionEntry<'pages'>>;

export type AnyContentEntry = BlogEntry | PageEntry;
