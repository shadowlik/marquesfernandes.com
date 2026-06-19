import { describe, it, expect } from 'vitest';
import {
  parsePermalink,
  rewriteUploadUrls,
  extractUploadPaths,
  wpHtmlToMarkdown,
  decodeEntities,
} from './transform';

describe('parsePermalink', () => {
  it('parses a default-language (pt) permalink', () => {
    const r = parsePermalink('https://marquesfernandes.com/tecnologia/boringproxy-expor-servicos/');
    expect(r).toEqual({
      canonicalPath: '/tecnologia/boringproxy-expor-servicos/',
      lang: 'pt',
      category: 'tecnologia',
      slug: 'boringproxy-expor-servicos',
    });
  });

  it('parses an en permalink with language prefix', () => {
    const r = parsePermalink(
      'https://marquesfernandes.com/en/technology/boringproxy-expose-services/',
    );
    expect(r).toEqual({
      canonicalPath: '/en/technology/boringproxy-expose-services/',
      lang: 'en',
      category: 'technology',
      slug: 'boringproxy-expose-services',
    });
  });

  it('parses an es permalink', () => {
    const r = parsePermalink('https://marquesfernandes.com/es/tecnologia-es/aburridoproxy/');
    expect(r.lang).toBe('es');
    expect(r.category).toBe('tecnologia-es');
    expect(r.slug).toBe('aburridoproxy');
  });
});

describe('rewriteUploadUrls', () => {
  it('makes absolute site upload URLs root-relative', () => {
    const html = '<img src="https://marquesfernandes.com/wp-content/uploads/2022/03/a.png">';
    expect(rewriteUploadUrls(html)).toBe('<img src="/wp-content/uploads/2022/03/a.png">');
  });

  it('handles http and www variants', () => {
    const html = '<a href="http://www.marquesfernandes.com/wp-content/uploads/2020/01/b.jpg">x</a>';
    expect(rewriteUploadUrls(html)).toBe('<a href="/wp-content/uploads/2020/01/b.jpg">x</a>');
  });
});

describe('extractUploadPaths', () => {
  it('returns unique root-relative upload paths referenced in the html', () => {
    const html =
      '<img src="/wp-content/uploads/2022/03/a.png">' +
      '<a href="/wp-content/uploads/2022/03/a.png">dup</a>' +
      '<img src="/wp-content/uploads/2021/06/c.webp">';
    expect(extractUploadPaths(html).sort()).toEqual([
      '/wp-content/uploads/2021/06/c.webp',
      '/wp-content/uploads/2022/03/a.png',
    ]);
  });
});

describe('wpHtmlToMarkdown', () => {
  it('strips Gutenberg block comments and converts basic formatting', () => {
    const html = '<!-- wp:paragraph --><p>Hello <strong>world</strong></p><!-- /wp:paragraph -->';
    expect(wpHtmlToMarkdown(html).trim()).toBe('Hello **world**');
  });

  it('converts a wp-block-code block to a fenced code block', () => {
    const html = '<pre class="wp-block-code"><code>npm install</code></pre>';
    expect(wpHtmlToMarkdown(html).trim()).toBe('```\nnpm install\n```');
  });

  it('renders an image as Markdown', () => {
    const html = '<img src="/wp-content/uploads/2022/03/a.png" alt="diagram">';
    expect(wpHtmlToMarkdown(html).trim()).toBe('![diagram](/wp-content/uploads/2022/03/a.png)');
  });

  it('converts a [caption] shortcode to image plus emphasized caption', () => {
    const html =
      '[caption id="attachment_1" align="aligncenter" width="640"]' +
      '<img src="/wp-content/uploads/a.png" alt="d" />A nice caption[/caption]';
    expect(wpHtmlToMarkdown(html).trim()).toBe(
      '![d](/wp-content/uploads/a.png)\n\n*A nice caption*',
    );
  });
});

describe('decodeEntities', () => {
  it('decodes named, decimal, and hex HTML entities', () => {
    expect(decodeEntities('What&#39;s HTTP 3 &amp; why')).toBe("What's HTTP 3 & why");
    expect(decodeEntities('don&#8217;t')).toBe('don’t');
    expect(decodeEntities('&lt;tag&gt; &quot;x&quot; &#x41;')).toBe('<tag> "x" A');
  });

  it('leaves plain text untouched', () => {
    expect(decodeEntities('plain title')).toBe('plain title');
  });
});
