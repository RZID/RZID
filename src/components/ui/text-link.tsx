import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type TextLinkProps = ComponentPropsWithoutRef<'a'>

export const TextLink = ({ className, children, ...props }: TextLinkProps) => (
  <a
    className={cn(
      'inline-flex min-h-6 items-center border-b border-accent pb-0.5 text-small text-foreground transition-colors duration-fast hover:border-accent-text hover:text-accent-text',
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
