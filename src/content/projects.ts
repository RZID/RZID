import type { Project } from '@/types/content'

export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    summary:
      'Aplikasi keanggotaan gratis untuk komunitas demensia di Singapura. Safe Return, notifikasi orang hilang, hadiah, dan dukungan Mandarin.',
    stack: ['React', 'NestJS', 'Expo', 'MySQL', 'Redis'],
  },
  {
    name: 'Affluent.sg',
    summary:
      'Platform wasiat dan perencanaan warisan untuk keluarga Singapura, dengan data klien terenkripsi dan pembayaran HitPay.',
    stack: ['React', 'Express', 'MySQL'],
  },
  {
    name: 'JebHealth',
    summary:
      'Marketplace HealthTech untuk SG, MY, TH, dan VN, plus kartu health-fintech dengan Stripe dan Airwallex.',
    stack: ['Express', 'React', 'Expo'],
  },
  {
    name: 'LVE Gym',
    summary:
      'Aplikasi booking gym boutique: jadwal kelas, paket, personal training, dan detak jantung live lewat Bluetooth.',
    stack: ['React', 'NestJS', 'Expo', 'BLE'],
  },
  {
    name: 'Pinknode',
    summary: 'Dashboard node-as-a-service Polkadot: analitik penggunaan API dan manajemen akun.',
    stack: ['React'],
  },
]
