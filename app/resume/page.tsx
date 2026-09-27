import type { Metadata } from 'next';
import Link from 'next/link';
import SectionPage from '@/app/components/section-page';
import { portfolio } from '@/app/content/portfolio';

export const metadata: Metadata = { title: 'Résumé', description: 'Leo Sharif’s background and downloadable résumé.' };

export default function Resume() {
  return (
    <SectionPage current="/resume" title="A foundation in numbers." intro={portfolio.introduction}>
      <div className="resume-actions"><a className="primary-link" href={portfolio.resume} download="Leo-Sharif-Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a><a className="text-link" href={portfolio.resume} target="_blank" rel="noreferrer">View PDF <span aria-hidden="true">↗</span></a></div>
      <div className="resume-sections">
        <section className="resume-row"><h2 className="eyebrow">Education</h2><div><h3>{portfolio.education.qualification}</h3><p>{portfolio.education.institution}</p></div></section>
        <section className="resume-row"><h2 className="eyebrow">Areas of interest</h2><div><h3>Mathematics, finance & computer science</h3><p>From market simulations to building applications.</p><Link className="text-link" href="/projects">Explore selected projects ↗</Link></div></section>
      </div>
    </SectionPage>
  );
}
