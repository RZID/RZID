import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const useTypewriter = (lines: readonly string[], instant: boolean) => {
  const [text, setText] = useState(() => (instant ? lines.join('\n') : ''))
  const [done, setDone] = useState(instant)
  const [run, setRun] = useState(0)
  const [cycle, setCycle] = useState(0)
  const stopped = useRef(instant)

  const ordered = useMemo(() => {
    if (lines.length === 0) {
      return lines
    }

    const start = cycle % lines.length
    return [...lines.slice(start), ...lines.slice(0, start)]
  }, [lines, cycle])

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
