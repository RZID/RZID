# DESIGN.md

## Source of truth

The owner supplied `prototype-reference.html` as the visual direction. That file is local and gitignored; it is the reference for this design system, not code to copy verbatim. Every decision below is a translation of that reference into React + Tailwind tokens.

Earlier portfolio directions (cream page + serif display, broadsheet hairlines, “at a glance” card) are retired. They are not a fallback and must not be reintroduced piecemeal.

The current light palette is provisional. Two alternatives with contrast tables are in `docs/palette-options.md`; the owner has not chosen one, so the prototype's cream + burnt orange remains in `src/styles/index.css`.

## Why this direction fits the owner

| Decision                          | One-line rationale tied to real material                                                                                                     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Game HUD flavour                  | The owner lists gaming as an interest; the pixel avatar, LV.5 and arcade styling keep that spirit without replacing standard section labels. |
| Dark navy + amber + mint palette  | Taken from the prototype; reads as an arcade/CRT screen rather than a generic SaaS dashboard.                                                |
| Light cream variant (provisional) | Kept from the prototype; paired with a pixel face, never with a serif. Alternatives await the owner's choice (`docs/palette-options.md`).    |
| Pixelify Sans for display/UI      | The prototype uses it; gives the game identity. Body copy stays system sans for readability.                                                 |
| 4px borders + 6px hard shadows    | From the prototype; tactile, cabinet-like panels instead of soft card shadows.                                                               |
| 1000px content column             | From the prototype; keeps long Indonesian prose at a readable measure.                                                                       |
| Chunky square corners             | Arcade UI has no rounded pill cards; rounding would fight the reference.                                                                     |
| Scanline texture                  | The prototype's CRT overlay. It is the only gradient in the system and is decorative.                                                        |
| Indonesian + English copy         | Recruiters were the stated audience; English strings come from the previous site, not from invention.                                        |

## Tokens

Defined in `src/styles/index.css` and exposed through `@theme inline`.

| Token       | Dark      | Light     | Use                           |
| ----------- | --------- | --------- | ----------------------------- |
| `page`      | `#161a26` | `#e9e2cf` | Page background               |
| `panel`     | `#1f2535` | `#f7f1de` | Raised surfaces               |
| `ink`       | `#ece8d8` | `#1c1b22` | Text, borders, avatar outline |
| `muted`     | `#a9a79a` | `#5c5a52` | Secondary text                |
| `accent`    | `#ffc83d` | `#a84f00` | Buttons, levels, markers      |
| `on-accent` | `#161a26` | `#fff8e8` | Text on `accent`              |
| `mint`      | `#4be3a6` | `#0b6b49` | Focus ring, cleared, status   |
| `shadow`    | `#05060a` | `#1c1b22` | Hard shadow, avatar outline   |

Utilities: `bg-page`, `bg-panel`, `text-ink`, `text-muted`, `text-accent`, `text-on-accent`, `text-mint`, `shadow-hard`, `shadow-hard-sm`, `shadow-hard-lg`, `text-shadow-hard`, `font-pixel`, `font-sans`, `text-hero`, `text-boot`, `text-section`, `max-w-content`, `ease-steps`, `ease-steps-3`, `ease-steps-5`, `animate-bob`, `animate-load`, `animate-jump`. Motion tokens: `--motion-fast` 120ms, `--motion-base` 200ms, `--motion-slow` 320ms, `--motion-slower` 600ms.

No arbitrary colour or size values in components. Add a token first if one is missing. The default theme is the OS colour scheme; only an explicit user choice is stored and overrides it.

## Type

- Display and UI chrome: Pixelify Sans 400/700, self-hosted through `@fontsource/pixelify-sans`.
- Body: system sans. It is deliberately not a second webfont.
- Copy exists in `id` and `en`; both render with the same layout. Section labels are standard recruiter terms (Work, Skills, Experience); LV.5 remains as visual flavour.
- Scale: h1 `clamp(2.75rem, 9vw, 5.75rem)`, section `clamp(1.625rem, 4vw, 2.25rem)`, body `16px/1.65`. Card copy, skill slots, and guild meta render at `16px` so the pixel face is not forced into tiny sizes.
- Hero HUD strip: three bordered cells under the fold (Base / Work / Mode) filled from real profile data; it gives the first screen structure instead of empty centred space.
- Section rhythm: `56px` mobile / `64px` desktop vertical padding. No derived counters; work cards carry their own role label instead.
- No italics, no tracking-heavy all-caps, no serif.

## Layout refinements

- Mobile header is a single 56px row: wordmark left, Menu button plus theme and language toggles right. The Menu button opens a stacked nav panel that closes on Esc, outside click, or link selection.
- Mobile hero resolves text first: location/role, name, availability, dialogue, then the sprite at `w-28`; at `lg` it returns to a 1.25fr/0.75fr two-column composition. Vertical gap tightens from `gap-8` to `gap-6` on mobile.
- Work grid is two columns at `md`. The final card spans both columns and splits internally into an icon/role sidebar and a content column, so the wide cell does not read as dead space.

## Components

- `Box` — 4px `ink` border, `panel` fill, hard shadow. Use `as="article"` for semantic cards.
- `ButtonLink` — chunky bordered button with hard shadow; press translates 3px and drops the shadow.
- `Header` — one 56px row on mobile; desktop keeps inline nav. The Menu button has `aria-expanded`/`aria-controls` and shares the theme and language toggles with the desktop row.
- `Tag` — 2px border, pixel text. Only for stack names.
- `PixelAvatar` — inline SVG sprite from the prototype's pixel grid; `shapeRendering="crispEdges"`. Click or Enter makes it jump one stepped frame; reduced motion keeps it static.
- `ProjectIcon` — one hand-defined 16x16 decorative sprite per project domain (heart, scroll, cross + coin, dumbbell, diamond node), rendered from data arrays with palette tokens and `aria-hidden`. Work cards show the project role label from `src/content/projects.ts` in a two-column grid with no derived counters.
- XP bar — a 4px scroll-progress line at the bottom of the header. CSS scroll-driven animation inside `@supports`, with a tiny scroll-listener fallback; the only functional motion.
- `Reveal` — IntersectionObserver fade/slide with `steps(5)` easing and an optional `delay` prop for stagger; visible immediately under reduced motion.
- `Starfield` — fixed 2D canvas, 70 drifting pixels, colour comes from `--ink`. rAF pauses when the canvas leaves the viewport or the tab is hidden; a `data-frame-count` attribute exposes the frame counter. One static frame under reduced motion.
- `BootScreen` — opt-in start screen via `?intro=1`; never shown by default or under reduced motion.

## Motion

Full inventory with triggers and reduced-motion behaviour: `docs/motion.md`.

- `steps()` easing everywhere; no smooth easing curves.
- The hero chat types one full sentence character by character (12ms) with a blinking caret, click-to-skip, and a replay control. The box has a fixed responsive height (`h-68 min-[360px]:h-56 sm:h-40`) so typing never shifts the layout, and a two-layer CSS tail makes it read as a speech bubble pointing at the pixel avatar (down toward the sprite on mobile, right toward it at 45% height on desktop). After it finishes it waits 3s and types the next sentence from a pool of twelve, endlessly. The full copy is present in a `.sr-only` paragraph and is instant and static under reduced motion.
- The header XP bar is functional scroll progress: CSS scroll-driven animation inside `@supports`, with a tiny scroll-listener fallback. No other scroll-linked motion.
- The avatar jumps a stepped squash-and-stretch frame on click or Enter (`animate-jump`, 320ms), unless reduced motion is requested.
- Theme changes trigger a stepped radial wipe from the toggle button: an amber core covers the page at 320ms (when the theme swaps), a mint echo follows 80ms later, and both clear at 720ms. Language changes use the same 720ms / `steps(8)` / 320ms-swap rhythm but a different geometry: four horizontal panel slices alternate direction while a large EN/ID stamp flashes. No overlay is rendered under reduced motion.
- Other motion is decorative: star drift, avatar bob, reveal, and the optional intro.
- Star drift, avatar bob, reveal, boot progress — all disabled or static under `prefers-reduced-motion`.
- The XP bar is the only scroll-linked motion. No parallax, no WebGL.

## Accessibility

- Semantic landmarks, skip link, labelled nav, `<ol>` for guild ranks.
- Focus ring: 3px `mint`, 3px offset. Boot button is focused on mount.
- Dialogue is `aria-hidden` while typing; the full text is in a `.sr-only` paragraph and the overlay button has a label.
- Contrast target is AA for body text and 3:1 for UI borders and large text.
- Measured ratios (computed from the tokens above): dark `ink/page` 14.13, `muted/page` 7.18, `ink/panel` 12.44, `muted/panel` 6.32, `on-accent/accent` 11.23, `mint/page` 10.61; light `ink/page` 13.21, `muted/page` 5.34, `ink/panel` 15.12, `muted/panel` 6.12, `on-accent/accent` 5.25, `mint/page` 5.05. All pass.
- Hotkeys require Alt+1…Alt+5, so single-key shortcuts cannot fire accidentally. They are an enhancement, never the only path to a section.
- No horizontal overflow at 390px or 1440px.

### Remaining open decision

- The light palette remains the prototype's provisional cream + burnt orange; two alternatives are in `docs/palette-options.md`. No choice has been made.

## Measured performance

After all fixes (preview): Lighthouse mobile **99 / 100 / 100 / 100**, desktop **98 / 100 / 100 / 100**. Two mobile runs reported LCP 1.4s (earlier runs were 0.8s); desktop stayed 0.8s. TBT 90–120ms mobile / 60ms desktop, down from 210/270ms before tokenising durations and batching the XP fallback. axe-core reports 0 violations in all 8 width/theme/locale combinations.

## Hard bans

These supersede anything in earlier, retired directions.

- Cream or off-white page background paired with a serif display face.
- One italic or coloured phrase inside a headline.
- Uppercase tracked eyebrows or labels above content.
- Decorative `01` / `02` / `03` section markers. Guild ranks are allowed: they are game ordinals, not section numbering.
- Mono all-caps meta labels.
- Rounded-card kits and “at a glance” cards.
- Hairline broadsheet rules as the page skeleton. Borders are 4px and opaque.
- Graph-paper or dot backgrounds. The scanline overlay is the sole texture.
- Inter, Geist, Instrument Serif, Fraunces, or Space Grotesk without a written, material-specific reason.
- Fake imperfection (generated hand-drawn marks).
- Empty placeholder boxes, invented screenshots, or unverified metrics.
- Text on `accent` unless the token `on-accent` is used.
- Any palette, font, or layout decision without a one-line rationale tied to the owner's real material, written in this file.

## Performance

- One self-hosted font family, two weights.
- No 3D, no charting, no animation libraries, no runtime CSS framework.
- Target: no horizontal overflow, fast first paint, and content visible without motion.
