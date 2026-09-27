import Link from 'next/link';
import ThemeSwitch from './theme-switch';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Leo Sharif — home">LS.</Link>
      <span className="header-note eyebrow">A little skill. A little curiosity.</span>
      <div className="header-actions">
        <Link className="text-link resume-shortcut" href="/resume">Résumé <span aria-hidden="true">↗</span></Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}
