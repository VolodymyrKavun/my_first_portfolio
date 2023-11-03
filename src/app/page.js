// import TestAnimation from "@/components/forLayout/TestAnimation/TestAnimation";
// import Hero from "@/components/hero/Hero";
import "./page.module.scss";
// import Navbar from "@/components/forLayout/navbar/Navbar";
// import Parallax from "@/components/parallax/Parallax";
// import AboutMe from "@/components/aboutMe/AboutMe";
// import Portfolio from "@/components/portfolio/Portfolio";
// import Contact from "@/components/contact/Contact";
// import Cursor from "@/components/cursor/Cursor";
// import Footer from "@/components/forLayout/footer/Footer";
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
      {/* <Cursor /> */}
      <DynamicCursor />
      {/* <Navbar /> */}
      <DynamicNavbar />
      {/* <section id="Home"> */}
      {/* <Hero /> */}
      <DynamicHero />
      {/* </section> */}

      {/* <section id="AboutMe"> */}
      {/* <Parallax type="aboutMe" /> */}
      <DynamicParallax type="aboutMe" />
      {/* </section> */}
      {/* <section> */}
      {/* <AboutMe /> */}
      <DynamicAboutMe />
      {/* </section> */}
      {/* <section id="Portfolio"> */}
      {/* <Parallax type="portfolio" /> */}
      <DynamicParallax type="portfolio" />
      {/* </section> */}
      {/* <Portfolio /> */}
      <DynamicPortfolio />
      {/* <section id="Contact"> */}
      {/* <Contact /> */}
      <DynamicContact />
      {/* </section> */}
      {/* <Footer /> */}
      <DynamicFooter />
    </>
  );
}
