'use client';
import useScrollHandler from "./hooks/useScrollHandler"
import LogoAnimation from "./logo";

export default function Title() {
  const scrollPosition = useScrollHandler();
  const translateY = Math.min(scrollPosition, 200); // limit the translation
  const opacity = Math.max(1 - scrollPosition / 200, 0); // fade out effect
  return (
    <div className="absolute flex flex-col items-center top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3" >
      <LogoAnimation />  
      <h1 className="font-bold font-mono text-7xl text-lightblue hero-title mt-4"
      style={{ transform: `translateY(${translateY}px)`, opacity: opacity,}}>Leo Sharif</h1>
    </div>
  );  
};