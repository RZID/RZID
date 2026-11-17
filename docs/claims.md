# Claims register

Every numeric or time-sensitive statement in the site copy. Status is **UNVERIFIED** until the owner supplies a source, baseline, and measurement window. Do not promote a claim to verified without that evidence.

| Claim                                | Where used                                                                                     | Baseline (from -> to)             | How measured                   | Window                         | Status     |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------ | ------------------------------ | ---------- |
| 10K+ installs                        | `src/content/projects.ts` Cara.sg `outcome.en` / `outcome.id`                                  | Unknown -> 10K+ installs          | No measurement record          | Unknown                        | UNVERIFIED |
| Zero downtime                        | `src/content/experience.ts` Embreo highlight 1                                                 | Normal downtime -> zero downtime  | No measurement record          | Unknown                        | UNVERIFIED |
| ~50% faster API responses            | `src/content/experience.ts` Embreo highlight 2                                                 | Slow API responses -> ~50% faster | No measurement record          | Unknown                        | UNVERIFIED |
| 10K+ real users                      | `src/content/experience.ts` Embreo highlight 3                                                 | Unknown -> 10K+ users             | No measurement record          | Unknown                        | UNVERIFIED |
| ~30% fewer payment failures          | `src/content/experience.ts` Embreo highlight 5                                                 | Payment failures -> ~30% lower    | No measurement record          | Unknown                        | UNVERIFIED |
| Hour-long deploy -> ~10 min pipeline | `src/content/experience.ts` Embreo highlight 7                                                 | ~1 hour -> ~10 minutes            | No measurement record          | Unknown                        | UNVERIFIED |
| ~80% higher pass rate                | `src/content/experience.ts` SMK highlight 2                                                    | Unknown pass rate -> +~80%        | No measurement record          | Unknown                        | UNVERIFIED |
| Server downtime days -> hours        | `src/content/experience.ts` SMK highlight 4                                                    | Days -> hours                     | No measurement record          | Unknown                        | UNVERIFIED |
| 5+ sites in 6 months                 | `src/content/experience.ts` Freelance highlight 3                                              | 0 -> 5+ sites                     | No measurement record          | 6 months (Aug 2019 - Feb 2020) | UNVERIFIED |
| 5+ years experience                  | `src/content/site.ts` about fact "Experience"                                                  | 0 -> 5+ years                     | Owner statement only           | Unknown                        | UNVERIFIED |
| Five years in                        | `src/content/profile.ts` `summary.en` / `summary.id`                                           | 0 -> 5 years                      | Owner statement only           | Unknown                        | UNVERIFIED |
| Five years later                     | `src/content/site.ts` about bio 1                                                              | 0 -> 5 years                      | Owner statement only           | Unknown                        | UNVERIFIED |
| 5 years                              | `index.html` meta description, OG description, Twitter description, JSON-LD description        | 0 -> 5 years                      | Owner statement only           | Unknown                        | UNVERIFIED |
| Sep 2021 - Present                   | `src/content/experience.ts` Embreo `period`; `src/content/site.ts` about fact "(2021-present)" | Sep 2021 -> present               | Owner-provided dates           | Sep 2021 - present             | UNVERIFIED |
| Jun 2021 - Present                   | `src/content/experience.ts` SMK `period`                                                       | Jun 2021 -> present               | Owner-provided dates           | Jun 2021 - present             | UNVERIFIED |
| Aug 2019 - Feb 2020                  | `src/content/experience.ts` Freelance `period`                                                 | Aug 2019 -> Feb 2020              | Owner-provided dates           | Aug 2019 - Feb 2020            | UNVERIFIED |
| 24-hour reply time                   | `src/content/site.ts` `replyTime.hours`                                                        | Unknown -> 24 hours               | Owner commitment, not measured | As of 2026-11                  | UNVERIFIED |
| Available for full-time & consulting | `src/content/site.ts` `availability`                                                           | Unknown -> available              | Owner statement only           | As of 2026-11                  | UNVERIFIED |
| B.Sc. Computer Science in progress   | `src/content/site.ts` `education.degree`                                                       | Enrolled -> in progress           | Owner statement only           | Unknown                        | UNVERIFIED |
| GMT+7                                | `src/content/site.ts` hero `basedValue`, `contact.footerTagline`                               | UTC -> UTC+7                      | Owner-provided timezone        | Unknown                        | UNVERIFIED |

## Notes

- "Available now" and "reply within 24 hours" were removed from prose. Availability and reply time now live in `availability` and `replyTime` in `src/content/site.ts`.
- The 24-hour reply time is a commitment, not a measured fact.
- `10K+ installs` (Cara.sg) and `10K+ real users` (Embreo) are separate statements and may describe overlapping populations.
