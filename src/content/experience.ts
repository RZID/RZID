import type { Experience } from '@/types/content'

export const experience: readonly Experience[] = [
  {
    company: 'Embreo',
    role: { en: 'Software engineer', id: 'Software engineer' },
    employmentType: { en: 'Full-time', id: 'Penuh waktu' },
    period: { en: 'Sep 2021 – Present', id: 'Sep 2021 – Sekarang' },
    highlights: [
      {
        en: 'Moved a live monolith to NestJS microservices with zero downtime.',
        id: 'Memindahkan monolith yang sedang berjalan ke microservices NestJS tanpa downtime.',
      },
    ],
  },
]
