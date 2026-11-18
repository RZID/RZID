import { profile } from '@/content/profile'
import type { Hero, NavItem, SectionCopy, UiText } from '@/types/content'

export const nav: readonly NavItem[] = [
  { id: 'home', label: { id: 'Home', en: 'Home' } },
  { id: 'quests', label: { id: 'Quests', en: 'Quests' } },
  { id: 'items', label: { id: 'Items', en: 'Items' } },
  { id: 'guild', label: { id: 'Guild', en: 'Guild' } },
  { id: 'contact', label: { id: 'Contact', en: 'Contact' } },
]

export const hero: Hero = {
  player: { id: 'Player 1, Jakarta', en: 'Player 1, Jakarta' },
  level: 'LV.5',
  name: profile.name,
  dialogue: [
    {
      id: 'Halo! Saya Ramadhanu, software engineer di Jakarta.',
      en: 'Hi! I’m Ramadhanu, a software engineer in Jakarta.',
    },
    {
      id: 'Lima tahun bikin web, mobile, dan backend.',
      en: 'Five years building web, mobile, and backend systems.',
    },
    {
      id: 'Suka bongkar cara kerja sesuatu, lalu bangun ulang.',
      en: 'I like taking things apart to see how they work, then building them back.',
    },
  ],
  primaryCta: { label: { id: 'New game', en: 'New game' }, href: '#quests' },
  secondaryCta: profile.links.github,
}

export const sections: SectionCopy = {
  quests: {
    title: { id: 'Quests', en: 'Quests' },
    lead: {
      id: 'Sebagian besar kerjaan saya ada di balik pintu tertutup. Ini yang bisa saya ceritakan.',
      en: 'Most of my work lives behind closed doors, so here is what I can share.',
    },
  },
  items: { title: { id: 'Items', en: 'Items' } },
  guild: { title: { id: 'Guild', en: 'Guild' } },
  contact: {
    title: { id: 'Continue?', en: 'Continue?' },
    summary: {
      id: 'Terbuka untuk ngobrol soal kerjaan, kolaborasi, atau sekadar tukar cerita soal bongkar-bongkar sistem.',
      en: 'Open to talking about work, collaboration, or just swapping stories about taking systems apart.',
    },
    availability: {
      id: 'Terbuka untuk full-time dan konsultasi',
      en: 'Available for full-time roles and consulting',
    },
  },
}

export const ui: UiText = {
  primaryNav: { id: 'Menu utama', en: 'Primary' },
  skipToContent: { id: 'Lewati ke konten', en: 'Skip to content' },
  themeToggle: {
    id: 'Ganti tema terang atau gelap',
    en: 'Toggle light or dark theme',
  },
  language: { id: 'Bahasa', en: 'Language' },
  englishShort: { id: 'EN', en: 'EN' },
  indonesianShort: { id: 'ID', en: 'ID' },
  dialogueSkip: { id: 'Lewati dialog', en: 'Skip dialogue' },
  cleared: { id: 'Cleared', en: 'Cleared' },
  copyrightYear: '2026',
  footerHint: {
    id: 'Tekan 1 sampai 5 untuk pindah menu.',
    en: 'Press 1 to 5 to jump between sections.',
  },
  bootDialogLabel: { id: 'Layar mulai', en: 'Start screen' },
  bootTitle: { id: 'Ramadhanu\nQuest', en: 'Ramadhanu\nQuest' },
  pressStart: { id: 'Press start', en: 'Press start' },
  bootEnterHint: { id: 'atau tekan Enter', en: 'or press Enter' },
  avatarLabel: {
    id: 'Avatar pixel Ramadhanu',
    en: 'Pixel avatar of Ramadhanu',
  },
}
