import Link from 'next/link';
//import { usePathname } from 'next/navigation';
const links = [
  {name: "Resume", href: "/Resume.pdf"},
  {name: "Projects", href: "/projects"},
];

export default function NavLinks() {
  return (
    <nav className="flex justify-center space-x-8">
      {links.map((link) => {
        return (
            <Link key={link.name} href={link.href}>
              <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </nav>
  );
}