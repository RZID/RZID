import { uiLabels } from '@/content/site'
import { usePreferences } from '@/hooks/use-preferences'
import { cn } from '@/lib/cn'
import { pickLocalized } from '@/lib/locale'
import type { Locale, LocalizedText } from '@/types/content'

type LocaleOption = {
  value: Locale
  name: LocalizedText
  short: LocalizedText
}

const localeOptions: readonly LocaleOption[] = [
  { value: 'en', name: uiLabels.languageEnglish, short: uiLabels.englishShort },
  { value: 'id', name: uiLabels.languageIndonesian, short: uiLabels.indonesianShort },
]

export const LocaleToggle = () => {
  const { locale, setLocale } = usePreferences()

  return (
    <fieldset className="m-0 flex min-w-0 items-center gap-1 rounded-control border border-line-control p-1">
      <legend className="sr-only">{pickLocalized(uiLabels.language, locale)}</legend>
      {localeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={pickLocalized(option.name, locale)}
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value)}
          className={cn(
            'min-h-9 min-w-9 rounded-small px-2 text-micro tracking-label uppercase transition-colors duration-fast',
            locale === option.value
              ? 'bg-foreground text-background'
              : 'text-muted hover:text-foreground',
          )}
        >
          {pickLocalized(option.short, option.value)}
        </button>
      ))}
    </fieldset>
  )
}
