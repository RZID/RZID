import { useCallback, useEffect, useRef, useState } from 'react'

export const useTypewriter = (lines: readonly string[], instant: boolean) => {
  const [text, setText] = useState(() => (instant ? lines.join('\n') : ''))
  const [done, setDone] = useState(instant)
  const [run, setRun] = useState(0)
  const stopped = useRef(instant)

  useEffect(() => {
    if (instant) {
      stopped.current = true
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

      const current = lines[line]

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
  }, [instant, lines, run])

  const finish = useCallback(() => {
    stopped.current = true
    setText(lines.join('\n'))
    setDone(true)
  }, [lines])

  const replay = useCallback(() => {
    stopped.current = false
    setText('')
    setDone(false)
    setRun((current) => current + 1)
  }, [])

  return { text, done, finish, replay }
}
