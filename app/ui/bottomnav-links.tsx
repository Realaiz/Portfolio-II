import Link from 'next/link';
import linkedinIcon from '@/public/linkedin.png';
import githubIcon from '@/public/github.png';
import resumeIcon from '@/public/resume.png';
import Image from 'next/image';

const links = [
  {name: 'linkedin', href: "https://www.linkedin.com/in/leo-sharif-1a6866193/", icon: linkedinIcon},
  {name: 'github', href: "https://github.com/Realaiz", icon: githubIcon},
  {name: 'resume', href: "/resume", icon: resumeIcon},  
];

export default function BottomNavLinks() {
  return (
  <nav className="flex justify-center space-x-8">
    {links.map((link) => {
      return (
        <Link key={link.name} href={link.href}>
          <Image src={link.icon} width={32} height={32} alt={`${link.name} icon`} />
        </Link>
      );
    })}
  </nav>
  );
}