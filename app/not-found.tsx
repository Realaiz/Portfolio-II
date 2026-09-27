import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="section-page not-found">
      <p className="eyebrow">404 / Not in this deck</p>
      <h1>A missing card.</h1>
      <p>This page doesn’t exist. Let’s get you back to the hand.</p>
      <Link className="primary-link" href="/">
        Back to the hand ↗
      </Link>
    </main>
  );
}
