import { uiLabels } from '@/content/site'
import { usePreferences } from '@/hooks/use-preferences'
import type { ThemePreference } from '@/lib/boundary/preferences'
import { cn } from '@/lib/cn'
import { pickLocalized } from '@/lib/locale'
import type { LocalizedText } from '@/types/content'

type ThemeOption = {
  value: ThemePreference
  label: LocalizedText
}

const themeOptions: readonly ThemeOption[] = [
  { value: 'system', label: uiLabels.themeSystem },
  { value: 'light', label: uiLabels.themeLight },
  { value: 'dark', label: uiLabels.themeDark },
]

export const ThemeToggle = () => {
  const { theme, setTheme, locale } = usePreferences()

  return (
    <fieldset className="m-0 flex min-w-0 items-center gap-1 rounded-control border border-line p-1">
      <legend className="sr-only">{pickLocalized(uiLabels.theme, locale)}</legend>
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
          className={cn(
            'min-h-9 rounded-small px-2 text-micro tracking-label uppercase transition-colors duration-fast',
            theme === option.value
              ? 'bg-foreground text-background'
              : 'text-muted hover:text-foreground',
          )}
        >
          {pickLocalized(option.label, locale)}
        </button>
      ))}
    </fieldset>
  )
}
