import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type TagProps = ComponentPropsWithoutRef<'li'>

export const Tag = ({ className, ...props }: TagProps) => (
  <li
    className={cn(
      'rounded-full border border-foreground/15 px-3 py-1 font-mono text-xs text-foreground/70',
      className,
    )}
    {...props}
  />
)
