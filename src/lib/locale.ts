import type { Locale, LocalizedText } from '@/types/content'

export const pickLocalized = (text: LocalizedText, locale: Locale): string => text[locale]
