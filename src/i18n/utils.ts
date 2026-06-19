import { defaultLang, ui, type Lang, type UIKey } from './ui';

/**
 * Read the active locale from a URL.
 *
 * The default language (`pt`) has no prefix, so any path whose first segment
 * is not a known non-default locale resolves to the default.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en' || seg === 'es') return seg;
  return defaultLang;
}

/** Returns a `t()` translator bound to the given locale, falling back to default. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware absolute path.
 *
 * `localizedPath('blog', 'pt')` -> `/blog`
 * `localizedPath('blog', 'en')` -> `/en/blog`
 */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return clean ? `${prefix}/${clean}` : prefix || '/';
}
