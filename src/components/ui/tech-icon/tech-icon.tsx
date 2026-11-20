import { cn } from '@/lib/cn'
import { palette, sprites } from './sprites'
import { techIconId } from './tech-icon-id'

type TechIconProps = {
  label: string
  className?: string
}

export const TechIcon = ({ label, className }: TechIconProps) => {
  const icon = techIconId(label)

  if (icon === undefined) {
    return null
  }

  const rows = sprites[icon].split('\n')

  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={cn('h-4 w-4 shrink-0', className)}
    >
      {rows.flatMap((row, y) =>
        row.split('').map((cell, x) => {
          const fill = palette[cell]

          if (fill === undefined) {
            return null
          }

          return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" style={{ fill }} />
        }),
      )}
    </svg>
  )
}
