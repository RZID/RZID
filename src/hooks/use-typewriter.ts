import { useCallback, useEffect, useRef, useState } from 'react'

export const useTypewriter = (sentences: readonly string[], instant: boolean) => {
  const full = sentences.join('\n')
  const [run, setRun] = useState(0)
  const [text, setText] = useState(() => (instant ? full : ''))
  const [done, setDone] = useState(instant)
  const stopped = useRef(instant)

  useEffect(() => {
    if (instant || full === '') {
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

      if (index >= full.length) {
        setDone(true)
        return
      }

      built += full.charAt(index)
      index += 1
      setText(built)
      timer = window.setTimeout(tick, 12)
    }

    timer = window.setTimeout(tick, 150)

    return () => window.clearTimeout(timer)
  }, [instant, full, run])

  const finish = useCallback(() => {
    stopped.current = true
    setText(full)
    setDone(true)
  }, [full])

  const replay = useCallback(() => {
    stopped.current = false
    setText('')
    setDone(false)
    setRun((value) => value + 1)
  }, [])

  return { text, done, finish, replay }
}
