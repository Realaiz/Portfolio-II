import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionPage from '@/app/components/section-page';
import { portfolio } from '@/app/content/portfolio';

export const metadata: Metadata = {
  title: 'About',
  description:
    'A little about Leo Sharif, an enjoyer of mathematics, ' +
    'finance and computer science.',
};

export default function About() {
  return (
    <SectionPage current="/about" title="Hey, I’m Leo.">
      <div className="about-grid">
        <div className="about-copy">
          <p style={{whiteSpace: 'pre-line'}}>{portfolio.introduction}</p>
          <p>
            I’m a foodie, and I like guitar, acting and tennis.
          </p>
          <Link className="text-link" href="/off-duty">
            Why did i make a page about hobbies lol? ↗
          </Link>
        </div>
        <Image
          className="portrait"
          src="/profilepic.jpeg"
          width={440}
          height={440}
          alt="Leo Sharif at his graduation"
          sizes="(max-width: 700px) 80vw, 320px"
        />
      </div>
    </SectionPage>
  );
}
