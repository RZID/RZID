import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'link'

const buttonBase =
  'inline-flex items-center justify-center gap-2 font-sans transition duration-fast ease-soft disabled:pointer-events-none disabled:opacity-60'

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    'rounded-control bg-accent-control text-accent-foreground hover:-translate-y-px hover:brightness-95 active:translate-y-0 active:brightness-90',
  secondary:
    'rounded-control border border-line bg-surface text-foreground hover:-translate-y-px hover:bg-visual active:translate-y-0',
  link: 'border-b border-accent pb-1 text-foreground hover:border-accent-text hover:text-accent-text',
}

const buttonSizes: Record<ButtonVariant, string> = {
  primary: 'min-h-control px-6 text-control font-semibold',
  secondary: 'min-h-control px-6 text-control font-semibold',
  link: 'min-h-11 text-control font-medium',
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariant
}

export const Button = ({
  variant = 'primary',
  type = 'button',
  className,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    className={cn(buttonBase, buttonVariants[variant], buttonSizes[variant], className)}
    {...props}
  />
)

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: ButtonVariant
}

export const ButtonLink = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) => (
  <a
    className={cn(buttonBase, buttonVariants[variant], buttonSizes[variant], className)}
    {...props}
  >
    {children}
  </a>
)
