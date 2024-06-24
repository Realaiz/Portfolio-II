import BottomNavLinks from "./bottomnav-links";

export default function BottomNav() {
  return (
    <div className="relative bottom-0 w-full z-10 bg-darknavy">
      <div className="mx-auto max-w-[2024px] h-full px-0 md:px-12 lg:px-11 xl:px-16">
        <div className="grid h-24 grid-cols-2 items-center justify-between gap-24 text-white ">
          <BottomNavLinks />
          <div className="flex flex-col justify-end">
            <p>Be not buried in obscurity.</p>
            <p>Leo Sharif</p>
          </div>
        </div>
      </div>
    </div>
  );
}