'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { cards } from '@/app/content/portfolio';

export default function CardHand() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function openCard(event: MouseEvent<HTMLAnchorElement>, href: string) {
    // Preserve normal links: open in a new tab, copy address and no-JS navigation.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    event.preventDefault();
    if (timer.current) clearTimeout(timer.current);
    setSelected(href);
    timer.current = setTimeout(() => router.push(href), 580);
  }

  return (
    <nav className="hand" aria-label="Explore the portfolio">
      {cards.map((card, index) => (
        <Link href={card.href} key={card.href} className={`playing-card${selected === card.href ? ' is-flipped' : ''}`}
          aria-label={`${card.label} — ${card.caption.toLowerCase()}`} onClick={event => openCard(event, card.href)}
          style={{ '--card-x': `${[-98, -33, 33, 98][index]}%`, '--card-y': `${[34, 0, 0, 34][index]}px`, '--card-angle': `${[-18, -6, 6, 18][index]}deg`, '--card-order': index + 1 } as CSSProperties}>
          <span className="card-turn" aria-hidden="true">
            <span className="card-back">
              <span className="card-label">{card.label}</span><span className="card-seal">ls</span><span className="card-label inverted">{card.label}</span>
            </span>
            <span className="card-face">
              <span className="card-rank">{card.rank}<br />{card.suit}</span>
              <span className="card-suit">{card.suit}</span><span className="card-title">{card.label}</span><span className="card-caption">{card.caption}</span>
              <span className="card-rank inverted">{card.rank}<br />{card.suit}</span>
            </span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
