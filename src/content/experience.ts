import type { Experience } from '@/types/content'

export const experience: readonly Experience[] = [
  {
    org: 'Embreo PTE Ltd',
    role: { id: 'Software Engineer, full-time', en: 'Software Engineer, full-time' },
    period: { id: 'Sep 2021 - sekarang', en: 'Sep 2021 - Present' },
    summary: {
      id: 'Monolith yang sedang berjalan dipindah ke microservices NestJS. Pembayaran HitPay, Stripe, dan Airwallex, plus pipeline deploy AWS.',
      en: 'A running monolith was moved to NestJS microservices. HitPay, Stripe, and Airwallex payments, plus an AWS deploy pipeline.',
    },
    kind: 'work',
  },
  {
    org: 'SMK Negeri 12 Jakarta',
    role: {
      id: 'Technical Mentor & Systems Consultant',
      en: 'Technical Mentor & Systems Consultant',
    },
    period: { id: 'Jun 2021 - sekarang', en: 'Jun 2021 - Present' },
    summary: {
      id: 'Bimbing siswa untuk sertifikasi dev nasional dan jaga server sekolah tetap hidup.',
      en: 'Mentoring students for national dev certifications and keeping the school servers alive.',
    },
    kind: 'work',
  },
  {
    org: 'Freelance',
    role: { id: 'Software Engineer', en: 'Software Engineer' },
    period: { id: 'Agu 2019 - Feb 2020', en: 'Aug 2019 - Feb 2020' },
    summary: {
      id: 'Website klien dari database sampai frontend dengan PHP dan CodeIgniter.',
      en: 'Client websites end to end, from database to frontend, with PHP and CodeIgniter.',
    },
    kind: 'work',
  },
  {
    org: 'B.Sc. Computer Science',
    role: { id: 'Mahasiswa, kelas malam', en: 'Student, evening classes' },
    period: { id: 'sedang berjalan', en: 'in progress' },
    summary: {
      id: 'Kuliah malam sambil tetap bekerja.',
      en: 'Evening program while continuing to work.',
    },
    kind: 'education',
  },
]
