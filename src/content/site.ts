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
      id: 'Boot sequence: engineer penasaran asal Jakarta, lima tahun bongkar sistem web, mobile, dan backend lalu bangun ulang dengan NestJS, Expo, Redis, dan sedikit kebandelan.',
      en: 'Boot sequence: a curious engineer from Jakarta who has spent five years pulling web, mobile, and backend systems apart, then building them back better with NestJS, Expo, Redis, and a healthy amount of stubbornness.',
    },
    {
      id: 'Inventory hari ini: microservices NestJS yang menggantikan monolith yang tetap melayani pengguna, aplikasi Expo di iOS dan Android, Redis plus RabbitMQ biar cepat, dan pembayaran HitPay, Stripe, Airwallex.',
      en: 'Today’s inventory: NestJS microservices that replaced a monolith while it kept serving users, Expo apps on iOS and Android, Redis and RabbitMQ keeping things fast, and payments running through HitPay, Stripe, and Airwallex.',
    },
    {
      id: 'Sela-sela rilis sistem produksi, saya bimbing siswa di SMK Negeri 12 Jakarta, jaga server sekolah tetap hidup, dan tinggalkan runbook supaya tim tetap lanjut setelah saya logout.',
      en: 'Between shipping production systems, I mentor students at SMK Negeri 12 Jakarta, keep the school servers alive, and leave runbooks behind so the team can keep going long after I log off.',
    },
    {
      id: 'Remote jadi default, hybrid di sekitar Jabodetabek, lagi grinding Kubernetes, Kafka, dan Cloudflare edge, dan selalu siap dalam quest co-op: posisi full-time, konsultasi, atau sekadar tukar cerita sistem.',
      en: 'Remote by default, hybrid around Jabodetabek, currently grinding Kubernetes, Kafka, and Cloudflare edge, and always up for a co-op quest: a full-time role, consulting, or just swapping system war stories.',
    },
    {
      id: 'Saya baca sistem kayak save file: lacak logikanya, temukan bug, patch, dokumentasikan, lalu serahkan rapi — lima tahun web, mobile, dan backend mengajarkan saya bahwa rilis itu olahraga tim.',
      en: 'I read systems like save files: trace the logic, find the bug, patch it, document it, then hand it over clean — five years of web, mobile, and backend taught me that shipping is a team sport.',
    },
    {
      id: 'Satu codebase Expo jadi dua rilis store, alur pembayaran lewat uang nyata, monolith pindah ke microservices sambil tetap melayani pengguna, dan di antaranya saya tetap sempat ngajar dan nulis docs.',
      en: 'One Expo codebase became two store releases, a payment flow handled real money, a monolith moved to microservices while still serving users, and somewhere in there I still found time to teach and write docs.',
    },
    {
      id: 'Kadang perbaikan kecil lebih penting: retry, webhook, dan alert yang benar-benar bunyi — itu saya urus di alur pembayaran produksi.',
      en: 'Sometimes the small fixes matter more: retries, webhooks, and alerts that actually fire — I handle those on production payment flows.',
    },
    {
      id: 'Deploy manual yang dulu makan waktu lama sekarang jadi pipeline AWS yang bisa dijalankan siapa saja, lengkap dengan docs dan runbook.',
      en: 'A slow manual deploy became an AWS pipeline anyone can run, complete with docs and runbooks for the team.',
    },
    {
      id: 'Saya suka sistem yang bisa dijelaskan dengan runbook, bukan cuma dipercayakan ke ingatan satu orang.',
      en: 'I like systems that can be explained with a runbook, not trusted to one person’s memory.',
    },
    {
      id: 'Dari database sampai frontend, proyek freelance dulu mengajarkan saya bahwa selesai itu saat pengguna benar-benar pakai.',
      en: 'From database to frontend, early freelance work taught me that done means users actually use it.',
    },
    {
      id: 'Microservices, pipeline event-driven, dan infrastruktur yang tetap hidup jam tiga pagi — itu masalah yang bikin saya penasaran.',
      en: 'Microservices, event-driven pipelines, and infrastructure that stays up at 3am — those are the problems that keep me curious.',
    },
    {
      id: 'Kalau lu butuh orang yang mau bongkar dulu sebelum bikin, ya itu saya.',
      en: 'If you need someone who takes things apart before building them back, that is me.',
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
  avatarAction: {
    id: 'Bikin avatar lompat',
    en: 'Make the avatar jump',
  },
}
