import Image from "next/image";
import heroImage from "@/public/bg-truesize.png"
import lionSeparator from "@/public/lion-foreground2.png"
import Title from "./ui/title";
import BondUniversityLogo from "@/public/bondlogo.svg";
import ProfileImage from "@/public/profilepic.jpeg";
import Algothon from "@/public/algothon.png";
import dashboard from "@/public/dashboard-app.webp"

export default function Home() {
  return (
    <main id="homepage">
      <section id="hero-module" className="relative w-full h-screen">
        <div className="absolute inset-0">
          <Image src={heroImage} layout="fill" alt="hero background image of savannah with river" className="object-cover"/>
        </div>
        <div className="absolute inset-0 z-10">
          <Image src={lionSeparator} layout="fill" alt="lion separator" className="object-cover" />
        </div>
        <div className="relative z-10 flex justify-center h-full ">
          <Title />
        </div>
      </section>

      <section id="about-me" className="flex flex-col items-center bg-darknavy p-12 text-center">
        <div className="bg-cream rounded p-8">
          <p className="text-lg font-semibold mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, rem. </p>
          <p className="text-lg font-semibold mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, rem. </p>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <Image src={BondUniversityLogo} width={100} height={50} alt="Bond University logo" />
            <Image src={ProfileImage} width={150} height={150} className="rounded-lg" alt="Profile picture of me" />
          </div>
        </div>
      </section>

      <section id="showcase" className="bg-cream">

        <div className="py-12 px-72">
          <div className="flex justify-between gap-x-16">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-xl ">Susquehanna x UNSW Algothon</h1>
              <p className="">Building a sophisticated trading algorithm designed to maximize profits in SIG's simulated trading environment.</p>
            </div>
            <div className="flex-shrink-0">
              <Image src={Algothon} width={475} height={250} className="rounded-lg" alt="Profile picture of me" />
            </div>
          </div>
        </div>

        <div className="py-12 px-72">
          <div className="flex justify-between gap-x-16">
            <div className="flex-shrink-0">
              <Image src={dashboard} width={475} height={250} className="rounded-lg" alt="Profile picture of me" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-xl ">Nextjs Full-Stack Invoice Dashboard</h1>
              <p className="">Built a dashboard with sql integration, features include authentication & authorizaiton.</p>
            </div>
          </div>
        </div>

        <div className="py-12 px-72">
          <div className="flex justify-between gap-x-16">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-xl ">Susquehanna x UNSW Algothon</h1>
              <p className="">Building a sophisticated trading algorithm designed to maximize profits in SIG's simulated trading environment.</p>
            </div>
            <div className="flex-shrink-0">
              <Image src={Algothon} width={475} height={250} className="rounded-lg" alt="Profile picture of me" />
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
