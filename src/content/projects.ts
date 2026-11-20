import type { Project } from '@/types/content'

export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    icon: 'heart',
    summary: {
      id: 'Aplikasi keanggotaan gratis untuk komunitas demensia di Singapura. Safe Return, notifikasi orang hilang, hadiah, dan dukungan Mandarin.',
      en: 'Free membership app for the dementia community in Singapore. Safe Return, missing-person alerts, rewards, and Mandarin support.',
    },
    stack: ['React', 'NestJS', 'Expo', 'MySQL', 'Redis'],
  },
  {
    name: 'Affluent.sg',
    icon: 'scroll',
    summary: {
      id: 'Platform wasiat dan perencanaan warisan untuk keluarga Singapura, dengan data klien terenkripsi dan pembayaran HitPay.',
      en: 'Wills and estate-planning platform for Singapore families, with encrypted client data and HitPay payments.',
    },
    stack: ['React', 'Express', 'MySQL'],
  },
  {
    name: 'JebHealth',
    icon: 'crossCoin',
    summary: {
      id: 'Marketplace HealthTech untuk SG, MY, TH, dan VN, plus kartu health-fintech dengan Stripe dan Airwallex.',
      en: 'HealthTech marketplace for SG, MY, TH, and VN, plus health-fintech cards with Stripe and Airwallex.',
    },
    stack: ['Express', 'React', 'Expo'],
  },
  {
    name: 'LVE Gym',
    icon: 'dumbbell',
    summary: {
      id: 'Aplikasi booking gym boutique: jadwal kelas, paket, personal training, dan detak jantung live lewat Bluetooth.',
      en: 'Booking app for boutique gyms: class schedules, packs, personal training, and live heart rate over Bluetooth.',
    },
    stack: ['React', 'NestJS', 'Expo', 'BLE'],
  },
  {
    name: 'Pinknode',
    icon: 'diamondNode',
    summary: {
      id: 'Dashboard node-as-a-service Polkadot: analitik penggunaan API dan manajemen akun.',
      en: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management.',
    },
    stack: ['React'],
  },
]
