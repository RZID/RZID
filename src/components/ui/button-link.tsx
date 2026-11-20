import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary'
}

const variants = {
  primary: 'bg-accent text-on-accent',
  secondary: 'bg-panel text-ink',
} as const

export const ButtonLink = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(
      'inline-flex cursor-pointer items-center justify-center border-4 border-ink px-4 py-2 font-pixel text-lg font-bold shadow-hard-sm',
      'transition-[transform,box-shadow] duration-[var(--motion-fast)] ease-steps will-change-transform',
      'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
      'active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
      variants[variant],
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
