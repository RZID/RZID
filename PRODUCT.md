# PRODUCT.md

## What this is

A one-page portfolio for Ramadhanu, a software engineer in Jakarta. It answers four questions for a recruiter or a junior developer: who he is, what he shipped, what he works with, and how to reach him.

## Audience and job

- Recruiters: scan a role, five years of context, real project names, and a contact path in the first screen.
- Junior developers: see the stack and the kind of systems he has built, without marketing filler.

## Sections

| Section   | Job                                                                |
| --------- | ------------------------------------------------------------------ |
| `home`    | Name, role framing, location, short intro, two calls to action.    |
| `quests`  | Five shipped projects with a one-line outcome and stack tags.      |
| `items`   | Grouped skills, what is being learned, and off-terminal interests. |
| `guild`   | Three roles plus an in-progress degree, shown as ordinal ranks.    |
| `contact` | Availability line, short invitation, email / GitHub / LinkedIn.    |

## Content rules

- All text and facts come from `src/content/`. Never hardcode them in JSX.
- Source data: the previous portfolio's content still in git history, the owner's `README.md`, and the supplied prototype.
- Never invent a project, employer, technology, metric, date, or contact detail.
- Numeric and time-sensitive statements are tracked in `docs/claims.md` and stay `UNVERIFIED` until the owner supplies evidence.
- Copy voice: Indonesian prose by default, English when toggled; game labels stay in English in both. This is a deliberate direction from the prototype, not a translation accident.
- Both locales are first-class. English strings come from the previous site's content; never add a new fact while translating.
- No project screenshots until real files exist. Placeholder boxes are banned.

## Decisions

- **Bilingual toggle.** `id` and `en` render the same layout; choice is stored in `localStorage` and mirrored to `<html lang>`. The toggle is a small square button beside the theme toggle.
- **Boot gate per session.** The “Press start” screen shows once per browser session, never under reduced motion, and never when the URL carries a section hash. It is a framing device, not a login.
- **Theme persists.** Choice is stored in `localStorage`; system preference is the default.
- **Hotkeys 1–5.** Shortcut to sections; every section is still reachable by nav links.
- **Static metadata.** Canonical URL and OG/Twitter tags live in `index.html`; `public/og.png` is generated from the real palette, name, role, and pixel avatar.
- **No new dependencies without asking.** Current runtime: React, React DOM, clsx, tailwind-merge, Tailwind CSS, one font package.

## Success criteria

- `bun run check`, `bun run build`, and Playwright checks at 320px, 390px, 768px, and 1440px pass.
- First screen contains a human artifact (pixel avatar) and a name, plus a role/location string.
- No horizontal overflow at either checked width.
- Reduced-motion users get static content with no boot gate.
- Every claim on the page appears in `docs/claims.md`.

## Open questions for the owner

1. Should the email address stay visible on the contact panel? It was public in the previous build.
2. English is already available; confirm the translations are acceptable to a native speaker.
3. Are there real project screenshots we can add later? None are in the repo today.
4. Should analytics be added before deployment? Canonical and social tags are already static in `index.html`.

## Non-goals

- No new visual direction beyond the supplied prototype.
- No 3D, WebGL, 2D art libraries, or chart libraries.
- No fake imperfection, no generated hand-drawn marks, no invented screenshots.
- No metrics without evidence in `docs/claims.md`.
