import type { Project } from '@/types/content'

export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    icon: 'heart',
    role: { id: 'Pengembang Full-stack', en: 'Full-stack Engineer' },
    summary: {
      id: 'Aplikasi keanggotaan untuk komunitas demensia di Singapura. Safe Return, notifikasi orang hilang, hadiah, dan dukungan Mandarin.',
      en: 'Membership app for the dementia community in Singapore. Safe Return, missing-person alerts, rewards, and Mandarin support.',
    },
    highlights: [
      { id: 'Safe Return', en: 'Safe Return' },
      { id: 'Notifikasi orang hilang', en: 'Missing-person alerts' },
      { id: 'Hadiah & dukungan Mandarin', en: 'Rewards & Mandarin support' },
    ],
    stack: ['React', 'NestJS', 'Expo', 'MySQL', 'Redis'],
  },
  {
    name: 'Affluent.sg',
    icon: 'scroll',
    role: { id: 'Pengembang Full-stack', en: 'Full-stack Engineer' },
    summary: {
      id: 'Platform wasiat dan perencanaan warisan untuk keluarga Singapura, dengan data klien terenkripsi dan pembayaran HitPay.',
      en: 'Wills and estate-planning platform for Singapore families, with encrypted client data and HitPay payments.',
    },
    highlights: [
      { id: 'Wasiat & perencanaan warisan', en: 'Wills & estate planning' },
      { id: 'Data klien terenkripsi', en: 'Encrypted client data' },
      { id: 'Pembayaran HitPay', en: 'HitPay payments' },
    ],
    stack: ['React', 'Express', 'MySQL'],
  },
  {
    name: 'JebHealth',
    icon: 'crossCoin',
    role: { id: 'Pengembang Full-stack', en: 'Full-stack Engineer' },
    summary: {
      id: 'Marketplace HealthTech untuk SG, MY, TH, dan VN, plus kartu health-fintech dengan Stripe dan Airwallex.',
      en: 'HealthTech marketplace for SG, MY, TH, and VN, plus health-fintech cards with Stripe and Airwallex.',
    },
    highlights: [
      { id: 'Pasar SG · MY · TH · VN', en: 'Marketplace across SG · MY · TH · VN' },
      { id: 'Kartu health-fintech', en: 'Health-fintech cards' },
      { id: 'Stripe · Airwallex', en: 'Stripe · Airwallex' },
    ],
    stack: ['Express', 'React', 'Expo'],
  },
  {
    name: 'LVE Gym',
    icon: 'dumbbell',
    role: { id: 'Pengembang Full-stack', en: 'Full-stack Engineer' },
    summary: {
      id: 'Aplikasi booking gym boutique: jadwal kelas, paket, personal training, dan detak jantung live lewat Bluetooth.',
      en: 'Booking app for boutique gyms: class schedules, packs, personal training, and live heart rate over Bluetooth.',
    },
    highlights: [
      { id: 'Jadwal kelas & paket', en: 'Class schedules & packs' },
      { id: 'Personal training', en: 'Personal training' },
      { id: 'Detak jantung live via BLE', en: 'Live heart rate over BLE' },
    ],
    stack: ['React', 'NestJS', 'Expo', 'BLE'],
  },
  {
    name: 'Pinknode',
    icon: 'diamondNode',
    role: { id: 'Pengembang Frontend', en: 'Frontend Engineer' },
    summary: {
      id: 'Dashboard node-as-a-service Polkadot: analitik penggunaan API dan manajemen akun.',
      en: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management.',
    },
    highlights: [
      { id: 'Analitik penggunaan API', en: 'API usage analytics' },
      { id: 'Manajemen akun', en: 'Account management' },
    ],
    stack: ['React'],
  },
]
