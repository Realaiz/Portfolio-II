import { portfolio } from '@/app/content/portfolio';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="eyebrow">Personal portfolio</span>
      <span className="footer-suits" aria-hidden="true">♠ ♥ ♣ ♦</span>
      <nav aria-label="Elsewhere">
        {portfolio.social.map(link => <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}
      </nav>
    </footer>
  );
}
