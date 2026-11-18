# Claims register

Every numeric or time-sensitive statement rendered on the site. Status is **UNVERIFIED** until the owner supplies a source, a baseline, and a measurement window. Do not promote a claim to verified without evidence.

| Claim                                                | Where used                                            | Kind                                           | Status     |
| ---------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- | ---------- |
| Lima tahun (five years)                              | `src/content/site.ts` hero dialogue line 2            | Owner statement                                | UNVERIFIED |
| Software engineer di Jakarta                         | `src/content/site.ts` hero dialogue line 1            | Owner statement                                | UNVERIFIED |
| Sep 2021 – sekarang                                  | `src/content/experience.ts` Embreo `period`           | Owner-provided date                            | UNVERIFIED |
| Jun 2021 – sekarang                                  | `src/content/experience.ts` SMK `period`              | Owner-provided date                            | UNVERIFIED |
| Agu 2019 – Feb 2020                                  | `src/content/experience.ts` Freelance `period`        | Owner-provided date                            | UNVERIFIED |
| B.Sc. Computer Science, kelas malam, sedang berjalan | `src/content/experience.ts` education                 | Owner statement                                | UNVERIFIED |
| Terbuka untuk full-time dan konsultasi               | `src/content/site.ts` `sections.contact.availability` | Owner statement                                | UNVERIFIED |
| LV.5                                                 | `src/content/site.ts` hero `level`                    | Game metaphor for five years, not a metric     | EDITORIAL  |
| Cleared                                              | `src/content/site.ts` `ui.cleared`, quest cards       | Editorial label for shipped work, not a metric | EDITORIAL  |

## Not rendered in this version

The previous site carried these numbers. They are **not** in the current copy. Do not reintroduce them without evidence: 10K+ installs, zero downtime, ~50% faster API responses, 10K+ real users, ~30% fewer payment failures, hour-long deploy to ~10 minutes, ~80% higher pass rate, server downtime days to hours, 5+ sites in six months, 24-hour reply time, GMT+7.

## Notes

- The contact email is restored from the previous public build. Confirm visibility with the owner if privacy matters.
- `LV.5` and `Cleared` are game vocabulary from the supplied prototype, not factual measurements.
- Availability has no `asOf` date in the rendered copy. If it becomes stale, update `src/content/site.ts` and this register together.
