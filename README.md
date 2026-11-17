# RZID

Personal portfolio for Ramadhanu, a software engineer in Jakarta. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Commands

Package manager: bun only. Never use npm, yarn, or pnpm; never create `package-lock.json`.

```bash
bun install
bun run dev
bun run build
bun run check
bun run format
bun run preview
```

`bun run check` runs typecheck, type-aware lint, the arrow-only check, Prettier, and duplicate detection. It must pass before a task is done. The pre-commit hook runs `lint-staged`; the pre-push hook runs `bun run check`.

## Architecture

```text
src/
  app/          App shell
  components/   ui/ primitives, layout/ Header, Footer, Section
  content/      Typed profile, project, and experience data
  features/     One folder per feature; public API is index.ts
  hooks/        Shared hooks
  lib/          Pure utilities; boundary/ is the only place for unknown
  styles/       Tailwind import and @theme tokens
  types/        Shared content types
```

Dependency direction: `app` -> `features` -> `components`/`hooks`/`lib`/`content`. Features import other features only through their `index.ts`. Shared layers never import features.

## Conventions

- Arrow functions only. `const` by default; never `var`.
- No `any`, non-null assertions, or type assertions. `unknown` only in `src/lib/boundary/`.
- `type` over `interface`; named exports only; kebab-case files; `@/` imports.
- All visible facts and text live in `src/content/`. Document metadata stays static in `index.html`.
- Use `cn()` for conditional classes. Colors, fonts, and spacing come from the tokens in `src/styles/index.css`; add a token instead of an arbitrary value.
- Follow `DESIGN.md`. Conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`).
