import { profile } from '@/content/profile'
import { ui } from '@/content/site'

export const Footer = () => (
  <footer className="px-5 pb-10 text-center text-sm text-muted">
    <small>
      © {ui.copyrightYear} {profile.name}. {ui.footerHint}
    </small>
  </footer>
)
