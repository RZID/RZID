# Typography

## Allocation

Pixelify Sans is a display face, not a reading face. It is used only for:

- Hero name (`text-hero`)
- Section headings (`text-section`)
- Boot title (`text-boot`)

Everything else — nav, buttons, labels, tags, meta, card titles, body copy, footer — uses the system UI stack. This keeps the arcade identity while making functional text easy to scan, which matters more for a recruiter than novelty at 14–16px.

Rationale: the owner's real material is engineer/mentor work, not a game studio. The pixel face is the frame; the readable system face carries the facts.

## Scale

| Token          | Size                   | Line height | Use                                  |
| -------------- | ---------------------- | ----------- | ------------------------------------ |
| `text-meta`    | 14px                   | 21px        | Footer, secondary hints              |
| `text-label`   | 16px                   | 24px        | Nav, buttons, tags, labels, body     |
| `text-lead`    | 18px                   | 27px        | Hero eyebrow, dialogue, availability |
| `text-title`   | 20px                   | 26px        | Card titles, group headings          |
| `text-rank`    | 30px                   | 30px        | Guild ordinals                       |
| `text-section` | clamp(26px, 4vw, 36px) | 1.1         | Section headings (Pixelify)          |
| `text-hero`    | clamp(44px, 9vw, 92px) | 1           | Hero name (Pixelify)                 |
| `text-boot`    | clamp(32px, 8vw, 64px) | 1.05        | Boot title (Pixelify)                |

## Principles applied

- **One display voice.** Only three display contexts use Pixelify; everything else shares one system stack.
- **Hierarchy by size/weight, not by family.** Body 16px, lead 18px, card title 20px, section 26–36px, hero 44–92px.
- **Legible measure.** Long prose stays in `max-w-prose` (~65ch); card summaries wrap naturally.
- **Balanced headings.** `text-wrap: balance` on h1/h2/h3 avoids orphaned last words.
- **Pretty paragraphs.** `text-wrap: pretty` on p avoids short last lines.
- **Tight display tracking.** Hero `-0.03em`, section `-0.02em` compensate for the wide pixel glyphs; body tracking stays normal.
- **Contrast before decoration.** Text colours come from `ink`, `muted`, `accent-text`, `on-accent` and `mint` tokens, all measured in `DESIGN.md`.
