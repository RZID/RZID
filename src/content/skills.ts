import awsLogo from '@/assets/stack/amazonaws.svg'
import dockerLogo from '@/assets/stack/docker.svg'
import expoLogo from '@/assets/stack/expo.svg'
import expressLogo from '@/assets/stack/express.svg'
import mysqlLogo from '@/assets/stack/mysql.svg'
import nestjsLogo from '@/assets/stack/nestjs.svg'
import nextjsLogo from '@/assets/stack/nextdotjs.svg'
import postgresqlLogo from '@/assets/stack/postgresql.svg'
import rabbitmqLogo from '@/assets/stack/rabbitmq.svg'
import reactLogo from '@/assets/stack/react.svg'
import redisLogo from '@/assets/stack/redis.svg'
import stripeLogo from '@/assets/stack/stripe.svg'
import typescriptLogo from '@/assets/stack/typescript.svg'
import type { SkillGroup, StackLogo } from '@/types/content'

export const skillGroups: readonly SkillGroup[] = [
  {
    title: { en: 'Backend', id: 'Backend' },
    items: [
      { en: 'NestJS / Node.js', id: 'NestJS / Node.js' },
      { en: 'REST APIs', id: 'REST APIs' },
      { en: 'Microservices', id: 'Microservices' },
      { en: 'RabbitMQ', id: 'RabbitMQ' },
      { en: 'Redis', id: 'Redis' },
    ],
  },
  {
    title: { en: 'Frontend & Mobile', id: 'Frontend & Mobile' },
    items: [
      { en: 'React', id: 'React' },
      { en: 'Next.js', id: 'Next.js' },
      { en: 'React Native (Expo)', id: 'React Native (Expo)' },
    ],
  },
  {
    title: { en: 'Infra & Data', id: 'Infra & Data' },
    items: [
      { en: 'AWS', id: 'AWS' },
      { en: 'Docker', id: 'Docker' },
      { en: 'Linux', id: 'Linux' },
      { en: 'PostgreSQL / MySQL', id: 'PostgreSQL / MySQL' },
      { en: 'CI/CD', id: 'CI/CD' },
    ],
  },
]

export const stackLogos: readonly StackLogo[] = [
  { name: 'TypeScript', icon: 'typescript', src: typescriptLogo },
  { name: 'NestJS', icon: 'nestjs', src: nestjsLogo },
  { name: 'Express', icon: 'express', src: expressLogo, mono: true },
  { name: 'React', icon: 'react', src: reactLogo },
  { name: 'Next.js', icon: 'nextjs', src: nextjsLogo, mono: true },
  { name: 'Expo', icon: 'expo', src: expoLogo, mono: true },
  { name: 'AWS', icon: 'aws', src: awsLogo, mono: true },
  { name: 'Docker', icon: 'docker', src: dockerLogo },
  { name: 'Redis', icon: 'redis', src: redisLogo },
  { name: 'RabbitMQ', icon: 'rabbitmq', src: rabbitmqLogo },
  { name: 'MySQL', icon: 'mysql', src: mysqlLogo },
  { name: 'PostgreSQL', icon: 'postgresql', src: postgresqlLogo },
  { name: 'Stripe', icon: 'stripe', src: stripeLogo },
]

export const stackText: readonly string[] = ['HitPay', 'Airwallex']
