import { profile } from '@/content/profile'
import type { Hero, NavItem, SectionCopy, UiText } from '@/types/content'

export const nav: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'quests', label: 'Quests' },
  { id: 'items', label: 'Items' },
  { id: 'guild', label: 'Guild' },
  { id: 'contact', label: 'Contact' },
]

export const hero: Hero = {
  player: 'Player 1, Jakarta',
  level: 'LV.5',
  name: profile.name,
  dialogue: [
    'Halo! Saya Ramadhanu, software engineer di Jakarta.',
    'Lima tahun bikin web, mobile, dan backend.',
    'Suka bongkar cara kerja sesuatu, lalu bangun ulang.',
  ],
  primaryCta: { label: 'New game', href: '#quests' },
  secondaryCta: { label: profile.links.github.label, href: profile.links.github.href },
}

export const sections: SectionCopy = {
  quests: {
    title: 'Quests',
    lead: 'Sebagian besar kerjaan saya ada di balik pintu tertutup. Ini yang bisa saya ceritakan.',
  },
  items: { title: 'Items' },
  guild: { title: 'Guild' },
  contact: {
    title: 'Continue?',
    summary:
      'Terbuka untuk ngobrol soal kerjaan, kolaborasi, atau sekadar tukar cerita soal bongkar-bongkar sistem.',
    availability: 'Terbuka untuk full-time dan konsultasi',
  },
}

export const ui: UiText = {
  primaryNav: 'Menu utama',
  skipToContent: 'Lewati ke konten',
  themeToggle: 'Ganti tema terang atau gelap',
  dialogueSkip: 'Lewati dialog',
  cleared: 'Cleared',
  copyrightYear: '2026',
  footerHint: 'Tekan 1 sampai 5 untuk pindah menu.',
}
