import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type TagProps = ComponentPropsWithoutRef<'span'>

export const Tag = ({ className, ...props }: TagProps) => (
  <span
    className={cn(
      'rounded-full border border-foreground/15 px-3 py-1 font-mono text-xs text-foreground/70',
      className,
    )}
    {...props}
  />
)
