# Project: personal portfolio (React + TypeScript + Vite + Tailwind v4)

Audience: recruiters and junior developers. Quality bar: modern, fast, accessible, and never generic "AI slop".

## Commands

- `npm run dev` - dev server
- `npm run build` - typecheck + production build
- `npm run check` - typecheck, lint (type-aware), arrow-only, format check, duplication. **Must pass before you report any task as done.**
- `npm run format` - Prettier (Tailwind classes are auto-sorted)

## Hard rules (enforced by tooling; do not work around them)

- Arrow functions only. The `function` keyword is banned (declarations and expressions). Class and object methods are the only exception.
- `const` by default, `let` only when reassigned. Never `var`.
- No `any`. No non-null assertions (`!`). No type assertions (`as`); use type annotations, `satisfies`, or type guards.
- `unknown` is allowed only inside `src/lib/boundary/` (parsing and validating external data). Everything else receives already-typed values.
- `type` over `interface`. `as const` objects over enums. Named exports only (default exports only in config files).
- File names are kebab-case (`hero-section.tsx` exports `HeroSection`).
- Absolute imports via `@/`. Parent-relative imports (`../`) are banned in `src/features/`.
- Do not disable a lint rule or add `// @ts-ignore`. If a rule blocks you, stop and ask.

## Architecture

```
src/
  app/          App shell, providers, routing (may import anything)
  features/     One folder per feature (hero, work, fit-check, notes). Public API = index.ts only.
  components/   ui/ = presentational primitives, layout/ = Header, Footer, Section. No feature imports.
  content/      Typed data: profile, projects, experience. Single source of truth for all text facts.
  hooks/        Shared hooks
  lib/          Pure utilities (cn, formatters). lib/boundary/ = the only place `unknown` is allowed
  styles/       index.css (Tailwind import and @theme tokens)
  types/        Shared types
```

Dependency direction: `app` -> `features` -> `components`/`hooks`/`lib`/`content`. Features never import other features' internals, only their `index.ts`. Shared layers never import features.

## DRY rules

- Before writing a component, hook, or util, search the codebase for an existing one.
- Third repetition of anything (markup, class combination, logic, string) = extract it. Class combinations become components, not `@apply`.
- Text, project data, links, and dates live in `src/content/` and are rendered from there. Never hardcode them in JSX.
- Use `cn()` from `@/lib/cn` for conditional classes.
- Colors, fonts, spacing come from Tailwind theme tokens defined in `src/styles/index.css`. No arbitrary values (`text-[#e8250d]`, `w-[317px]`) unless there is no token and you add one first.

## Content integrity

- Never invent facts about the owner: projects, technologies, metrics, dates, employers, contact details.
- Missing information = a visible placeholder and a question to the owner.

## Design

- Follow `DESIGN.md`. If a visual decision is not covered there, ask; do not improvise.
- Accessibility: semantic HTML, visible focus states, AA contrast, `prefers-reduced-motion` respected.
- Heavy libraries (3D, charts) are lazy-loaded and need a static fallback.

## Workflow

- Small steps. After each one: run `npm run check`, then list what changed.
- Conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`).
- New dependencies: ask first, with a one-line justification. Allowed by design: three, @react-three/fiber, @react-three/drei, gsap.
