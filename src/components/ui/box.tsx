import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type BoxProps = ComponentPropsWithoutRef<'div'> & {
  as?: 'div' | 'article'
}

export const Box = ({ as = 'div', className, ...props }: BoxProps) => {
  const classes = cn('border-4 border-ink bg-panel shadow-hard', className)

  if (as === 'article') {
    return <article className={classes} {...props} />
  }

  return <div className={classes} {...props} />
}
