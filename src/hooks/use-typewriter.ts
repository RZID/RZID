import { useCallback, useEffect, useState } from 'react'

export const useTypewriter = (lines: readonly string[], instant: boolean) => {
  const [text, setText] = useState(() => (instant ? lines.join('\n') : ''))
  const [done, setDone] = useState(instant)

  useEffect(() => {
    if (instant) {
      return
    }

    let line = 0
    let character = 0
    let built = ''
    let timer = 0

    const tick = () => {
      const current = lines[line]

      if (current === undefined) {
        setDone(true)
        return
      }

      if (character < current.length) {
        built += current.charAt(character)
        character += 1
        setText(built)
        timer = window.setTimeout(tick, 24)
        return
      }

      built += '\n'
      setText(built)
      line += 1
      character = 0
      timer = window.setTimeout(tick, 450)
    }

    timer = window.setTimeout(tick, 250)

    return () => window.clearTimeout(timer)
  }, [instant, lines])

  const finish = useCallback(() => {
    setText(lines.join('\n'))
    setDone(true)
  }, [lines])

  return { text, done, finish }
}
