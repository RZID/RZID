import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type EyebrowProps = ComponentPropsWithoutRef<'p'>

export const Eyebrow = ({ className, ...props }: EyebrowProps) => (
  <p
    className={cn('text-micro font-medium tracking-label text-muted uppercase', className)}
    {...props}
  />
)
