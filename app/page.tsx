import Image from 'next/image';
import heroImage from '../public/hero-desktop.jpg'
import lionBanner from '../public/lionpride.png'
export default function Home() {
  return (
    <main>
      <Image src={heroImage} sizes="100vw" alt="Hero image of blacksmith at a forge with forest scenery"/>
      <Image src={lionBanner} sizes="100vw" alt="static image of a pride of lions"/>
    </main>
  );
}
