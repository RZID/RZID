import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Ramadhanu',
  role: { id: 'Software Engineer', en: 'Software Engineer' },
  location: { id: 'Jakarta', en: 'Jakarta' },
  links: {
    github: { label: { id: 'GitHub', en: 'GitHub' }, href: 'https://github.com/RZID' },
    email: {
      label: { id: 'Email', en: 'Email' },
      href: 'mailto:rdhanurzid@gmail.com',
    },
    linkedin: {
      label: { id: 'LinkedIn', en: 'LinkedIn' },
      href: 'https://www.linkedin.com/in/rama-ramadhanu',
    },
  },
}
