import { useState } from 'react'
import { Starfield } from '@/components/layout/starfield'
import { BootScreen, shouldSkipBoot } from '@/features/boot'

export const App = () => {
  const [booted, setBooted] = useState(shouldSkipBoot)

  if (!booted) {
    return <BootScreen onDone={() => setBooted(true)} />
  }

  return (
    <>
      <Starfield />
      <main className="mx-auto max-w-content px-5 py-16">
        <h1 className="font-pixel text-hero text-shadow-hard">Ramadhanu</h1>
        <p className="mt-4 text-muted">Project sedang dibangun.</p>
      </main>
    </>
  )
}
