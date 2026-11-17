import type { Project } from '@/types/content'

export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    summary: {
      en: 'Full-stack engineer on a free membership app for the dementia community in Singapore, with 10K+ installs.',
      id: 'Full-stack engineer pada aplikasi keanggotaan gratis untuk komunitas demensia di Singapura, dengan 10 ribu+ instalasi.',
    },
    stack: ['React', 'NestJS', 'Expo', 'MySQL', 'Redis'],
  },
  {
    name: 'Affluent.sg',
    summary: {
      en: 'Wills and estate-planning platform with encrypted client data and HitPay payments.',
      id: 'Platform wasiat dan perencanaan warisan dengan data klien terenkripsi dan pembayaran HitPay.',
    },
    stack: ['React', 'Express', 'MySQL'],
  },
  {
    name: 'JebHealth',
    summary: {
      en: 'HealthTech marketplace plus health-fintech cards with Stripe and Airwallex.',
      id: 'Marketplace HealthTech serta kartu health-fintech dengan Stripe dan Airwallex.',
    },
    stack: ['Express', 'React', 'Expo'],
  },
  {
    name: 'LVE Gym',
    summary: {
      en: 'Gym booking app with live heart-rate display over Bluetooth.',
      id: 'Aplikasi pemesanan gym dengan tampilan detak jantung langsung melalui Bluetooth.',
    },
    stack: ['React', 'NestJS', 'Expo', 'BLE'],
  },
]
