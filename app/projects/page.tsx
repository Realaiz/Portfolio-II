import type { Metadata } from 'next';
import Image from 'next/image';
import SectionPage from '@/app/components/section-page';
import { projects } from '@/app/content/portfolio';

export const metadata: Metadata = { title: 'Projects', description: 'Selected projects across trading algorithms, full-stack development and mathematical modelling.' };

export default function Projects() {
  return (
    <SectionPage current="/projects" title="A few things I’ve worked on." intro="Ideas at the intersection of numbers, markets and code.">
      <div className="projects-list">
        {projects.map((project, index) => <article key={project.title} className="project">
          <div className="project-copy"><span className="eyebrow">0{index + 1} / {project.category}</span><h2>{project.title}</h2><p>{project.description}</p></div>
          <div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 90vw, 420px" /></div>
        </article>)}
      </div>
    </SectionPage>
  );
}
