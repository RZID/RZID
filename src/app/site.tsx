import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Starfield } from '@/components/layout/starfield'
import { nav, ui } from '@/content/site'
import { HeroSection } from '@/features/hero'
import { QuestsSection } from '@/features/quests'
import { useSectionHotkeys } from '@/hooks/use-section-hotkeys'

export const Site = () => {
  useSectionHotkeys(nav)

  return (
    <>
      <Starfield />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border-4 focus:border-ink focus:bg-accent focus:px-4 focus:py-2 focus:font-pixel focus:text-on-accent"
      >
        {ui.skipToContent}
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <QuestsSection />
      </main>
      <Footer />
    </>
  )
}
