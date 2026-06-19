import { defaultLang, languages, type Lang } from '@/i18n/ui';

/**
 * Links content across pt/en/es. Operates on a minimal structural shape so the
 * logic stays framework-agnostic and unit-testable without the Astro runtime;
 * real `CollectionEntry` objects satisfy it.
 */
export interface TranslatableData {
  lang: Lang;
  /** Shared across a pt/en/es trio (replaces Polylang's grouping). */
  translationKey: string;
  /** Per-language URL slug. */
  slug: string;
  /** Primary category slug, part of the historical URL. */
  category?: string;
  /** Exact historical path; authoritative for migrated posts. */
  canonicalPath?: string;
}

export interface TranslatableEntry {
  data: TranslatableData;
}

export type TranslationGroup<T extends TranslatableEntry = TranslatableEntry> = Partial<
  Record<Lang, T>
>;

const allLangs = Object.keys(languages) as Lang[];

/** Group entries into per-language buckets keyed by `translationKey`. */
export function groupByTranslationKey<T extends TranslatableEntry>(
  entries: readonly T[],
): Map<string, TranslationGroup<T>> {
  const groups = new Map<string, TranslationGroup<T>>();
  for (const entry of entries) {
    const { translationKey, lang } = entry.data;
    const group = groups.get(translationKey) ?? {};
    group[lang] = entry;
    groups.set(translationKey, group);
  }
  return groups;
}

/** Every language version sharing the entry's key, including the entry itself. */
export function getSiblings<T extends TranslatableEntry>(
  entry: T,
  entries: readonly T[],
): TranslationGroup<T> {
  return groupByTranslationKey(entries).get(entry.data.translationKey) ?? {};
}

/** Locales absent from a translation group, in canonical order. */
export function missingLanguages(group: TranslationGroup): Lang[] {
  return allLangs.filter((lang) => !group[lang]);
}

/**
 * The URL path for an entry. Prefers an explicit `canonicalPath` (migrated
 * posts); otherwise builds `/{category}/{slug}/`, locale-prefixed for non-default
 * languages, mirroring the legacy Polylang + `/%category%/%postname%/` scheme.
 */
export function resolveCanonicalPath(data: TranslatableData): string {
  if (data.canonicalPath) return data.canonicalPath;

  const segments = [data.category, data.slug].filter(Boolean) as string[];
  const prefix = data.lang === defaultLang ? '' : `/${data.lang}`;
  return `${prefix}/${segments.join('/')}/`;
}

/** hreflang alternates: one path per available language version of the entry. */
export function getAlternates<T extends TranslatableEntry>(
  entry: T,
  entries: readonly T[],
): { lang: Lang; path: string }[] {
  const siblings = getSiblings(entry, entries);
  return allLangs
    .filter((lang) => siblings[lang])
    .map((lang) => ({ lang, path: resolveCanonicalPath(siblings[lang]!.data) }));
}
