import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type RevealProps = ComponentPropsWithoutRef<'div'> & {
  delay?: number
}

export const Reveal = ({ className, children, delay = 0, style, ...props }: RevealProps) => {
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
        'transition-[opacity,transform] duration-(--motion-slow) ease-steps-5 motion-reduce:transition-none',
        visible ? 'scale-100 opacity-100' : 'translate-y-2.5 scale-95 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
