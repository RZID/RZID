import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type TagProps = ComponentPropsWithoutRef<'span'>

export const Tag = ({ className, ...props }: TagProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-chip border border-line px-2.5 py-1.5 font-mono text-tag text-muted uppercase',
      className,
    )}
    {...props}
  />
)
