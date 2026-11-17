import avatar192 from '@/assets/avatar-192.jpg'
import avatar96 from '@/assets/avatar-96.jpg'
import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Ramadhanu',
  role: { en: 'Software Engineer', id: 'Software Engineer' },
  location: { en: 'Jakarta', id: 'Jakarta' },
  summary: {
    en: "I'm Ramadhanu. I pull things apart to see how they work, then build software from what I learn: web, mobile, backend. Five years in, still curious. Remote worldwide, hybrid in Jabodetabek.",
    id: 'Saya Ramadhanu. Suka bongkar cara kerja sesuatu, lalu bikin software dari situ: web, mobile, backend. Lima tahun, masih penasaran. Remote global, hybrid Jabodetabek.',
  },
  avatar: {
    src: avatar96,
    srcSet: `${avatar96} 1x, ${avatar192} 2x`,
  },
  links: {
    github: {
      label: { en: 'GitHub', id: 'GitHub' },
      value: 'github.com/RZID',
      href: 'https://github.com/RZID',
    },
    email: {
      label: { en: 'Email', id: 'Email' },
      value: 'rdhanurzid@gmail.com',
      href: 'mailto:rdhanurzid@gmail.com',
    },
    linkedin: {
      label: { en: 'LinkedIn', id: 'LinkedIn' },
      value: 'linkedin.com/in/rama-ramadhanu',
      href: 'https://www.linkedin.com/in/rama-ramadhanu',
    },
  },
}
