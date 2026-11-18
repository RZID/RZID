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
      id: 'Boot sequence: engineer penasaran, build Jakarta.',
      en: 'Boot sequence: curious engineer, Jakarta build.',
    },
    {
      id: 'Lima tahun di build log: web, mobile, backend.',
      en: 'Five years in the build log: web, mobile, backend.',
    },
    {
      id: 'Saya baca sistem kayak save file — lalu tulis ulang yang lebih rapi.',
      en: 'I read systems like save files, then write better ones.',
    },
    {
      id: 'Remote jadi default, hybrid di sekitar Jabodetabek.',
      en: 'Remote by default, hybrid around Jabodetabek.',
    },
    {
      id: 'Inventory hari ini: NestJS, Redis, RabbitMQ, Expo.',
      en: 'Today’s inventory: NestJS, Redis, RabbitMQ, Expo.',
    },
    {
      id: 'Satu codebase Expo, dua app store.',
      en: 'One Expo codebase, two app stores.',
    },
    {
      id: 'Bos pembayaran yang sudah dikalahkan: HitPay, Stripe, Airwallex.',
      en: 'Payment bosses cleared: HitPay, Stripe, Airwallex.',
    },
    {
      id: 'Side quest: jaga server sekolah tetap hidup.',
      en: 'Side quest: keeping the school servers alive.',
    },
    {
      id: 'Monolith masih melayani pengguna, saya pindah ke microservices.',
      en: 'A monolith kept serving users while I moved it to microservices.',
    },
    {
      id: 'Lagi grinding: Kubernetes, Kafka, Cloudflare edge.',
      en: 'Currently grinding: Kubernetes, Kafka, Cloudflare edge.',
    },
    {
      id: 'Saya tinggalkan runbook, tim lanjut tanpa saya.',
      en: 'I leave runbooks so the team keeps shipping without me.',
    },
    {
      id: 'Co-op request dibuka: full-time atau konsultasi.',
      en: 'Co-op requests open: full-time or consulting.',
    },
    {
      id: 'Mode mentor aktif di SMK Negeri 12 Jakarta.',
      en: 'Mentor mode active at SMK Negeri 12 Jakarta.',
    },
    {
      id: 'Debug dulu, rilis kemudian.',
      en: 'Debug first, ship second.',
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
  skipToContent: { id: 'Lewati ke konten', en: 'Skip to content' },
  themeToggle: {
    id: 'Ganti tema terang atau gelap',
    en: 'Toggle light or dark theme',
  },
  language: { id: 'Bahasa', en: 'Language' },
  englishShort: { id: 'EN', en: 'EN' },
  indonesianShort: { id: 'ID', en: 'ID' },
  shipped: { id: 'Dirilis', en: 'Shipped' },
  countShipped: { id: 'dirilis', en: 'shipped' },
  countItems: { id: 'item', en: 'items' },
  countEntries: { id: 'entri', en: 'entries' },
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
