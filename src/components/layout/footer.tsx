import { profile } from '@/content/profile'
import { ui } from '@/content/site'
import { useT } from '@/lib/locale'

export const Footer = () => {
  const t = useT()

  return (
    <footer className="px-5 pb-10 text-center text-sm text-muted">
      <small>
        © {ui.copyrightYear} {profile.name}. {t(ui.footerHint)}{' '}
        <a href="?intro=1" className="underline">
          {t(ui.playIntro)}
        </a>
      </small>
    </footer>
  )
}
