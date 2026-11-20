# Project: personal portfolio

React 19 + TypeScript + Vite + Tailwind CSS v4. Audience: recruiters and junior developers. Quality bar: fast, accessible, and faithful to the supplied pixel-game prototype.

## Commands

- `bun run dev` — dev server
- `bun run build` — typecheck + production build into `build/`
- `bun run preview` — serve the build
- `bun run check` — typecheck, type-aware lint, Prettier check, contrast guard
- `bun run format` — Prettier (Tailwind classes are sorted)

Package manager: bun only. Never use npm, yarn, or pnpm; never create `package-lock.json`. `bun run check` must pass before a task is reported as done.

## Hard rules (enforced by tooling; do not work around them)

- Arrow functions only. The `function` keyword is banned. Class and object methods are the only exception.
- `const` by default, `let` only when reassigned. Never `var`.
- No `any`, non-null assertions (`!`), or type assertions (`as`). Use annotations, `satisfies`, or type guards.
- `type` over `interface`; `as const` objects over enums. Named exports only (default exports only in config files).
- File names are kebab-case (`hero-section.tsx` exports `HeroSection`).
- Absolute imports via `@/`. Parent-relative imports (`../`) are banned inside `src/features/`.
- Do not disable a lint rule or add `// @ts-ignore`. If a rule blocks you, stop and ask.

## Architecture

```text
src/
  app/          App shell and the post-boot site; may import anything
  features/     One folder per section (boot, hero, quests, items, guild, contact) plus work/icons for project sprites. Public API = index.ts only.
  components/   ui/ = presentational primitives, layout/ = Header, Footer, Section, Starfield. No feature imports.
  content/      Typed data: profile, projects, experience, skills, site. Single source of truth for all text facts.
  hooks/        Shared hooks
  lib/          Pure utilities (cn)
  styles/       index.css: Tailwind import, tokens, globals
  types/        Shared content types
```

Dependency direction: `app` -> `features` -> `components`/`hooks`/`lib`/`content`/`types`. Features import other features only through `index.ts`. Shared layers never import features or app.

## DRY rules

- Search for an existing component, hook, or util before writing a new one.
- The third repetition of markup, class combination, or logic gets extracted. Class combinations become components, not `@apply`.
- Text, links, dates, and labels live in `src/content/` and render from there. Never hardcode them in JSX.
- Use `cn()` from `@/lib/cn` for conditional classes.
- Copy is bilingual (`Localized`); render it with `useT()` from `@/lib/locale`. Never add a new fact while translating.
- Colors, fonts, spacing, and motion come from tokens in `src/styles/index.css`. No arbitrary values when a token exists; add the token first.
- Stagger reveals with the `delay` prop on `Reveal`; keep the hero blocks un-staggered. Durations come from `--motion-fast/base/slow/slower`; see `docs/motion.md` and `docs/research.md` before changing a duration or easing.
- Decorative pixel art is hand-defined data arrays rendered to SVG (`src/features/work/icons/`), never generated screenshots or fake UI.

## Content integrity

- Never invent facts about the owner: projects, technologies, metrics, dates, employers, or contact details.
- Missing information = a visible placeholder and a question to the owner.
- Document metadata (title, lang, description, theme-color) stays static in `index.html`.
- Numeric and time-sensitive claims are tracked in `docs/claims.md` and stay `UNVERIFIED` until the owner supplies evidence.
- `prototype-reference.html` is a local, gitignored reference. Do not commit it, and do not copy its code verbatim: translate it into tokens and components.

## Design

- Follow `DESIGN.md`. It records the palette, type, components, motion, and hard bans with material rationales.
- If a visual decision is not covered there, ask; do not improvise.
- No serif display, no rounded cards, no hairline broadsheet rules, no hand-drawn fake imperfection, no placeholder boxes.
- Accessibility: semantic HTML, visible mint focus, AA contrast, `prefers-reduced-motion` respected. Known carried gaps are listed in `DESIGN.md`; do not claim they are fixed.
- Heavy libraries (3D, charts, animation) are not allowed without asking first.

## Workflow

- Small steps. After each one: run `bun run check`, then list what changed.
- Conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `ci:`). One semantic commit per small change.
- Verify UI changes with Playwright screenshots at 390px and 1440px before reporting done.
- Read `PRODUCT.md` for scope and open questions before adding features.
