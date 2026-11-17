import { profile } from '@/content/profile'
import type {
  About,
  Availability,
  Clients,
  Contact,
  Education,
  Hero,
  NavLabels,
  ReplyTime,
  UiLabels,
  WorkSection,
} from '@/types/content'

export const education: Education = {
  degree: {
    en: 'B.Sc. Computer Science, in progress (evening program)',
    id: 'S1 Ilmu Komputer, berjalan (kelas malam)',
  },
}

export const availability: Availability = {
  status: {
    en: 'Available for full-time & consulting',
    id: 'Terbuka untuk posisi full-time dan konsultasi',
  },
  asOf: '2026-11',
}

export const replyTime: ReplyTime = {
  hours: 24,
}

export const hero: Hero = {
  titleA: { en: 'Curious human,', id: 'Orang yang penasaran,' },
  titleB: { en: 'happens to write code.', id: 'kebetulan bisa ngoding.' },
  summary: profile.summary,
  primaryCta: { en: 'Hire me', id: 'Rekrut Saya' },
  secondaryCta: { en: 'See selected work', id: 'Lihat karya pilihan' },
  card: {
    title: { en: 'At a glance', id: 'Sekilas' },
    basedLabel: { en: 'Based', id: 'Basis' },
    basedValue: { en: 'Jakarta, GMT+7', id: 'Jakarta, GMT+7' },
    localTimeLabel: { en: 'Local time', id: 'Waktu lokal' },
    timeZone: 'Asia/Jakarta',
    makesLabel: { en: 'I make', id: 'Saya bikin' },
    makes: ['web', 'mobile', 'backend'],
    emailLabel: { en: 'Email', id: 'Email' },
  },
}

export const clients: Clients = {
  label: { en: "Folks I've worked with", id: 'Yang pernah kerja sama' },
  items: ['Cara.sg', 'Affluent.sg', 'JebHealth', 'LVE Gym', 'Pinknode', 'Embreo'],
}

export const workSection: WorkSection = {
  title: {
    en: 'Work that shipped to real users.',
    id: 'Kerjaan yang sampai ke pengguna.',
  },
  summary: {
    en: 'Most of my work lives behind closed doors, so here is what I can share. Ask me anything on a call.',
    id: 'Sebagian besar kerjaan saya tertutup, jadi ini yang bisa saya bagikan. Tanya apa saja saat call.',
  },
  stackLabel: { en: 'Stack', id: 'Stack' },
  rolesTitle: { en: 'Roles', id: 'Peran' },
  hint: { en: 'Tap a role to expand', id: 'Ketuk peran untuk lihat detail' },
  paymentLabel: { en: 'payment', id: 'pembayaran' },
}

export const about: About = {
  title: { en: 'Tinkerer, builder, mentor.', id: 'Ngoprek, bangun, mentor.' },
  bio: [
    {
      en: "I'm Ramadhanu. I got into code out of curiosity: how does this thing actually work? Five years later I build microservices, mobile apps, and the servers they run on.",
      id: 'Saya Ramadhanu. Awalnya cuma penasaran: ini sebenarnya cara kerjanya gimana? Lima tahun kemudian saya bangun microservices, aplikasi mobile, dan server di bawahnya.',
    },
    {
      en: 'I also mentor students at SMK Negeri 12 Jakarta and keep the school servers alive. With clients it is the same deal: I join your team, learn how you work, and leave things your team can run.',
      id: 'Saya juga membimbing siswa SMK Negeri 12 Jakarta dan menjaga server sekolah tetap hidup. Ke klien sama: saya gabung tim Anda, pelajari cara kerja Anda, dan meninggalkan hal yang bisa dijalankan tim Anda.',
    },
  ],
  facts: [
    {
      label: { en: 'Location', id: 'Lokasi' },
      value: {
        en: 'Jakarta, remote worldwide, hybrid Jabodetabek',
        id: 'Jakarta, remote global, hybrid Jabodetabek',
      },
    },
    {
      label: { en: 'Experience', id: 'Pengalaman' },
      value: {
        en: '5+ years, Embreo PTE Ltd (2021-present)',
        id: '5+ tahun, Embreo PTE Ltd (2021-sekarang)',
      },
    },
    {
      label: { en: 'Education', id: 'Pendidikan' },
      value: education.degree,
    },
    {
      label: { en: 'Mentoring', id: 'Bimbingan' },
      value: {
        en: 'SMK Negeri 12 Jakarta, national certifications',
        id: 'SMK Negeri 12 Jakarta, sertifikasi nasional',
      },
    },
  ],
  toolboxLabel: { en: 'My toolbox', id: 'Kotak perkakas' },
}

export const contact: Contact = {
  titleA: { en: 'Something to build,', id: 'Ada yang mau dibikin,' },
  titleB: { en: 'or a team to grow?', id: 'atau tim yang butuh orang?' },
  summary: {
    en: 'I take consulting projects and full-time roles. Tell me what is on your mind.',
    id: 'Saya terima proyek konsultasi dan posisi full-time. Ceritakan apa yang ada di pikiran.',
  },
  primaryCta: { en: 'Email me', id: 'Email saya' },
  response: {
    en: 'More of a LinkedIn person? I am below.',
    id: 'Lebih suka LinkedIn? Saya ada di bawah.',
  },
  footerTagline: {
    en: 'Jakarta, GMT+7.',
    id: 'Jakarta, GMT+7.',
  },
  backToTop: { en: 'Back to top', id: 'Kembali ke atas' },
}

export const navLabels: NavLabels = {
  work: { en: 'Work', id: 'Karya' },
  experience: { en: 'Experience', id: 'Pengalaman' },
  about: { en: 'About', id: 'Tentang' },
  contact: { en: 'Contact', id: 'Kontak' },
  hire: { en: 'Hire me', id: 'Rekrut Saya' },
  menu: { en: 'Menu', id: 'Menu' },
  close: { en: 'Close', id: 'Tutup' },
}

export const uiLabels: UiLabels = {
  theme: { en: 'Theme', id: 'Tema' },
  themeSystem: { en: 'System', id: 'Sistem' },
  themeLight: { en: 'Light', id: 'Terang' },
  themeDark: { en: 'Dark', id: 'Gelap' },
  language: { en: 'Language', id: 'Bahasa' },
  languageEnglish: { en: 'English', id: 'Bahasa Inggris' },
  languageIndonesian: { en: 'Indonesian', id: 'Bahasa Indonesia' },
  englishShort: { en: 'EN', id: 'EN' },
  indonesianShort: { en: 'ID', id: 'ID' },
  skipToContent: { en: 'Skip to content', id: 'Lewati ke konten' },
  primaryNav: { en: 'Primary', id: 'Utama' },
}
