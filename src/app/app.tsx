import { useState } from 'react'
import { BootScreen, shouldSkipBoot } from '@/features/boot'
import { Site } from '@/app/site'

export const App = () => {
  const [booted, setBooted] = useState(shouldSkipBoot)

  if (!booted) {
    return <BootScreen onDone={() => setBooted(true)} />
  }

  return <Site />
}
