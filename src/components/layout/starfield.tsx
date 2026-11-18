import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  size: number
  speed: number
}

const pointCount = 70

export const Starfield = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current

    if (canvas === null) {
      return
    }

    const context = canvas.getContext('2d')

    if (context === null) {
      return
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const points: Point[] = Array.from({ length: pointCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.floor(Math.random() * 3),
      speed: 0.02 + Math.random() * 0.06,
    }))

    let ink = '#ece8d8'

    const readInk = () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim()
      ink = value === '' ? '#ece8d8' : value
    }

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2)
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const paint = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      context.clearRect(0, 0, width, height)
      context.fillStyle = ink
      context.globalAlpha = 0.22

      for (const point of points) {
        context.fillRect(
          Math.floor(point.x * width),
          Math.floor(point.y * height),
          point.size * 2,
          point.size * 2,
        )

        if (!reduced) {
          point.y -= point.speed / 60

          if (point.y < 0) {
            point.y = 1
          }
        }
      }

      context.globalAlpha = 1
    }

    readInk()
    resize()
    paint()

    const observer = new MutationObserver(readInk)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    window.addEventListener('resize', resize)

    let frame = 0

    const loop = () => {
      if (!document.hidden) {
        paint()
      }

      frame = window.requestAnimationFrame(loop)
    }

    if (!reduced) {
      frame = window.requestAnimationFrame(loop)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
