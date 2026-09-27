import Link from 'next/link';
import { cards } from '@/app/content/portfolio';

export default function SectionPage({ current, title, intro, children }: {
  current: typeof cards[number]['href']; title: string; intro?: string; children: React.ReactNode;
}) {
  const card = cards.find(item => item.href === current)!;
  return (
    <main id="main-content" className="section-page">
      <Link href="/" className="back-link">← Back to the hand</Link>
      <div className="section-heading">
        <span className="eyebrow section-kicker"><span aria-hidden="true">{card.suit}</span> {card.label}</span>
        <h1>{title}</h1>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {children}
      <nav className="section-navigation" aria-label="Portfolio sections">
        {cards.map(item => <Link key={item.href} href={item.href} aria-current={item.href === current ? 'page' : undefined}>
          <span aria-hidden="true">{item.suit}</span> {item.label}
        </Link>)}
      </nav>
    </main>
  );
}
