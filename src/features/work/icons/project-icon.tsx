import { cn } from '@/lib/cn'
import { spritePaths } from '@/lib/pixel-sprite'
import type { ProjectIconId } from '@/types/content'
import { palette, sprites } from './sprites'

type ProjectIconProps = {
  icon: ProjectIconId
  className?: string
}

export const ProjectIcon = ({ icon, className }: ProjectIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={cn('size-8 shrink-0', className)}
    >
      {spritePaths(sprites[icon], palette).map((path) => (
        <path key={path.fill} d={path.d} style={{ fill: path.fill }} />
      ))}
    </svg>
  )
}
