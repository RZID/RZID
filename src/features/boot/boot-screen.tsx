import { useCallback, useEffect, useRef, useState } from 'react'
import { ui } from '@/content/site'
import { cn } from '@/lib/cn'
import { useT } from '@/lib/locale'
import { markBootDone } from './boot-state'

type BootScreenProps = {
  onDone: () => void
}

export const BootScreen = ({ onDone }: BootScreenProps) => {
  const [closing, setClosing] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const t = useT()

  const start = useCallback(() => {
    if (closing) {
      return
    }

    markBootDone()
    setClosing(true)
    window.setTimeout(onDone, 700)
  }, [closing, onDone])

  useEffect(() => {
    buttonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        start()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [start])

  return (
    <dialog
      open
      aria-label={t(ui.bootDialogLabel)}
      className={cn(
        'fixed inset-0 z-100 m-0 grid h-screen max-h-none w-screen max-w-none place-content-center justify-items-center gap-5 border-0 bg-[#0b0d14] p-0 px-5 text-center text-[#ece8d8]',
        'transition-[clip-path] duration-700 ease-steps-5',
        closing ? '[clip-path:inset(0_0_100%_0)]' : '[clip-path:inset(0)]',
      )}
    >
      <p className="font-pixel text-boot leading-none whitespace-pre-line [text-shadow:4px_4px_0_#ffc83d]">
        {t(ui.bootTitle)}
      </p>
      <div className="h-6 w-[min(320px,70vw)] border-4 border-[#ece8d8] p-0.5" aria-hidden="true">
        <div className="h-full origin-left animate-load bg-[#4be3a6]" />
      </div>
      <button
        ref={buttonRef}
        type="button"
        onClick={start}
        className="cursor-pointer border-4 border-[#ece8d8] bg-[#ffc83d] px-5 py-2 font-pixel text-lg font-bold text-[#0b0d14]"
      >
        {t(ui.pressStart)}
      </button>
      <p className="text-sm text-[#a9a79a]">{t(ui.bootEnterHint)}</p>
    </dialog>
  )
}
