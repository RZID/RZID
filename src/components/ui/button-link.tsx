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
      'inline-flex cursor-pointer items-center justify-center border-4 border-ink px-4 py-2 font-pixel text-lead font-bold shadow-hard-sm',
      'transition-[transform,box-shadow] duration-(--motion-fast) ease-steps will-change-transform',
      'hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none',
      'active:translate-x-0.75 active:translate-y-0.75 active:shadow-none',
      variants[variant],
      className,
    )}
    {...props}
  >
    {children}
  </a>
)
