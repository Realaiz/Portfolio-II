'use client';
import NavLinks from './nav-links';
import Image from 'next/image';
import LogoIcon from '@/public/deepbluelogo.png'
import Link from 'next/link';
import useScrollHandler from './hooks/useScrollHandler';
import clsx from 'clsx'


export default function TopNav() {
  const scrollPosition = useScrollHandler();
  const isScrolled = scrollPosition > 50;
  return (
    <div className="fixed top-0 left-0 w-full z-20">
      <div className={clsx("mx-auto max-w-[2024px] h-full px-0 md:px-12 lg:px-11 xl:px-16",{
        "bg-darknavy": !isScrolled,
        "bg-transparent": isScrolled,
      })}>
        <div className="grid h-24 grid-cols-2 items-center justify-between gap-24 text-white font-semibold text-2xl">
            <Link key="home" href="/" className="flex items-center justify-center">
              <Image src={LogoIcon} width={60} height={60} alt="Logo icon of planets circling quasar"></Image>
              <p>Leo Sharif</p>
            </Link>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}