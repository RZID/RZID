import type { TechIconId } from './sprites'

const aliases: Record<string, TechIconId> = {
  react: 'react',
  nestjs: 'nestjs',
  nodejs: 'nodejs',
  expo: 'expo',
  mysql: 'mysql',
  redis: 'redis',
  express: 'express',
  ble: 'ble',
  'rest apis': 'rest',
  microservices: 'microservices',
  rabbitmq: 'rabbitmq',
  'next.js': 'next',
  nextjs: 'next',
  'react native': 'reactnative',
  aws: 'aws',
  docker: 'docker',
  linux: 'linux',
  postgresql: 'postgresql',
  'ci/cd': 'cicd',
  kubernetes: 'kubernetes',
  kafka: 'kafka',
  'cloudflare edge': 'cloudflare',
  gaming: 'gaming',
  mentoring: 'mentoring',
  research: 'research',
  troubleshooting: 'troubleshooting',
}

export const techIconId = (label: string): TechIconId | undefined => {
  const key = label.toLowerCase().split(/[/(]/)[0]?.trim() ?? ''
  return aliases[key]
}
