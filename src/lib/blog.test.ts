import { describe, it, expect } from 'vitest';
import { postsForLang, postsForCategory, categoryArchives, stripCategoryPath } from './blog';
import type { Lang } from '@/i18n/ui';

function p(lang: Lang, category: string, dateISO: string, draft = false) {
  return {
    data: { lang, category, date: new Date(dateISO), draft, canonicalPath: `/${category}/x/` },
  };
}

const posts = [
  p('pt', 'tecnologia', '2022-01-01'),
  p('pt', 'design', '2023-05-01'),
  p('pt', 'tecnologia', '2024-03-01'),
  p('en', 'technology', '2024-01-01'),
  p('pt', 'design', '2020-01-01', true), // draft, excluded
];

describe('postsForLang', () => {
  it('keeps the language, drops drafts, sorts newest first', () => {
    const r = postsForLang(posts, 'pt');
    expect(r.map((e) => e.data.date.getFullYear())).toEqual([2024, 2023, 2022]);
    expect(r.every((e) => e.data.lang === 'pt')).toBe(true);
  });
});

describe('postsForCategory', () => {
  it('filters a language to a single category', () => {
    const r = postsForCategory(posts, 'pt', 'tecnologia');
    expect(r).toHaveLength(2);
    expect(r.every((e) => e.data.category === 'tecnologia')).toBe(true);
  });
});

describe('stripCategoryPath', () => {
  it('drops the category segment from a default-language path', () => {
    expect(stripCategoryPath('/tecnologia/boringproxy-expor-servicos/')).toBe(
      '/boringproxy-expor-servicos/',
    );
  });

  it('keeps the locale prefix for en/es', () => {
    expect(stripCategoryPath('/en/technology/boringproxy-expose-services/')).toBe(
      '/en/boringproxy-expose-services/',
    );
    expect(stripCategoryPath('/es/tecnologia-es/aburridoproxy/')).toBe('/es/aburridoproxy/');
  });
});

describe('categoryArchives', () => {
  it('lists unique (lang, category) pairs with their archive path', () => {
    const r = categoryArchives(posts);
    expect(r).toContainEqual({
      lang: 'pt',
      category: 'tecnologia',
      path: '/tecnologia/',
      count: 2,
    });
    expect(r).toContainEqual({
      lang: 'en',
      category: 'technology',
      path: '/en/technology/',
      count: 1,
    });
    // the draft-only would still count its category if a non-draft exists; design has 1 non-draft
    expect(r.find((a) => a.category === 'design')?.count).toBe(1);
  });
});
