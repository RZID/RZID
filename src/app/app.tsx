import { useCallback, useState } from 'react'
import { BootScreen, shouldSkipBoot } from '@/features/boot'
import { Site } from '@/app/site'

export const App = () => {
  const [booted, setBooted] = useState(shouldSkipBoot)
  const finishBoot = useCallback(() => setBooted(true), [])

  if (!booted) {
    return <BootScreen onDone={finishBoot} />
  }

  return <Site />
}
