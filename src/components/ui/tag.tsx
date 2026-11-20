import type { ComponentPropsWithoutRef } from 'react'
import { TechIcon } from '@/components/ui/tech-icon'
import { cn } from '@/lib/cn'

export const Tag = ({ className, children, ...props }: ComponentPropsWithoutRef<'span'>) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 border-2 border-ink px-2 py-0.5 font-pixel text-label leading-normal',
      className,
    )}
    {...props}
  >
    {typeof children === 'string' ? <TechIcon label={children} /> : null}
    {children}
  </span>
)
