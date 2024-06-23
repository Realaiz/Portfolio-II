import Image from 'next/image';
import heroImage from '../public/hero-desktop.jpg'
import lionBanner from '../public/lion-foreground.png'
import Title from './ui/title';

        {/*<div className="relative h-32 bg-darknavy blur-2xl z-10"/>*/}
export default function Home() {
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden perspective"> 
      {/*Top hero section - mainly just cosmetic details and a splash  divwrapper above and header below*/}
      <section className="relative h-full display-flex justify-center items-center preserve-3d -z-10">
        <Image src={heroImage} alt="Hero image of blacksmith at a forge with forest scenery" className="absolute h-full w-full object-cover -z-1 background-parallax"/>
        <Image src={lionBanner} alt="static image of a pride of lions" className="absolute h-full w-full object-cover -z-1 foreground-parallax mt-44" />
        <Title />
      </section>

      {/* Section section - intro & interests & mayb some projs */}
      <section className="text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque deserunt inventore eos molestiae, omnis quas beatae sint reprehenderit nihil, distinctio corrupti pariatur sequi. Saepe libero cumque quis repellat possimus, similique sit a voluptatem debitis? Quasi quod facilis excepturi voluptatem iusto alias autem quo commodi eius explicabo, quos hic ut sapiente sit harum, inventore pariatur dignissimos minus facere, aliquam incidunt itaque veritatis. Sed sunt excepturi sapiente quasi iure eos esse animi ipsa itaque ipsum eligendi dolores distinctio magni architecto nam porro ea culpa, ab nostrum placeat facere, cupiditate similique illum? Quia itaque reprehenderit laudantium et maiores repudiandae ab ex, voluptatum non inventore iste illum minima sint nostrum cum unde sed quo distinctio eius optio? Corporis praesentium ipsa repellendus reiciendis totam, tempora eligendi illo eos, corrupti similique deserunt perspiciatis nesciunt excepturi provident. Fugit molestiae facilis at nesciunt voluptates totam, in vero, veniam, minus debitis modi consequuntur neque hic vel aperiam doloribus esse amet nostrum commodi cupiditate labore. Quia omnis a voluptas voluptate deleniti labore mollitia veniam eaque. Cupiditate labore placeat similique quam dolor sed, quis deserunt quidem sapiente adipisci corrupti, optio porro commodi at atque non omnis obcaecati esse perspiciatis nostrum nobis facere sunt nam quos. Ad ipsam quia architecto tenetur, incidunt minus maxime exercitationem, quisquam fugit soluta facere eaque atque perferendis temporibus dolorum totam enim accusantium neque veniam dignissimos magni explicabo commodi! Fugit accusantium non mollitia placeat quam eaque rerum porro cumque sequi eos explicabo esse libero maxime alias doloribus exercitationem quas ab, quod animi fuga. Cum amet mollitia tempore. Doloremque saepe possimus veritatis voluptates, ab autem labore similique libero expedita porro quis rerum repellendus, quod quam quaerat tempore pariatur sequi unde. Debitis atque quisquam modi. Optio, aspernatur quidem, sit possimus pariatur consequatur nulla facilis laudantium, tempora natus asperiores non voluptate in tenetur temporibus nisi beatae odio! Illo officia eum earum? Itaque iusto voluptatibus sit ex incidunt, ea ratione, fugit id aliquam adipisci repellendus facilis laudantium. Sint, expedita ipsa! Sequi, provident blanditiis repudiandae laudantium dolorem ipsa odio numquam pariatur esse labore facilis doloribus sit aliquam earum. Iste quas beatae repellat dolore quae ullam porro laudantium quo nam aliquid consequuntur ea amet harum, cupiditate debitis nisi, eaque, id aut suscipit! Nisi!</h1>
      </section>

    </main>
  );
}
