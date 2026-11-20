# PRODUCT.md

## What this is

A one-page portfolio for Ramadhanu, a software engineer in Jakarta. It answers four questions for a recruiter or a junior developer: who he is, what he shipped, what he works with, and how to reach him.

## Audience and job

- Recruiters: scan a role, five years of context, real project names, and a contact path in the first screen.
- Junior developers: see the stack and the kind of systems he has built, without marketing filler.

## Sections

| Section   | Job                                                                                                                                                                   |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`    | Name, role, location, availability, intro chat, clickable jumping avatar, base/work/mode HUD strip, three calls to action; text resolves before the sprite on mobile. |
| `quests`  | Five work cards with hand-defined pixel icons, per-project role labels, outcomes and stack tags; no derived counters.                                                 |
| `items`   | Grouped skills, what is being learned, and off-terminal interests.                                                                                                    |
| `guild`   | Three roles plus an in-progress degree, shown as ordinal ranks.                                                                                                       |
| `contact` | Availability line, short invitation, email / GitHub / LinkedIn.                                                                                                       |

## Content rules

- All text and facts come from `src/content/`. Never hardcode them in JSX.
- Source data: the previous portfolio's content still in git history, the owner's `README.md`, and the supplied prototype.
- Never invent a project, employer, technology, metric, date, or contact detail.
- Numeric and time-sensitive statements are tracked in `docs/claims.md` and stay `UNVERIFIED` until the owner supplies evidence.
- Copy voice: English by default, Indonesian when the browser or toggle selects it. Section labels use standard recruiter terms (Work, Skills, Experience); the game flavour lives in the pixel avatar, LV.5, and visual treatment.
- Both locales are first-class. English strings come from the previous site's content; never add a new fact while translating.
- No project screenshots until real files exist. Placeholder boxes are banned.

## Decisions

- **Bilingual toggle.** `id` and `en` render the same layout; choice is stored in `localStorage` and mirrored to `<html lang>`. Default is English; Indonesian is used only when the browser explicitly reports `id` or `id-ID`. The toggle is a small square button beside the theme toggle.
- **Intro is opt-in.** The “Press start” screen appears only with `?intro=1` (footer link), never by default and never under reduced motion. A recruiter never has to click through a gate.
- **Recruiter-first labelling.** Nav and section headings use Work / Skills / Experience / Contact. The game flavour stays visual; it does not block information scent.
- **Fast interactive chat.** The dialogue types one full, creatively worded sentence at 12ms per character with skip and replay. The box is fixed-height so nothing shifts; the wording uses game metaphors but restates only existing facts. After finishing it waits 3s and types the next sentence from a pool of twelve. The full summary is in the DOM for assistive tech and reduced-motion users get it instantly and statically.
- **Theme follows the system by default.** `localStorage` is written only when the user explicitly toggles; until then, OS colour-scheme changes are followed live.
- **One-row mobile header.** At 390px the header is 56px tall with a Menu button; theme and language toggles stay visible and the stacked panel closes on Esc, outside click or link selection.
- **Alt+1…Alt+5 hotkeys.** Requirement of the Alt modifier prevents accidental single-key jumps; nav links remain the primary path and the footer announces the shortcut.
- **Staggered reveals.** Cards and rows enter 40ms apart, skill groups 50ms; the hero does not stagger, so the first screen resolves immediately. Durations and sources are in `docs/motion.md` and `docs/research.md`.
- **Work-card identity.** One decorative 16x16 sprite per project domain plus the project's role label; no fake screenshots and no derived counters.
- **Light palette undecided.** Two alternatives are documented in `docs/palette-options.md`; the prototype's cream + burnt orange stays until the owner picks one.
- **Static metadata.** Canonical URL, OG/Twitter tags, Person JSON-LD and a `<noscript>` fallback live in `index.html`; `public/og.png` is a real screenshot of the current hero. `public/robots.txt` and `public/sitemap.xml` are real files, with `public/_headers` requesting `application/xml` for the sitemap on Cloudflare Pages.
- **No new dependencies without asking.** Current runtime: React, React DOM, clsx, tailwind-merge, Tailwind CSS, one font package.

## Success criteria

- `bun run check`, `bun run build`, and Playwright checks at 320px, 390px, 768px, and 1440px pass.
- First screen contains a name, role, location, availability, a complete summary, and work/email/GitHub links; no gate and no delayed copy.
- No horizontal overflow at either checked width; mobile full-page screenshots are tiled at 1600px without capping height.
- Reduced-motion users get static content with no boot gate.
- Every claim on the page appears in `docs/claims.md`.

## Open questions for the owner

1. Should the email address stay visible on the contact panel? It was public in the previous build.
2. English is already available; confirm the translations are acceptable to a native speaker.
3. No real project screenshots are available; none will be added until files exist. No placeholders.
4. Analytics is skipped: no ID or token was supplied. Canonical and social tags are already static in `index.html`.
5. Which light palette from `docs/palette-options.md` should replace the provisional cream + burnt orange? (only remaining decision)

## Non-goals

- No new visual direction beyond the supplied prototype.
- No 3D, WebGL, 2D art libraries, or chart libraries.
- No fake imperfection, no generated hand-drawn marks, no invented screenshots; pixel icons are hand-defined data arrays only.
- No metrics without evidence in `docs/claims.md`.
