import type { Project } from '@/types/content'

// The old site had no Indonesian copy for projects, so `id` mirrors `en`.
export const projects: readonly Project[] = [
  {
    name: 'Cara.sg',
    role: { en: 'Full-stack Engineer', id: 'Full-stack Engineer' },
    outcome: {
      en: 'CARA SG by Dementia Singapore: free membership app (10K+ installs) for the dementia community. Sign up, pick a profile, member card arrives by post. Inside: Safe Return, missing-person alerts, rewards, resources, Mandarin support. Shipped through a monolith-to-microservices migration.',
      id: 'CARA SG by Dementia Singapore: free membership app (10K+ installs) for the dementia community. Sign up, pick a profile, member card arrives by post. Inside: Safe Return, missing-person alerts, rewards, resources, Mandarin support. Shipped through a monolith-to-microservices migration.',
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
    role: { en: 'Full-stack Engineer', id: 'Full-stack Engineer' },
    outcome: {
      en: 'Wills and estate-planning platform for Singapore families (wills, LPA, advance care directives, CPF nominations). Delivered end to end with encrypted client data and HitPay payment gateway integration.',
      id: 'Wills and estate-planning platform for Singapore families (wills, LPA, advance care directives, CPF nominations). Delivered end to end with encrypted client data and HitPay payment gateway integration.',
    },
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'Express', icon: 'express' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    name: 'JebHealth',
    role: { en: 'Full-stack Engineer', id: 'Full-stack Engineer' },
    outcome: {
      en: 'HealthTech marketplace (SG, MY, TH, VN) plus Health-FinTech cards with Airwallex and Visa (Helix Health Card, J World Card): backend payment flows via Stripe and Airwallex integrated and hardened for production.',
      id: 'HealthTech marketplace (SG, MY, TH, VN) plus Health-FinTech cards with Airwallex and Visa (Helix Health Card, J World Card): backend payment flows via Stripe and Airwallex integrated and hardened for production.',
    },
    stack: [
      { name: 'Express', icon: 'express' },
      { name: 'React', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
    ],
  },
  {
    name: 'LVE Gym',
    role: { en: 'Full-stack Engineer', id: 'Full-stack Engineer' },
    outcome: {
      en: 'Booking app for LVE boutique gyms (circuit training Pandan Valley, combat Boat Quay): class schedules, packs, personal training, plus live heart-rate display via Bluetooth (BLE) monitor integration. iOS and Android from one Expo codebase, through store release.',
      id: 'Booking app for LVE boutique gyms (circuit training Pandan Valley, combat Boat Quay): class schedules, packs, personal training, plus live heart-rate display via Bluetooth (BLE) monitor integration. iOS and Android from one Expo codebase, through store release.',
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
    role: { en: 'Frontend Engineer', id: 'Frontend Engineer' },
    outcome: {
      en: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management, built and shipped to production.',
      id: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management, built and shipped to production.',
    },
    stack: [{ name: 'React', icon: 'react' }],
  },
]
