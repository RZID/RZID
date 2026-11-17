# Design system

Foundation extracted from the review concepts: **Editorial Paper (A)** is the base, **Nocturne (C)** supplies dark values, **Swiss Ledger (B)** supplies the three-column meta row. No hero or work layout is specified here yet.

## Direction

Modern, dimensional, warm. Confident and calm, not "hacker terminal". Light paper is the default; dark is the same room at night, not a different brand.

## Color

### Light (default)

| Token               | Value                    | Use                                |
| ------------------- | ------------------------ | ---------------------------------- |
| `background`        | `#f6f3ee`                | Page                               |
| `surface`           | `#fffdf8`                | Cards, raised surfaces             |
| `foreground`        | `#141414`                | Body and headings                  |
| `muted`             | `#625d56`                | Secondary text, labels             |
| `line`              | `rgba(20, 20, 20, 0.14)` | Borders and rules                  |
| `accent`            | `#e8250d`                | Decorative rules, dots, marks only |
| `accent-text`       | `#c91f0a`                | Accent text and links              |
| `accent-control`    | `#c91f0a`                | Filled control background          |
| `accent-foreground` | `#ffffff`                | Text on `accent-control`           |
| `visual`            | `#efeae1`                | Project visual ground (future)     |

### Dark

| Token               | Value                       | Use                                |
| ------------------- | --------------------------- | ---------------------------------- |
| `background`        | `#0e0e10`                   | Page                               |
| `surface`           | `#17171a`                   | Cards, raised surfaces             |
| `foreground`        | `#f3efe8`                   | Body and headings                  |
| `muted`             | `#a49e95`                   | Secondary text, labels             |
| `line`              | `rgba(243, 239, 232, 0.14)` | Borders and rules                  |
| `accent`            | `#e8250d`                   | Decorative rules, dots, marks only |
| `accent-text`       | `#ff6b5a`                   | Accent text and links              |
| `accent-control`    | `#c91f0a`                   | Filled control background          |
| `accent-foreground` | `#ffffff`                   | Text on `accent-control`           |
| `visual`            | `#f6f3ee`                   | Project visual ground (future)     |

### Computed contrast

WCAG 2.1 ratios, sRGB, computed from the values above.

| Pair                                       | Ratio   | Result |
| ------------------------------------------ | ------- | ------ |
| Light: foreground on background            | 16.64:1 | AAA    |
| Light: muted on background                 | 5.89:1  | AA     |
| Light: muted on surface                    | 6.42:1  | AA     |
| Light: accent-text on background           | 5.15:1  | AA     |
| Light: accent-text on surface              | 5.61:1  | AA     |
| Light: accent-foreground on accent-control | 5.70:1  | AA     |
| Dark: foreground on background             | 16.83:1 | AAA    |
| Dark: muted on background                  | 7.26:1  | AAA    |
| Dark: muted on surface                     | 6.73:1  | AAA    |
| Dark: accent-text on background            | 6.89:1  | AAA    |
| Dark: accent-text on surface               | 6.39:1  | AA     |
| Dark: accent-foreground on accent-control  | 5.70:1  | AA     |

`accent` (#e8250d) is decorative only. White on it is 4.47:1, so it never carries text.

## Type

Instrument Serif for display, headings, and the wordmark. Geist Variable for body and UI. Mono only for dates and stack tags.

| Token     | Size                                      | Line height | Tracking |
| --------- | ----------------------------------------- | ----------- | -------- |
| `display` | `clamp(3rem, 2.58rem + 2.91vw, 5.2rem)`   | 1.02        | -0.035em |
| `title`   | `clamp(2.5rem, 1.76rem + 3.05vw, 4.6rem)` | 0.98        | -0.03em  |
| `heading` | `clamp(2.4rem, 1.95rem + 1.83vw, 3.6rem)` | 0.95        | -0.03em  |
| `item`    | 1.35rem                                   | 1.1         | -0.02em  |
| `lead`    | 1.02rem                                   | 1.7         | normal   |
| `body`    | 0.98rem                                   | 1.7         | normal   |
| `small`   | 0.82rem                                   | 1.6         | normal   |
| `meta`    | 0.76rem                                   | 1.4         | 0.08em   |
| `micro`   | 0.68rem                                   | 1.4         | 0.12em   |
| `tag`     | 0.64rem                                   | 1.4         | 0.04em   |

The clamps are linear interpolations between the concept sizes at 390px and 1440px. `display` goes from 52.6px to 83.2px, `title` from 40px to 72px, `heading` from 38.4px to 57.6px.

## Space

Base unit 4px. Use 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24.

| Context                 | Value                                     |
| ----------------------- | ----------------------------------------- |
| Section rhythm          | 64px mobile, 96px desktop                 |
| Header block            | 18px mobile, 22px desktop                 |
| Card padding            | 24px (20px mobile)                        |
| Control gap             | 8px inside groups, 12–16px between groups |
| Container gutter        | 20px mobile, 32px desktop                 |
| Anchored section offset | 80px (`scroll-mt-20`)                     |

## Grid and container

- Container: `1240px` max width, centered, 20px gutter at 390, 32px from 640 up.
- Page grid: 12 columns, 24px gap, single column below 1024px.
- Header is a three-zone meta row: wordmark / navigation / controls. On mobile it collapses to wordmark + menu, and the menu panel holds navigation and controls.
- Work will use full-width alternating rows with a real screenshot slot. No slot is rendered until a real image exists.

## Radius

| Token     | Value | Use                     |
| --------- | ----- | ----------------------- |
| `small`   | 10px  | Segmented control items |
| `control` | 14px  | Buttons, inputs         |
| `card`    | 20px  | Cards, project visuals  |
| `chip`    | 999px | Tags                    |

## Shadow

| Token  | Value                                                                          |
| ------ | ------------------------------------------------------------------------------ |
| `card` | `0 30px 70px -48px` light `rgba(20, 20, 20, 0.48)` / dark `rgba(0, 0, 0, 0.9)` |

Geometry from Concept A; dark shadow color from Concept C. No other shadow is used.

## Motion

| Token         | Value                           |
| ------------- | ------------------------------- |
| UI duration   | 160ms                           |
| Card duration | 420ms                           |
| UI easing     | `ease`                          |
| Card easing   | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hover lift    | 1px maximum                     |

- `prefers-reduced-motion: reduce` sets animation and transition duration to `0.01ms`, one iteration, and disables smooth scrolling.
- No looping animation, parallax, or motion that crosses text.
- Cards may tilt only on pointer devices; no tilt at all under 960px or with reduced motion.

## Components

- **Button**: primary is `accent-control` with `accent-foreground`; secondary is `surface` with a `line` border; link is text with a 1px `accent` bottom rule. Height 46px, radius `control`, weight 600. Hover lift 1px, never a color that drops below AA. Focus is global: 3px `accent-text` outline, 4px offset.
- **Card**: `surface`, 1px `line`, radius `card`, shadow `card`, 24px padding.
- **Eyebrow**: one per section maximum. `micro`, uppercase, `tracking-label`, `muted`. It introduces the section; it is not a repeated caption.
- **TextLink**: body size, `foreground`, 1px `accent` bottom rule. Hover switches to `accent-text`. Minimum 44px target.
- **Tag / TagList**: `tag` mono, uppercase, `muted`, `line` border, radius `chip`, 6px 10px padding. Tags describe stack and facts only.
- **Heading**: serif, normal weight, `text-balance`. `display`, `title`, `item` map to the scale.
- **Text**: `lead`, `body`, `small`; `muted` is a tone, not a size.
- **Header**: serif wordmark, micro uppercase navigation, theme and language controls, skip link first in tab order.
- **Mobile menu**: a button with `aria-expanded` and `aria-controls`, Enter/Space to toggle, Escape to close and return focus, links close the panel, no hover-only affordance.
- **Theme control**: three options, system / light / dark, `aria-pressed`. Locale control: EN / ID, `aria-pressed`. Both persist and apply before first paint.
- **Focus**: every interactive element shows the global focus ring. No `outline: none`.
- **Skip link**: visually hidden until focused, targets `#main`.

## Hard bans

- Bracketed labels like `[ 01 / WORK ]`, pseudo-technical captions, fake status chips.
- 2x2 equal-card grids, glassmorphism, gradient washes, emoji icons, logo marquees.
- Fake metrics, stale availability dates, invented content.
- More than one eyebrow label per section.
- Uppercase letter-spaced micro-labels outside tag and meta rows.
- Mono outside dates and stack tags.
- Decorative shapes that cross text, including offset color blocks behind copy.
- Empty placeholder boxes in production. No real image, no slot.
- Text on `accent` (#e8250d).
- Arbitrary values when a token exists; add the token first.
