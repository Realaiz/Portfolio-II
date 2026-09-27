import { suitSymbols } from '@/app/content/suits';
import type { Metadata } from 'next';
import SectionPage from '@/app/components/section-page';
import { interests } from '@/app/content/portfolio';

export const metadata: Metadata = {
  title: 'Off duty',
  description: 'Beyond the numbers: food, guitar, acting and tennis.',
};

export default function OffDuty() {
  return (
    <SectionPage
      current="/off-duty"
      title="More than the numbers."
      intro="A few things I make time for away from the screen."
    >
      <div className="interests-list">
        {interests.map((interest) => (
          <section className="interest" key={interest.name}>
            <span aria-hidden="true" className="interest-suit">
              {suitSymbols[interest.suit]}
            </span>
            <div>
              <h2>{interest.name}</h2>
              <p>{interest.detail}</p>
            </div>
          </section>
        ))}
      </div>
    </SectionPage>
  );
}
