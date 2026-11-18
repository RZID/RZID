import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const pickLines = (pool: readonly string[], seed: number, size: number) => {
  if (pool.length === 0) {
    return []
  }

  const indices = pool.map((_, index) => index)
  let state = (seed + 1) * 1103515245 + 12345

  const next = () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 4294967296
  }

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const other = Math.floor(next() * (index + 1))
    const left = indices[index]
    const right = indices[other]

    if (left !== undefined && right !== undefined) {
      indices[index] = right
      indices[other] = left
    }
  }

  return indices.slice(0, Math.min(size, pool.length)).map((index) => pool[index] ?? '')
}

export const useTypewriter = (lines: readonly string[], instant: boolean) => {
  const [run, setRun] = useState(0)
  const [cycle, setCycle] = useState(0)

  const ordered = useMemo(() => pickLines(lines, cycle, 3), [lines, cycle])

  const [text, setText] = useState(() => (instant ? ordered.join('\n') : ''))
  const [done, setDone] = useState(instant)
  const stopped = useRef(instant)

  useEffect(() => {
    if (instant || ordered.length === 0) {
      return
    }

    stopped.current = false

    let line = 0
    let character = 0
    let built = ''
    let timer = 0

    const tick = () => {
      if (stopped.current) {
        return
      }

      const current = ordered[line]

      if (current === undefined) {
        setDone(true)
        return
      }

      if (character < current.length) {
        built += current.charAt(character)
        character += 1
        setText(built)
        timer = window.setTimeout(tick, 12)
        return
      }

      built += '\n'
      setText(built)
      line += 1
      character = 0
      timer = window.setTimeout(tick, 220)
    }

    timer = window.setTimeout(tick, 150)

    return () => window.clearTimeout(timer)
  }, [instant, ordered, run])

  useEffect(() => {
    if (!done || instant || ordered.length === 0) {
      return
    }

    const timer = window.setTimeout(() => {
      setText('')
      setDone(false)
      setCycle((current) => current + 1)
    }, 2600)

    return () => window.clearTimeout(timer)
  }, [done, instant, ordered.length])

  const finish = useCallback(() => {
    stopped.current = true
    setText(ordered.join('\n'))
    setDone(true)
  }, [ordered])

  const replay = useCallback(() => {
    stopped.current = false
    setText('')
    setDone(false)
    setRun((current) => current + 1)
  }, [])

  return { text, done, finish, replay }
}
