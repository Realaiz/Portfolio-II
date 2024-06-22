import Image from 'next/image';
import heroImage from '../public/hero-desktop.jpg'
import lionBanner from '../public/lionpride-nobg.png'
import LogoAnimation from './ui/logo';
import Title from './ui/title';


export default function Home() {
  return (
    <main>
      {/*Top hero section - mainly just cosmetic details and a splash */}
      <section>
        <div className="relative h-32 bg-darknavy blur-2xl z-10"></div>
        <div className="relative -mt-32 flex flex-col items-center">
          <Image src={heroImage} sizes="100vw" alt="Hero image of blacksmith at a forge with forest scenery" className="w-full h-auto"/>
          <div className="absolute flex flex-col items-center mt-48" >
            <LogoAnimation />
            <Title />
          </div>
        </div>
      </section>

      <div className="relative -mt-72 z-10">
        <Image src={lionBanner} sizes="100vw" alt="static image of a pride of lions" className="w-full h-auto" />
      </div>
      {/* Section section - intro & interests & mayb some projs */}
      <section className="flex flex-col items-center h-64 bg-darknavy text-white py-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-2">Hi I'm Leo, enjoyer of Math, Finance & CS with a Bsc Actuarial Science from Bond Uni.</h2>
          <p className="text-lg mb-4">I dabble in cooking, guitar, acting & tennis.</p>
          <div className="flex justify-center space-x-4 mb-4">
          </div>
        </div>
      </section>

    </main>
  );
}
