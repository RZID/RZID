import { useCallback, useEffect, useRef, useState } from 'react'

export const useTypewriter = (sentence: string, instant: boolean) => {
  const [text, setText] = useState(() => (instant ? sentence : ''))
  const [done, setDone] = useState(instant)
  const [run, setRun] = useState(0)
  const stopped = useRef(instant)

  useEffect(() => {
    if (instant || sentence === '') {
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

      if (index >= sentence.length) {
        setDone(true)
        return
      }

      built += sentence.charAt(index)
      index += 1
      setText(built)
      timer = window.setTimeout(tick, 12)
    }

    timer = window.setTimeout(tick, 150)

    return () => window.clearTimeout(timer)
  }, [instant, sentence, run])

  const finish = useCallback(() => {
    stopped.current = true
    setText(sentence)
    setDone(true)
  }, [sentence])

  const replay = useCallback(() => {
    stopped.current = false
    setText('')
    setDone(false)
    setRun((value) => value + 1)
  }, [])

  return { text, done, finish, replay }
}
