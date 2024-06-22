'use client';

import { useState, useEffect } from "react";

export default function useScrollHandler() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //dependancy telling it when to run

  return scrollPosition;
};