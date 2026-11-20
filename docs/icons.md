# Pixel glyphs

`TechIcon` renders hand-defined 16x16 pixel glyphs from data arrays in `src/components/ui/tech-icon/sprites.ts`.

**These are not official logos.** They are decorative, domain-inspired approximations (React as an atom, NestJS as a cat face, Redis as stacked layers, etc.), drawn by hand to match the arcade identity. They are `aria-hidden` and carry no claim, endorsement or brand accuracy.

They appear in:

- Work card stack tags (`src/components/ui/tag.tsx`)
- Skill slots (`src/features/items/items-section.tsx`)

Palette comes from design tokens: `var(--ink)` for outlines, `var(--muted)` for the main glyph, with `var(--accent)` / `var(--mint)` available for highlights in the work-card sprites. Tech glyphs use muted fill so the tags stay readable instead of turning into a wall of bright yellow dots.

Size is fixed at 16px (`h-4 w-4`), matching the 16px label text. Meaningful text remains 16px; no glyph replaces a label.

The project-domain sprites for Cara.sg, Affluent.sg, JebHealth, LVE Gym and Pinknode live separately in `src/features/work/icons/` and follow the same rule: decorative, hand-defined, not screenshots or official marks.
