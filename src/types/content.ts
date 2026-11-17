export type Locale = 'en' | 'id'

export type LocalizedText = {
  en: string
  id: string
}

export type ProfileLink = {
  label: LocalizedText
  value: string
  href: string
}

export type ProfileImage = {
  src: string
  srcSet: string
}

export type Profile = {
  name: string
  role: LocalizedText
  location: LocalizedText
  summary: LocalizedText
  avatar: ProfileImage
  links: {
    github: ProfileLink
    email: ProfileLink
    linkedin: ProfileLink
  }
}

export type StackIconId =
  | 'aws'
  | 'docker'
  | 'expo'
  | 'express'
  | 'mysql'
  | 'nestjs'
  | 'nextjs'
  | 'postgresql'
  | 'rabbitmq'
  | 'react'
  | 'redis'
  | 'stripe'
  | 'typescript'

export type StackItem = {
  name: string
  icon?: StackIconId
}

export type StackLogo = {
  name: string
  icon: StackIconId
  src: string
  mono?: boolean
}

export type ProjectLink = {
  label: LocalizedText
  href: string
}

export type Project = {
  name: string
  role: LocalizedText
  period?: LocalizedText
  outcome: LocalizedText
  stack: readonly StackItem[]
  links?: readonly ProjectLink[]
  image?: string
}

export type Experience = {
  company: string
  role: LocalizedText
  employmentType: LocalizedText
  period: LocalizedText
  highlights: readonly LocalizedText[]
}

export type Education = {
  degree: LocalizedText
}

export type SkillGroup = {
  title: LocalizedText
  items: readonly LocalizedText[]
}

export type NavLabels = {
  work: LocalizedText
  about: LocalizedText
  contact: LocalizedText
  hire: LocalizedText
  menu: LocalizedText
  close: LocalizedText
}

export type HeroCard = {
  title: LocalizedText
  status: LocalizedText
  basedLabel: LocalizedText
  basedValue: LocalizedText
  localTimeLabel: LocalizedText
  timeZone: string
  makesLabel: LocalizedText
  makes: readonly string[]
  emailLabel: LocalizedText
}

export type Hero = {
  badge: LocalizedText
  titleA: LocalizedText
  titleB: LocalizedText
  summary: LocalizedText
  primaryCta: LocalizedText
  secondaryCta: LocalizedText
  card: HeroCard
}

export type Clients = {
  label: LocalizedText
  items: readonly string[]
}

export type WorkSection = {
  title: LocalizedText
  summary: LocalizedText
  stackLabel: LocalizedText
  rolesTitle: LocalizedText
  hint: LocalizedText
  paymentLabel: LocalizedText
}

export type AboutFact = {
  label: LocalizedText
  value: LocalizedText
}

export type About = {
  title: LocalizedText
  bio: readonly LocalizedText[]
  facts: readonly AboutFact[]
  toolboxLabel: LocalizedText
}

export type Contact = {
  titleA: LocalizedText
  titleB: LocalizedText
  summary: LocalizedText
  availability: LocalizedText
  primaryCta: LocalizedText
  response: LocalizedText
  footerTagline: LocalizedText
  backToTop: LocalizedText
}
