# marquesfernandes.com — Design System

Goal: reproduce the current site's look exactly (the WordPress `gentium` theme as
rendered), so the migration changes the engine, not the appearance. Values below
were captured from the **live site** (computed styles), which is the source of
truth since the rendered look = UIkit + theme `style.css` + customizer settings.

## Tokens

### Color

| Token             | Value     | Usage                                                    |
| ----------------- | --------- | -------------------------------------------------------- |
| `--color-accent`  | `#E9204F` | Links, category labels, meta labels (the brand pink-red) |
| `--color-text`    | `#747474` | Body copy                                                |
| `--color-heading` | `#101010` | Headings on light backgrounds                            |
| `--color-bg`      | `#FFFFFF` | Page background                                          |
| `--color-ink`     | `#000000` | Header bar, hero backgrounds                             |
| `--color-on-dark` | `#FFFFFF` | Text on dark/hero backgrounds                            |
| `--color-rule`    | `#ededed` | Dividers, hairlines                                      |

### Typography

- **Headings / titles / brand:** Poppins, weight 700. Tight tracking at large
  sizes (~`-0.04em`). Self-hosted via `@fontsource/poppins`.
- **Body / UI:** Roboto Condensed, weight 400 (600/700 for emphasis), 17px,
  line-height 1.5. Self-hosted via `@fontsource/roboto-condensed`.
- No external font CDN (performance + privacy).

| Element               | Font             | Size        | Weight  | Notes                             |
| --------------------- | ---------------- | ----------- | ------- | --------------------------------- |
| Body                  | Roboto Condensed | 17px / 1.5  | 400     | `--color-text`                    |
| Post hero title (h1)  | Poppins          | ~48px / 1.2 | 700     | white on hero, tracking `-0.04em` |
| Content h2            | Poppins          | 28px        | 700     | `--color-heading`                 |
| Card title            | Poppins          | ~26px       | 700     | `--color-heading`                 |
| Category / meta label | Roboto Condensed | 14–16px     | 600–700 | UPPERCASE, `--color-accent`       |
| Date                  | Roboto Condensed | ~15px       | 400     | muted `--color-text`              |
| Brand "MF."           | Poppins          | ~36px       | 700     | tracking `-0.04em`                |

### Layout & spacing

- Container max-width **1200px**, centered, side padding 1rem (mobile) → 1.5rem.
- Article body measure narrower than full container (readable line length).
- Section vertical rhythm in multiples of ~30px; hero padding 90px top/bottom.

## Components

### Header (`Header.astro`)

Solid black bar (`--color-ink`), full width. Left: "MF." brand (white Poppins).
Right: primary nav (Blog, Portfolio) + language switcher, white text. Not sticky.

### Footer (`Footer.astro`)

Simple, low-key: brand + tagline, muted text.

### Post card (`PostCard.astro`) — blog index

Stacked: UPPERCASE pink category → Poppins-bold dark title → gray excerpt →
muted date. The live blog uses a "chess" checkerboard grid (text tiles
alternating with full-bleed image tiles joined by small triangle pointers); the
card content styling is shared regardless of grid treatment.

### Single post layout (`BlogPostLayout.astro`)

1. Black header bar.
2. Full-width **hero**: featured image as `background: cover` with dark overlay;
   centered UPPERCASE category + Poppins-bold white title; 90px vertical padding.
3. **Body**: two columns — a narrow left meta sidebar (UPPERCASE pink labels
   "Written by / Posted on / Tags", gray values) and the article content
   (Roboto Condensed, `--color-text`, links in `--color-accent`, Poppins h2/h3).

## Reference screenshots

Captured from the live site at 1440px (see PR #17): homepage hero, blog index
(chess grid), single post (hero + two-column body). Parity is verified against
these per page type.

## Not in scope here

Full page routing/pagination/archives render in #9/#10 using these tokens and
components; this issue establishes the system + chrome and verifies typography,
color, and the header/footer/card against the live site.
