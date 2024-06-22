'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';

const links = [
  {name: "Leo Sharif", href: "/"},
  {name: "Projects", href: "/projects"}
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <div className="w-48">
            <Link key={link.name} href={link.href}>
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}