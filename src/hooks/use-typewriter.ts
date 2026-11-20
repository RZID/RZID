import { useCallback, useEffect, useRef, useState } from 'react'

export const useTypewriter = (sentences: readonly string[], instant: boolean) => {
  const [cycle, setCycle] = useState(0)

  const current = sentences[cycle % sentences.length] ?? ''

  const [text, setText] = useState(() => (instant ? current : ''))
  const [done, setDone] = useState(instant)
  const stopped = useRef(instant)

  useEffect(() => {
    if (instant || current === '') {
      return
    }

    stopped.current = false

    let index = 0
    let built = ''
    let timer = 0

    const tick = () => {
      if (stopped.current) {
        return
      }

      if (index >= current.length) {
        setDone(true)
        return
      }

      built += current.charAt(index)
      index += 1
      setText(built)
      timer = window.setTimeout(tick, 12)
    }

    timer = window.setTimeout(tick, 150)

    return () => window.clearTimeout(timer)
  }, [instant, current])

  useEffect(() => {
    if (!done || instant || sentences.length === 0) {
      return
    }

    const timer = window.setTimeout(() => {
      setText('')
      setDone(false)
      setCycle((value) => value + 1)
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [done, instant, sentences.length])

  const finish = useCallback(() => {
    stopped.current = true
    setText(current)
    setDone(true)
  }, [current])

  return { text, done, finish }
}
