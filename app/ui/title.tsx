'use client';
import useScrollHandler from "./hooks/useScrollHandler"

export default function Title() {
  const scrollPosition = useScrollHandler();
  const translateY = Math.min(scrollPosition, 200); // limit the translation
  const opacity = Math.max(1 - scrollPosition / 200, 0); // fade out effect
  return (
    <h1 className="font-bold font-mono text-7xl text-lightblue hero-title mt-4"
    style={{ transform: `translateY(${translateY}px)`, opacity: opacity,}}>Leo Sharif</h1>
  );  
};