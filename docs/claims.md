# Claims register

Every numeric or time-sensitive statement rendered on the site. Status is **UNVERIFIED** until the owner supplies the evidence in the fourth column. Do not promote a claim without it.

| Claim                                                | Where used                                            | Kind                | Evidence needed                                    | Source                        | Status     |
| ---------------------------------------------------- | ----------------------------------------------------- | ------------------- | -------------------------------------------------- | ----------------------------- | ---------- |
| Lima tahun (five years)                              | `src/content/site.ts` hero dialogue line 2            | Owner statement     | Written confirmation with a start date             | `README.md`, previous site    | UNVERIFIED |
| Software engineer di Jakarta                         | `src/content/site.ts` hero `player` + dialogue line 1 | Owner statement     | Written confirmation of role and location          | `README.md`, previous site    | UNVERIFIED |
| Sep 2021 – sekarang                                  | `src/content/experience.ts` Embreo `period`           | Owner-provided date | Contract, HR record, or dated written confirmation | Previous site `experience.ts` | UNVERIFIED |
| Jun 2021 – sekarang                                  | `src/content/experience.ts` SMK `period`              | Owner-provided date | Contract, HR record, or dated written confirmation | Previous site `experience.ts` | UNVERIFIED |
| Agu 2019 – Feb 2020                                  | `src/content/experience.ts` Freelance `period`        | Owner-provided date | Dated written confirmation                         | Previous site `experience.ts` | UNVERIFIED |
| B.Sc. Computer Science, kelas malam, sedang berjalan | `src/content/experience.ts` education                 | Owner statement     | Enrolment record or student card                   | Previous site `site.ts`       | UNVERIFIED |
| Terbuka untuk full-time dan konsultasi               | `src/content/site.ts` `sections.contact.availability` | Owner statement     | Dated confirmation that the status is still true   | Previous site `site.ts`       | UNVERIFIED |
| LV.5                                                 | `src/content/site.ts` hero `level`                    | Editorial metaphor  | None; game framing for five years                  | Supplied prototype            | EDITORIAL  |
| Cleared                                              | `src/content/site.ts` `ui.cleared`, quest cards       | Editorial label     | None; labels work that shipped                     | Supplied prototype            | EDITORIAL  |

## Not rendered in this version

The previous site carried these numbers. They are **not** in the current copy. Do not reintroduce them without evidence: 10K+ installs, zero downtime, ~50% faster API responses, 10K+ real users, ~30% fewer payment failures, hour-long deploy to ~10 minutes, ~80% higher pass rate, server downtime days to hours, 5+ sites in six months, 24-hour reply time, GMT+7.

## Notes

- The contact email is restored from the previous public build. Confirm visibility with the owner if privacy matters.
- `LV.5` and `Cleared` are game vocabulary from the supplied prototype, not factual measurements.
- Availability has no `asOf` date in the rendered copy. If it becomes stale, update `src/content/site.ts` and this register together.
- To verify a row, attach the evidence to the source named above, set the date it was checked, then change `UNVERIFIED` to `VERIFIED`.
- Every claim renders in both `id` and `en`. The English string is a translation of the same fact, never a new claim.
