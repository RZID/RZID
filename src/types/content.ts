export type NavItem = {
  id: string
  label: string
}

export type Link = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: string
  location: string
  links: {
    github: Link
    email: Link
    linkedin: Link
  }
}

export type Project = {
  name: string
  summary: string
  stack: readonly string[]
}

export type Experience = {
  org: string
  role: string
  period: string
  summary: string
  kind: 'work' | 'education'
}

export type SkillGroup = {
  title: string
  items: readonly string[]
  learning?: boolean
}

export type Hero = {
  player: string
  level: string
  name: string
  dialogue: readonly string[]
  primaryCta: Link
  secondaryCta: Link
}

export type SectionCopy = {
  quests: { title: string; lead: string }
  items: { title: string }
  guild: { title: string }
  contact: { title: string; summary: string; availability: string }
}

export type UiText = {
  primaryNav: string
  skipToContent: string
  themeToggle: string
  dialogueSkip: string
  cleared: string
  copyrightYear: string
  footerHint: string
}
