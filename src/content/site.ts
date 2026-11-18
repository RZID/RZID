import { profile } from '@/content/profile'
import type { Hero, NavItem, SectionCopy, UiText } from '@/types/content'

export const nav: readonly NavItem[] = [
  { id: 'home', label: { id: 'Beranda', en: 'Home' } },
  { id: 'quests', label: { id: 'Karya', en: 'Work' } },
  { id: 'items', label: { id: 'Keahlian', en: 'Skills' } },
  { id: 'guild', label: { id: 'Pengalaman', en: 'Experience' } },
  { id: 'contact', label: { id: 'Kontak', en: 'Contact' } },
]

export const hero: Hero = {
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
  primaryCta: {
    label: { id: 'Lihat karya pilihan', en: 'See selected work' },
    href: '#quests',
  },
  secondaryCta: profile.links.github,
}

export const sections: SectionCopy = {
  quests: {
    title: { id: 'Karya', en: 'Work' },
    lead: {
      id: 'Sebagian besar kerjaan saya ada di balik pintu tertutup. Ini yang bisa saya ceritakan.',
      en: 'Most of my work lives behind closed doors, so here is what I can share.',
    },
  },
  items: { title: { id: 'Keahlian', en: 'Skills' } },
  guild: { title: { id: 'Pengalaman', en: 'Experience' } },
  contact: {
    title: { id: 'Lanjut?', en: 'Continue?' },
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
  shipped: { id: 'Dirilis', en: 'Shipped' },
  dialogueSkip: { id: 'Lewati dialog', en: 'Skip dialogue' },
  replayDialogue: { id: 'Ulangi dialog', en: 'Replay dialogue' },
  playIntro: { id: 'Putar intro', en: 'Play intro' },
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
