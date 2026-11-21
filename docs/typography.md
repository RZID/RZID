# Typography

## Allocation

Pixelify Sans is the only typeface in the system, used for everything: hero, section headings, nav, buttons, labels, tags, meta, card titles, body copy and footer. Two weights are self-hosted: 400 and 700.

Rationale: the owner asked for a fully pixel-typed interface. Hierarchy therefore comes from size, weight, spacing and colour tokens — not from mixing families. This also keeps the runtime to one font family.

## Scale

| Token          | Size                   | Line height | Use                                  |
| -------------- | ---------------------- | ----------- | ------------------------------------ |
| `text-meta`    | 14px                   | 21px        | Reserved; no current usage           |
| `text-label`   | 16px                   | 24px        | Nav, buttons, tags, labels, body     |
| `text-lead`    | 18px                   | 27px        | Hero eyebrow, dialogue, availability |
| `text-title`   | 20px                   | 26px        | Card titles, group headings          |
| `text-boot`    | clamp(32px, 8vw, 64px) | 1           | Boot screen title                    |
| `text-rank`    | 30px                   | 30px        | Guild ordinals                       |
| `text-section` | clamp(26px, 4vw, 36px) | 1.1         | Section headings                     |
| `text-hero`    | clamp(56px, 9vw, 92px) | 1           | Hero name                            |

Meaningful text stays at 16px or larger; 14px is reserved for meta. No serif, no italic, no tracking-heavy all-caps.

## Principles applied

- **One family, clear hierarchy.** Size and weight do the work that font switching normally would.
- **Legible measure.** Long prose stays in `max-w-prose` (~65ch); card summaries wrap naturally.
- **Balanced headings.** `text-wrap: balance` on h1/h2/h3 avoids orphaned last words.
- **Pretty paragraphs.** `text-wrap: pretty` on p avoids short last lines.
- **Tight display tracking.** Hero `-0.03em`, section `-0.02em` compensate for the wide pixel glyphs; body tracking stays normal.
- **Contrast before decoration.** Text colours come from `ink`, `muted`, `accent-text`, `on-accent` and `mint` tokens, all measured in `DESIGN.md`.
