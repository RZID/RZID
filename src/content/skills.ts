import type { SkillGroup } from '@/types/content'

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Backend',
    items: ['NestJS / Node.js', 'REST APIs', 'Microservices', 'RabbitMQ', 'Redis'],
  },
  {
    title: 'Frontend dan mobile',
    items: ['React', 'Next.js', 'React Native (Expo)'],
  },
  {
    title: 'Data dan infra',
    items: ['AWS', 'Docker', 'Linux', 'PostgreSQL / MySQL', 'CI/CD'],
  },
  {
    title: 'Sedang dipelajari',
    items: ['Kubernetes', 'Kafka', 'Cloudflare edge'],
    learning: true,
  },
  {
    title: 'Di luar terminal',
    items: ['Gaming', 'Mentoring', 'Research', 'Troubleshooting'],
  },
]
