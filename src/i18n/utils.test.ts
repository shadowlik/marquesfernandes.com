import { describe, it, expect } from 'vitest';
import { localizedPath } from './utils';

describe('localizedPath', () => {
  it('returns trailing-slash paths (site uses trailingSlash: always)', () => {
    expect(localizedPath('blog', 'pt')).toBe('/blog/');
    expect(localizedPath('blog', 'en')).toBe('/en/blog/');
    expect(localizedPath('blog', 'es')).toBe('/es/blog/');
  });

  it('maps the empty path to each locale home', () => {
    expect(localizedPath('', 'pt')).toBe('/');
    expect(localizedPath('', 'en')).toBe('/en/');
    expect(localizedPath('', 'es')).toBe('/es/');
  });

  it('normalizes leading/trailing slashes in the input', () => {
    expect(localizedPath('/blog/', 'pt')).toBe('/blog/');
  });
});
