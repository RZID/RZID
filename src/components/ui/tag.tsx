import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const Tag = ({ className, ...props }: ComponentPropsWithoutRef<'span'>) => (
  <span
    className={cn(
      'inline-block border-2 border-ink px-2 py-0.5 font-sans text-label leading-normal',
      className,
    )}
    {...props}
  />
)
