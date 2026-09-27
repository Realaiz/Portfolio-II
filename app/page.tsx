import CardHand from './components/card-hand';
import { portfolio } from './content/portfolio';

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <div className="home-intro">
        <p className="eyebrow disciplines">
          {portfolio.disciplines.join(' / ')}
        </p>
        <h1>{portfolio.name}.</h1>
        <p className="tagline">{portfolio.tagline}</p>
      </div>
      <CardHand />
      <p className="hand-hint">Pick a card :)</p>
    </main>
  );
}
