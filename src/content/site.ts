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
  sentences: [
    {
      id: 'Halo, saya Ramadhanu, software engineer di Jakarta.',
      en: "Hi, I'm Ramadhanu, a software engineer in Jakarta.",
    },
    {
      id: 'Lima tahun mengerjakan web, mobile, dan backend.',
      en: 'Five years of web, mobile and backend.',
    },
    {
      id: 'Suka membongkar sistem untuk tahu cara kerjanya.',
      en: 'I like taking systems apart to see how they work.',
    },
  ],
  stats: [
    {
      label: { id: 'Basis', en: 'Base' },
      value: { id: 'Jakarta', en: 'Jakarta' },
    },
    {
      label: { id: 'Bidang', en: 'Work' },
      value: {
        id: 'Web · Mobile · Backend',
        en: 'Web · Mobile · Backend',
      },
    },
    {
      label: { id: 'Mode', en: 'Mode' },
      value: {
        id: 'Remote global · Hybrid Jabodetabek',
        en: 'Remote worldwide · Hybrid in Jabodetabek',
      },
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
  menu: { id: 'Menu', en: 'Menu' },
  closeMenu: { id: 'Tutup', en: 'Close' },
  menuHint: {
    id: 'Esc atau klik luar untuk tutup',
    en: 'Esc or click outside to close',
  },
  skipToContent: { id: 'Lewati ke konten', en: 'Skip to content' },
  themeToggle: {
    id: 'Ganti tema terang atau gelap',
    en: 'Toggle light or dark theme',
  },
  language: { id: 'Bahasa', en: 'Language' },
  switchToEnglish: {
    id: 'EN, beralih ke Bahasa Inggris',
    en: 'EN, switch to English',
  },
  switchToIndonesian: {
    id: 'ID, beralih ke Bahasa Indonesia',
    en: 'ID, switch to Indonesian',
  },
  englishShort: { id: 'EN', en: 'EN' },
  indonesianShort: { id: 'ID', en: 'ID' },
  dialogueSkip: { id: 'Lewati dialog', en: 'Skip dialogue' },
  replayDialogue: { id: 'Ulangi dialog', en: 'Replay dialogue' },
  copyrightYear: '2026',
  footerHint: {
    id: 'Alt+1 sampai Alt+5 untuk pindah menu.',
    en: 'Alt+1 to Alt+5 to jump between sections.',
  },
  avatarLabel: {
    id: 'Avatar pixel Ramadhanu',
    en: 'Pixel avatar of Ramadhanu',
  },
  avatarAction: {
    id: 'Bikin avatar lompat',
    en: 'Make the avatar jump',
  },
}
