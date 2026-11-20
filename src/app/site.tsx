import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Starfield } from '@/components/layout/starfield'
import { nav, ui } from '@/content/site'
import { ContactSection } from '@/features/contact'
import { GuildSection } from '@/features/guild'
import { HeroSection } from '@/features/hero'
import { ItemsSection } from '@/features/items'
import { QuestsSection } from '@/features/quests'
import { useScrollHash } from '@/hooks/use-scroll-hash'
import { useSectionHotkeys } from '@/hooks/use-section-hotkeys'
import { useT } from '@/lib/locale'

export const Site = () => {
  useSectionHotkeys(nav)
  useScrollHash(nav)
  const t = useT()

  return (
    <>
      <Starfield />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:border-4 focus:border-ink focus:bg-accent focus:px-4 focus:py-2 focus:font-pixel focus:text-on-accent"
      >
        {t(ui.skipToContent)}
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="scroll-mt-36 lg:scroll-mt-20">
        <HeroSection />
        <QuestsSection />
        <ItemsSection />
        <GuildSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
