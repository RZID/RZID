import type { SkillGroup } from '@/types/content'

export const skillGroups: readonly SkillGroup[] = [
  {
    title: { id: 'Backend', en: 'Backend' },
    items: [
      { id: 'NestJS / Node.js', en: 'NestJS / Node.js' },
      { id: 'REST APIs', en: 'REST APIs' },
      { id: 'Microservices', en: 'Microservices' },
      { id: 'RabbitMQ', en: 'RabbitMQ' },
      { id: 'Redis', en: 'Redis' },
    ],
  },
  {
    title: { id: 'Frontend dan mobile', en: 'Frontend and mobile' },
    items: [
      { id: 'React', en: 'React' },
      { id: 'Next.js', en: 'Next.js' },
      { id: 'React Native (Expo)', en: 'React Native (Expo)' },
    ],
  },
  {
    title: { id: 'Data dan infra', en: 'Data and infra' },
    items: [
      { id: 'AWS', en: 'AWS' },
      { id: 'Docker', en: 'Docker' },
      { id: 'Linux', en: 'Linux' },
      { id: 'PostgreSQL / MySQL', en: 'PostgreSQL / MySQL' },
      { id: 'CI/CD', en: 'CI/CD' },
    ],
  },
  {
    title: { id: 'Sedang dipelajari', en: 'Currently learning' },
    items: [
      { id: 'Kubernetes', en: 'Kubernetes' },
      { id: 'Kafka', en: 'Kafka' },
      { id: 'Cloudflare edge', en: 'Cloudflare edge' },
    ],
    learning: true,
  },
  {
    title: { id: 'Di luar terminal', en: 'Beyond the terminal' },
    items: [
      { id: 'Gaming', en: 'Gaming' },
      { id: 'Mentoring', en: 'Mentoring' },
      { id: 'Research', en: 'Research' },
      { id: 'Troubleshooting', en: 'Troubleshooting' },
    ],
  },
]
