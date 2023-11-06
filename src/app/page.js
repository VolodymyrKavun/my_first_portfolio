import dynamic from "next/dynamic";

const DynamicCursor = dynamic(() => import("@/components/cursor/Cursor"));
const DynamicHero = dynamic(() => import("@/components/hero/Hero"));
const DynamicNavbar = dynamic(() =>
  import("@/components/forLayout/navbar/Navbar")
);
const DynamicParallax = dynamic(() => import("@/components/parallax/Parallax"));
const DynamicAboutMe = dynamic(() => import("@/components/aboutMe/AboutMe"));
const DynamicPortfolio = dynamic(() =>
  import("@/components/portfolio/Portfolio")
);
const DynamicContact = dynamic(() => import("@/components/contact/Contact"));
const DynamicFooter = dynamic(() =>
  import("@/components/forLayout/footer/Footer")
);

export default function Home() {
  return (
    <>
      <DynamicCursor />

      <DynamicNavbar />

      <DynamicHero />

      <DynamicParallax type="aboutMe" />

      <DynamicAboutMe />

      <DynamicParallax type="portfolio" />

      <DynamicPortfolio />

      <DynamicContact />

      <DynamicFooter />
    </>
  );
}
