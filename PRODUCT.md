# PRODUCT.md

## What this is

A one-page portfolio for Ramadhanu, a software engineer in Jakarta. It answers four questions for a recruiter or a junior developer: who he is, what he shipped, what he works with, and how to reach him.

## Audience and job

- Recruiters: scan a role, five years of context, real project names, and a contact path in the first screen.
- Junior developers: see the stack and the kind of systems he has built, without marketing filler.

## Sections

| Section   | Job                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------ |
| `home`    | Name, role, location, availability, intro chat, base/work/mode HUD strip, three calls to action. |
| `quests`  | Five shipped projects with a one-line outcome and stack tags.                                    |
| `items`   | Grouped skills, what is being learned, and off-terminal interests.                               |
| `guild`   | Three roles plus an in-progress degree, shown as ordinal ranks.                                  |
| `contact` | Availability line, short invitation, email / GitHub / LinkedIn.                                  |

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
- **Fast interactive chat.** The dialogue types at 12ms per character with skip and replay, then picks a fresh combination of three lines from a pool of real copy every 2.6s. No new fact is generated; only the combination changes. The full summary is in the DOM for assistive tech and reduced-motion users get it instantly and statically.
- **Theme follows the system by default.** `localStorage` is written only when the user explicitly toggles; until then, OS colour-scheme changes are followed live.
- **Hotkeys 1–5.** Shortcut to sections; every section is still reachable by nav links.
- **Static metadata.** Canonical URL and OG/Twitter tags live in `index.html`; `public/og.png` is generated from the real palette, name, role, and pixel avatar.
- **No new dependencies without asking.** Current runtime: React, React DOM, clsx, tailwind-merge, Tailwind CSS, one font package.

## Success criteria

- `bun run check`, `bun run build`, and Playwright checks at 320px, 390px, 768px, and 1440px pass.
- First screen contains a name, role, location, availability, a complete summary, and work/email/GitHub links; no gate and no delayed copy.
- No horizontal overflow at either checked width.
- Reduced-motion users get static content with no boot gate.
- Every claim on the page appears in `docs/claims.md`.

## Open questions for the owner

1. Should the email address stay visible on the contact panel? It was public in the previous build.
2. English is already available; confirm the translations are acceptable to a native speaker.
3. No real project screenshots are available; none will be added until files exist. No placeholders.
4. Analytics is skipped: no ID or token was supplied. Canonical and social tags are already static in `index.html`.

## Non-goals

- No new visual direction beyond the supplied prototype.
- No 3D, WebGL, 2D art libraries, or chart libraries.
- No fake imperfection, no generated hand-drawn marks, no invented screenshots.
- No metrics without evidence in `docs/claims.md`.
