# Motion inventory

All motion uses `steps()` easing. Reduced motion removes decorative motion; the XP bar remains functional because it conveys scroll position.

| Element             | Duration / rate            | Easing      | Trigger                        | Reduced motion                          |
| ------------------- | -------------------------- | ----------- | ------------------------------ | --------------------------------------- |
| `Reveal`            | 500ms (+0/60/70ms stagger) | `steps(5)`  | IntersectionObserver           | Static, visible immediately             |
| Boot progress       | 1.4s                       | `steps(14)` | First visit (session)          | Gate not shown                          |
| Avatar bob          | 1s infinite                | `steps(2)`  | Always                         | Animation none                          |
| Caret blink         | 1s infinite                | `steps(2)`  | While typing                   | Static                                  |
| Typewriter          | 12ms/char, 3s pause        | n/a         | Load, loops every sentence     | Full text instantly                     |
| Avatar jump         | 320ms                      | `steps(2)`  | Click or Enter on sprite       | No jump state applied                   |
| Theme wipe          | 720ms (+80ms echo)         | `steps(8)`  | Theme toggle, swap at 320ms    | No overlay rendered                     |
| Language slices     | 720ms                      | `steps(8)`  | Language toggle, swap at 320ms | No overlay rendered                     |
| Nav / hotkey scroll | 640ms                      | 8 rAF steps | Link or Alt+number             | Instant jump                            |
| XP bar (native)     | scroll timeline            | linear      | Scroll                         | Progress still updates                  |
| XP bar (fallback)   | 90ms                       | `steps(3)`  | Scroll listener                | Transition none, progress still updates |
| Buttons             | 100ms                      | `steps(2)`  | Hover / active                 | Transition none                         |
| Work cards          | 150ms                      | `steps(3)`  | Hover                          | Transition none                         |
| Skill slots         | 100ms                      | `steps(2)`  | Hover                          | Transition none                         |
| Starfield           | 16.67ms mean frame         | n/a         | rAF loop                       | One static frame                        |

`prefers-reduced-motion` is observed live through `useReducedMotion()`. Changing the OS setting updates the typewriter and canvas without a reload.

Stagger is applied through the `delay` prop on `Reveal`: work cards 40ms apart, skill groups 50ms, guild rows 40ms. The hero blocks are not staggered so the first screen resolves immediately. Durations are tokens in `src/styles/index.css` (`--motion-fast/base/slow/slower`). See `docs/research.md` for the sources behind these ranges.
