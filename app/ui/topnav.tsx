'use client'

import NavLinks from "./nav-links";
import useScrollHandler from "./hooks/useScrollHandler"

export default function TopNav() {
  const scrolled = useScrollHandler(50);
  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'}`}>
      <p>{scrolled ? 'Scrolled' : 'Not Scrolled'}</p> {/* Visual indicator */}
      <NavLinks />
    </div>
  );
}