import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const Reveal = ({ className, children, ...props }: ComponentPropsWithoutRef<'div'>) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const element = ref.current

    if (element === null || visible) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-500 ease-steps-5 motion-reduce:transition-none',
        visible ? 'scale-100 opacity-100' : 'translate-y-2.5 scale-95 opacity-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
