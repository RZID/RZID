import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

type Point = {
  x: number
  y: number
  size: number
  speed: number
}

const pointCount = 70

export const Starfield = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current

    if (canvas === null) {
      return
    }

    const context = canvas.getContext('2d')

    if (context === null) {
      return
    }

    const points: Point[] = Array.from({ length: pointCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 1 + Math.floor(Math.random() * 3),
      speed: 0.02 + Math.random() * 0.06,
    }))

    let ink = '#ece8d8'
    let frame = 0
    let frames = 0
    let running = false
    let onScreen = true

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
      frames += 1
      canvas.dataset.frameCount = String(frames)
    }

    const loop = () => {
      paint()

      if (onScreen && !document.hidden) {
        frame = window.requestAnimationFrame(loop)
      } else {
        frame = 0
        running = false
      }
    }

    const start = () => {
      if (!running && !reduced && onScreen && !document.hidden) {
        running = true
        frame = window.requestAnimationFrame(loop)
      }
    }

    const stop = () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }

      frame = 0
      running = false
    }

    readInk()
    resize()
    paint()
    start()

    const inkObserver = new MutationObserver(readInk)
    inkObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (entry === undefined) {
          return
        }

        onScreen = entry.isIntersecting

        if (onScreen) {
          start()
        } else {
          stop()
        }
      },
      { threshold: 0 },
    )
    visibilityObserver.observe(canvas)

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop()
      } else {
        start()
      }
    }

    const onResize = () => {
      resize()
      paint()
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      stop()
      inkObserver.disconnect()
      visibilityObserver.disconnect()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [reduced])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
