import { describe, it, expect } from 'vitest';
import {
  groupByTranslationKey,
  getSiblings,
  missingLanguages,
  resolveCanonicalPath,
  getAlternates,
  type TranslatableEntry,
} from '@/lib/translations';
import type { Lang } from '@/i18n/ui';

function make(
  lang: Lang,
  translationKey: string,
  slug: string,
  extra: { category?: string; canonicalPath?: string } = {},
): TranslatableEntry {
  return { data: { lang, translationKey, slug, ...extra } };
}

// A single article that exists in all three languages.
const boringproxy = [
  make('pt', 'boringproxy', 'boringproxy-como-expor-servicos', { category: 'tecnologia' }),
  make('en', 'boringproxy', 'boringproxy-how-to-expose-services', { category: 'technology' }),
  make('es', 'boringproxy', 'boringproxy-como-exponer-servicios', { category: 'tecnologia' }),
];

// An article missing its English translation.
const onlyPtEs = [
  make('pt', 'memes', 'sites-de-memes', { category: 'design' }),
  make('es', 'memes', 'sitios-de-memes', { category: 'design' }),
];

describe('groupByTranslationKey', () => {
  it('groups entries by translationKey with per-language access', () => {
    const groups = groupByTranslationKey([...boringproxy, ...onlyPtEs]);

    expect(groups.size).toBe(2);
    expect(groups.get('boringproxy')?.en?.data.slug).toBe('boringproxy-how-to-expose-services');
    expect(groups.get('memes')?.pt?.data.slug).toBe('sites-de-memes');
    expect(groups.get('memes')?.en).toBeUndefined();
  });
});

describe('getSiblings', () => {
  it('returns every language version sharing the entry key, including itself', () => {
    const en = boringproxy[1];
    const siblings = getSiblings(en, boringproxy);

    expect(Object.keys(siblings).sort()).toEqual(['en', 'es', 'pt']);
    expect(siblings.pt?.data.slug).toBe('boringproxy-como-expor-servicos');
  });
});

describe('missingLanguages', () => {
  it('lists locales absent from a translation group', () => {
    const groups = groupByTranslationKey(onlyPtEs);
    expect(missingLanguages(groups.get('memes')!)).toEqual(['en']);
  });

  it('returns an empty array for a complete trio', () => {
    const groups = groupByTranslationKey(boringproxy);
    expect(missingLanguages(groups.get('boringproxy')!)).toEqual([]);
  });
});

describe('resolveCanonicalPath', () => {
  it('uses an explicit canonicalPath when present', () => {
    const e = make('en', 'k', 's', { canonicalPath: '/en/custom/legacy-path/' });
    expect(resolveCanonicalPath(e.data)).toBe('/en/custom/legacy-path/');
  });

  it('computes /{category}/{slug}/ for the default language (pt)', () => {
    expect(resolveCanonicalPath(boringproxy[0].data)).toBe(
      '/tecnologia/boringproxy-como-expor-servicos/',
    );
  });

  it('prefixes the locale for en/es', () => {
    expect(resolveCanonicalPath(boringproxy[1].data)).toBe(
      '/en/technology/boringproxy-how-to-expose-services/',
    );
  });

  it('omits the category segment when absent', () => {
    expect(resolveCanonicalPath(make('pt', 'k', 'just-a-slug').data)).toBe('/just-a-slug/');
  });
});

describe('getAlternates', () => {
  it('returns an hreflang entry per available language version', () => {
    const alts = getAlternates(boringproxy[0], boringproxy);
    expect(alts).toContainEqual({
      lang: 'en',
      path: '/en/technology/boringproxy-how-to-expose-services/',
    });
    expect(alts).toContainEqual({
      lang: 'pt',
      path: '/tecnologia/boringproxy-como-expor-servicos/',
    });
    expect(alts).toHaveLength(3);
  });
});
