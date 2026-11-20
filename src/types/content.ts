export type Locale = 'id' | 'en'

export type Localized = {
  id: string
  en: string
}

export type NavItem = {
  id: string
  label: Localized
}

export type Link = {
  label: Localized
  href: string
}

export type Profile = {
  name: string
  role: Localized
  location: Localized
  summary: Localized
  links: {
    github: Link
    email: Link
    linkedin: Link
  }
}

export type ProjectIconId = 'heart' | 'scroll' | 'crossCoin' | 'dumbbell' | 'diamondNode'

export type Project = {
  name: string
  icon: ProjectIconId
  summary: Localized
  stack: readonly string[]
}

export type Experience = {
  org: string
  role: Localized
  period: Localized
  summary: Localized
  kind: 'work' | 'education'
}

export type SkillGroup = {
  title: Localized
  items: readonly Localized[]
  learning?: boolean
}

export type HeroStat = {
  label: Localized
  value: Localized
}

export type Hero = {
  name: string
  sentences: readonly Localized[]
  stats: readonly HeroStat[]
  primaryCta: Link
  secondaryCta: Link
}

export type SectionCopy = {
  quests: { title: Localized; lead: Localized }
  items: { title: Localized }
  guild: { title: Localized }
  contact: { title: Localized; summary: Localized; availability: Localized }
}

export type UiText = {
  primaryNav: Localized
  skipToContent: Localized
  themeToggle: Localized
  language: Localized
  englishShort: Localized
  indonesianShort: Localized
  shipped: Localized
  countShipped: Localized
  countItems: Localized
  countEntries: Localized
  dialogueSkip: Localized
  replayDialogue: Localized
  playIntro: Localized
  copyrightYear: string
  footerHint: Localized
  bootDialogLabel: Localized
  bootTitle: Localized
  pressStart: Localized
  bootEnterHint: Localized
  avatarLabel: Localized
}
