import type { Experience } from '@/types/content'

export const experience: readonly Experience[] = [
  {
    org: 'Embreo PTE Ltd',
    role: 'Software Engineer, full-time',
    period: 'Sep 2021 – sekarang',
    summary:
      'Monolith yang sedang berjalan dipindah ke microservices NestJS. Pembayaran HitPay, Stripe, dan Airwallex, plus pipeline deploy AWS.',
    kind: 'work',
  },
  {
    org: 'SMK Negeri 12 Jakarta',
    role: 'Technical Mentor & Systems Consultant',
    period: 'Jun 2021 – sekarang',
    summary: 'Bimbing siswa untuk sertifikasi dev nasional dan jaga server sekolah tetap hidup.',
    kind: 'work',
  },
  {
    org: 'Freelance',
    role: 'Software Engineer',
    period: 'Agu 2019 – Feb 2020',
    summary: 'Website klien dari database sampai frontend dengan PHP dan CodeIgniter.',
    kind: 'work',
  },
  {
    org: 'B.Sc. Computer Science',
    role: 'Mahasiswa, kelas malam',
    period: 'sedang berjalan',
    summary: 'Kuliah malam sambil tetap bekerja.',
    kind: 'education',
  },
]
