import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Ramadhanu',
  role: { en: 'Software engineer', id: 'Software engineer' },
  location: { en: 'Jakarta', id: 'Jakarta' },
  summary: {
    en: 'Software engineer based in Jakarta with 5 years of experience.',
    id: 'Software engineer yang berbasis di Jakarta dengan 5 tahun pengalaman.',
  },
  links: {
    github: { label: { en: 'GitHub', id: 'GitHub' }, href: 'https://github.com/RZID' },
    email: { label: { en: 'Email', id: 'Email' }, href: 'mailto:rdhanurzid@gmail.com' },
    linkedin: {
      label: { en: 'LinkedIn', id: 'LinkedIn' },
      href: 'https://www.linkedin.com/in/rama-ramadhanu',
    },
  },
}
