import type { Project } from '@/types/content'

export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    role: { en: 'Full-stack Engineer', id: 'Pengembang Full-stack' },
    outcome: {
      en: 'CARA SG by Dementia Singapore: free membership app (10K+ installs) for the dementia community. Sign up, pick a profile, member card arrives by post. Inside: Safe Return, missing-person alerts, rewards, resources, Mandarin support. Shipped through a monolith-to-microservices migration.',
      id: 'CARA SG by Dementia Singapore: aplikasi keanggotaan gratis (10K+ instalasi) untuk komunitas demensia. Daftar, pilih profil, kartu anggota tiba lewat pos. Di dalamnya: Safe Return, notifikasi orang hilang, hadiah, sumber daya, dukungan Mandarin. Dirilis lewat migrasi monolith ke microservices.',
    },
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Expo', icon: 'expo' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    name: 'Affluent.sg',
    role: { en: 'Full-stack Engineer', id: 'Pengembang Full-stack' },
    outcome: {
      en: 'Wills and estate-planning platform for Singapore families (wills, LPA, advance care directives, CPF nominations). Delivered end to end with encrypted client data and HitPay payment gateway integration.',
      id: 'Platform wasiat dan perencanaan warisan untuk keluarga Singapura (wasiat, LPA, advance care directive, nominasi CPF). Dikerjakan end to end dengan data klien terenkripsi dan integrasi payment gateway HitPay.',
    },
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    name: 'JebHealth',
    role: { en: 'Full-stack Engineer', id: 'Pengembang Full-stack' },
    outcome: {
      en: 'HealthTech marketplace (SG, MY, TH, VN) plus Health-FinTech cards with Airwallex and Visa (Helix Health Card, J World Card): backend payment flows via Stripe and Airwallex integrated and hardened for production.',
      id: 'Marketplace HealthTech (SG, MY, TH, VN) serta kartu Health-FinTech dengan Airwallex dan Visa (Helix Health Card, J World Card): alur pembayaran backend via Stripe dan Airwallex yang diintegrasikan dan diperkuat untuk produksi.',
    },
    stack: [
      { name: 'Express', icon: 'express' },
      { name: 'React', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
    ],
  },
  {
    name: 'LVE Gym',
    role: { en: 'Full-stack Engineer', id: 'Pengembang Full-stack' },
    outcome: {
      en: 'Booking app for LVE boutique gyms (circuit training Pandan Valley, combat Boat Quay): class schedules, packs, personal training, plus live heart-rate display via Bluetooth (BLE) monitor integration. iOS and Android from one Expo codebase, through store release.',
      id: 'Aplikasi booking untuk gym boutique LVE (circuit training Pandan Valley, combat Boat Quay): jadwal kelas, paket, personal training, plus tampilan detak jantung live lewat integrasi monitor Bluetooth (BLE). iOS dan Android dari satu codebase Expo, sampai rilis di store.',
    },
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'Expo', icon: 'expo' },
      { name: 'BLE' },
    ],
  },
  {
    name: 'Pinknode',
    role: { en: 'Frontend Engineer', id: 'Pengembang Frontend' },
    outcome: {
      en: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management, built and shipped to production.',
      id: 'Dashboard untuk node-as-a-service Polkadot: analitik penggunaan API dan manajemen akun, dibangun dan dirilis ke produksi.',
    },
    stack: [{ name: 'React', icon: 'react' }],
  },
]
