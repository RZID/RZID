import { useState } from 'react'
import { Site } from '@/app/site'
import { BootScreen, markBootDone, shouldShowBoot } from '@/features/boot'

export const App = () => {
  const [booting, setBooting] = useState(shouldShowBoot)

  const start = () => {
    markBootDone()
    setBooting(false)
  }

  return (
    <>
      <Site />
      {booting ? <BootScreen onStart={start} /> : null}
    </>
  )
}
