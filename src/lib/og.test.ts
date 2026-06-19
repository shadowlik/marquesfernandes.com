import { describe, it, expect } from 'vitest';
import {
  DEFAULT_OG_ROUTE,
  articleOgRoute,
  homeOgRoute,
  blogOgRoute,
  ogImagePath,
  categoryLabel,
  formatOgDate,
  truncateTitle,
} from './og';

describe('og routes', () => {
  it('builds article/home/blog routes', () => {
    expect(articleOgRoute('pt', 'afinal-o-que-e-nodejs')).toBe('pt/afinal-o-que-e-nodejs');
    expect(homeOgRoute('en')).toBe('home-en');
    expect(blogOgRoute('es')).toBe('blog-es');
    expect(DEFAULT_OG_ROUTE).toBe('default');
  });

  it('maps a route to its public png path', () => {
    expect(ogImagePath('pt/foo')).toBe('/og/pt/foo.png');
    expect(ogImagePath(DEFAULT_OG_ROUTE)).toBe('/og/default.png');
  });
});

describe('categoryLabel', () => {
  it('uppercases and de-hyphenates the slug', () => {
    expect(categoryLabel('tecnologia')).toBe('TECNOLOGIA');
    expect(categoryLabel('web-design')).toBe('WEB DESIGN');
  });
});

describe('formatOgDate', () => {
  it('formats day month year, uppercase, no periods, TZ-stable', () => {
    expect(formatOgDate(new Date('2020-04-12'), 'pt')).toBe('12 ABR 2020');
    expect(formatOgDate(new Date('2020-04-12'), 'en')).toBe('12 APR 2020');
    expect(formatOgDate(new Date('2020-04-12'), 'es')).toBe('12 ABR 2020');
  });
});

describe('truncateTitle', () => {
  it('keeps short titles and ellipsizes long ones', () => {
    expect(truncateTitle('Short title')).toBe('Short title');
    const long = 'x'.repeat(120);
    const out = truncateTitle(long);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(70);
  });
});
