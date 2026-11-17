export type Locale = 'en' | 'id'

export type LocalizedText = {
  en: string
  id: string
}

export type ProfileLink = {
  label: string
  href: string
}

export type Profile = {
  name: string
  role: LocalizedText
  location: LocalizedText
  summary: LocalizedText
  links: {
    github: ProfileLink
    email: ProfileLink
    linkedin: ProfileLink
  }
}

export type Project = {
  name: string
  summary: LocalizedText
  stack: readonly string[]
}

export type Experience = {
  company: string
  role: LocalizedText
  employmentType: LocalizedText
  period: LocalizedText
  highlights: readonly LocalizedText[]
}
