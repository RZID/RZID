import { cn } from '@/lib/cn'
import type { ProjectIconId } from '@/types/content'
import { palette, sprites } from './sprites'

type ProjectIconProps = {
  icon: ProjectIconId
  className?: string
}

export const ProjectIcon = ({ icon, className }: ProjectIconProps) => {
  const rows = sprites[icon]

  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={cn('h-10 w-10 shrink-0', className)}
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
