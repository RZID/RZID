import type { Experience } from '@/types/content'

export const experience: readonly Experience[] = [
  {
    company: 'Embreo PTE Ltd',
    role: { en: 'Software Engineer', id: 'Software Engineer' },
    employmentType: { en: 'Full-Time', id: 'Penuh waktu' },
    period: { en: 'Sep 2021 - Present', id: 'Sep 2021 - Sekarang' },
    highlights: [
      {
        en: 'Rebuilt a live monolith into NestJS microservices. Zero downtime, business never stopped',
        id: 'Bangun ulang monolith yang sedang berjalan jadi microservices NestJS. Tanpa downtime, bisnis tetap jalan',
      },
      {
        en: 'Slashed slow API responses ~50% with Redis caching and RabbitMQ offload',
        id: 'Pangkas respons API yang lambat ~50% dengan caching Redis dan offload RabbitMQ',
      },
      {
        en: 'Keep apps serving 10K+ real users without breaking a sweat',
        id: 'Jaga aplikasi tetap melayani 10K+ pengguna nyata tanpa kewalahan',
      },
      {
        en: 'Move real money: HitPay, Stripe, and Airwallex payments live in production',
        id: 'Proses uang nyata: pembayaran HitPay, Stripe, dan Airwallex sudah live di produksi',
      },
      {
        en: 'Kill payment failures ~30% with retries, webhooks, and alerts that actually fire',
        id: 'Tekan kegagalan pembayaran ~30% dengan retry, webhook, dan alert yang benar-benar jalan',
      },
      {
        en: 'Put Expo apps in users hands on iOS and Android, including BLE heart-rate for a gym client',
        id: 'Antar aplikasi Expo ke tangan pengguna di iOS dan Android, termasuk heart-rate BLE untuk klien gym',
      },
      {
        en: 'Turned hour-long manual deploys into a ~10 min AWS pipeline anyone can run',
        id: 'Ubah deploy manual yang makan waktu sejam jadi pipeline AWS ~10 menit yang bisa dijalankan siapa saja',
      },
      {
        en: 'Leave docs and runbooks so the team ships fast long after I am gone',
        id: 'Tinggalkan docs dan runbook supaya tim tetap bisa rilis cepat jauh setelah saya pergi',
      },
    ],
  },
  {
    company: 'SMK Negeri 12 Jakarta',
    role: {
      en: 'Technical Mentor & Systems Consultant',
      id: 'Mentor Teknis & Konsultan Sistem',
    },
    employmentType: { en: 'Consulting', id: 'Konsultasi' },
    period: { en: 'Jun 2021 - Present', id: 'Jun 2021 - Sekarang' },
    highlights: [
      {
        en: 'Prep students for national dev certifications, hands on',
        id: 'Siapkan siswa untuk sertifikasi dev nasional, langsung praktik',
      },
      {
        en: 'Push pass rates up ~80% with drills on real projects, not slides',
        id: 'Dorong tingkat kelulusan naik ~80% dengan latihan di proyek nyata, bukan slide',
      },
      {
        en: 'Keep school servers up and fix fast when they break',
        id: 'Jaga server sekolah tetap hidup dan cepat perbaiki kalau rusak',
      },
      {
        en: 'Cut server downtime from days to hours with monitoring and checklists',
        id: 'Pangkas downtime server dari hitungan hari jadi hitungan jam dengan monitoring dan checklist',
      },
      {
        en: 'Teach production-standard care, not textbook theory',
        id: 'Ajarkan cara rawat standar produksi, bukan teori buku',
      },
    ],
  },
  {
    company: 'Freelance',
    role: { en: 'Software Engineer', id: 'Software Engineer' },
    employmentType: { en: 'Freelance', id: 'Freelance' },
    period: { en: 'Aug 2019 - Feb 2020', id: 'Agu 2019 - Feb 2020' },
    highlights: [
      {
        en: 'Built client websites end to end with PHP/CodeIgniter: database to frontend',
        id: 'Bangun website klien end to end pakai PHP/CodeIgniter: dari database sampai frontend',
      },
      {
        en: 'Turned vague ideas into sites that launched',
        id: 'Ubah ide samar jadi situs yang benar-benar rilis',
      },
      {
        en: 'Delivered 5+ sites in 6 months, every one paid and live',
        id: 'Selesaikan 5+ situs dalam 6 bulan, semuanya dibayar dan live',
      },
      {
        en: 'Got repeat work from referrals, because the sites kept running',
        id: 'Dapat kerjaan ulang dari referral, karena situsnya terus jalan',
      },
    ],
  },
]
