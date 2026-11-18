import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Ramadhanu',
  role: { id: 'Software Engineer', en: 'Software Engineer' },
  location: { id: 'Jakarta', en: 'Jakarta' },
  summary: {
    id: 'Saya Ramadhanu. Suka bongkar cara kerja sesuatu, lalu bikin software dari situ: web, mobile, backend. Lima tahun, masih penasaran. Remote worldwide, hybrid Jabodetabek.',
    en: "I'm Ramadhanu. I pull things apart to see how they work, then build software from what I learn: web, mobile, backend. Five years in, still curious. Remote worldwide, hybrid in Jabodetabek.",
  },
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
