'use client'

import NavLinks from "./nav-links";
import useScrollHandler from "./hooks/useScrollHandler"

export default function TopNav() {
  const scrolled = useScrollHandler();
  return (
    <div className={`flex w-full items-center justify-around h-24 px-4 fixed top-0 z-50 transition-colors duration-500 text-2xl font-semibold ${scrolled ? 'bg-darknavy text-white' : 'text-white'}`}>
      <NavLinks />
    </div>
  );
}