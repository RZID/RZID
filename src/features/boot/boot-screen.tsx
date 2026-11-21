import { useEffect, useRef } from 'react'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { ui } from '@/content/site'
import { useT } from '@/lib/locale'

type BootScreenProps = {
  onStart: () => void
}

export const BootScreen = ({ onStart }: BootScreenProps) => {
  const t = useT()
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    button.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onStart()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onStart])

  return (
    <dialog
      open
      className="fixed inset-0 z-70 m-0 flex max-w-none flex-col items-center justify-center gap-6 border-0 bg-page p-0 px-5 text-center"
      aria-label={t(ui.bootDialogLabel)}
    >
      <PixelAvatar className="w-32 animate-bob sm:w-48" />
      <p className="m-0 font-pixel text-boot leading-none whitespace-pre-line text-shadow-hard">
        {t(ui.bootTitle)}
      </p>
      <div className="h-3 w-56 border-2 border-ink bg-panel sm:w-72">
        <div className="h-full origin-left animate-load bg-accent" />
      </div>
      <button
        ref={button}
        type="button"
        onClick={onStart}
        className="cursor-pointer border-4 border-ink bg-panel px-6 py-3 font-pixel text-lead text-mint shadow-hard"
      >
        {t(ui.pressStart)}
      </button>
      <small className="font-pixel text-label text-muted">{t(ui.bootEnterHint)}</small>
    </dialog>
  )
}
