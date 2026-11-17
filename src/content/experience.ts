import type { Experience, LocalizedText } from '@/types/content'

// The old site had no Indonesian copy for roles, so `id` mirrors `en`.
const enOnly = (en: string): LocalizedText => ({ en, id: en })

export const experience: readonly Experience[] = [
  {
    company: 'Embreo PTE Ltd',
    role: enOnly('Software engineer'),
    employmentType: enOnly('Full-Time'),
    period: enOnly('Sep 2021 - Present'),
    highlights: [
      enOnly(
        'Rebuilt a live monolith into NestJS microservices. Zero downtime, business never stopped',
      ),
      enOnly('Slashed slow API responses ~50% with Redis caching and RabbitMQ offload'),
      enOnly('Keep apps serving 10K+ real users without breaking a sweat'),
      enOnly('Move real money: HitPay, Stripe, and Airwallex payments live in production'),
      enOnly('Kill payment failures ~30% with retries, webhooks, and alerts that actually fire'),
      enOnly(
        'Put Expo apps in users hands on iOS and Android, including BLE heart-rate for a gym client',
      ),
      enOnly('Turned hour-long manual deploys into a ~10 min AWS pipeline anyone can run'),
      enOnly('Leave docs and runbooks so the team ships fast long after I am gone'),
    ],
  },
  {
    company: 'SMK Negeri 12 Jakarta',
    role: enOnly('Technical Mentor & Systems Consultant'),
    employmentType: enOnly('Consulting'),
    period: enOnly('Jun 2021 - Present'),
    highlights: [
      enOnly('Prep students for national dev certifications, hands on'),
      enOnly('Push pass rates up ~80% with drills on real projects, not slides'),
      enOnly('Keep school servers up and fix fast when they break'),
      enOnly('Cut server downtime from days to hours with monitoring and checklists'),
      enOnly('Teach production-standard care, not textbook theory'),
    ],
  },
  {
    company: 'Freelance',
    role: enOnly('Software Engineer'),
    employmentType: enOnly('Freelance'),
    period: enOnly('Aug 2019 - Feb 2020'),
    highlights: [
      enOnly('Built client websites end to end: database to frontend'),
      enOnly('Turned vague ideas into sites that launched'),
      enOnly('Delivered 5+ sites in 6 months, every one paid and live'),
      enOnly('Got repeat work from referrals, because the sites kept running'),
    ],
  },
]
