import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type TextLinkProps = ComponentPropsWithoutRef<'a'>

export const TextLink = ({ className, children, ...props }: TextLinkProps) => (
  <a
    className={cn(
      'underline decoration-accent decoration-1 underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
