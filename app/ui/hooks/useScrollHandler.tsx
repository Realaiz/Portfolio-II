'use client';

import { useState, useEffect } from "react";

export default function useScrollHandler() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const element = document.querySelector("main")

    const handleScroll = () => {
      setScrollPosition(element.scrollTop);
    };

    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []); //dependancy telling it when to run

  return scrollPosition;
};