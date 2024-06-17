'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';

const links = [
  {name: "Leo Sharif", href: "/"},
  {name: "Projects", href: "/projects"}
];

export default function NavLinks() {
  return (
    <div>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}