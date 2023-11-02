// import TestAnimation from "@/components/forLayout/TestAnimation/TestAnimation";
import Hero from "@/components/hero/Hero";
import "./page.module.scss";
import Navbar from "@/components/forLayout/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import AboutMe from "@/components/aboutMe/AboutMe";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";
import Footer from "@/components/forLayout/footer/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      {/* <section id="Home"> */}
      <Hero />
      {/* </section> */}

      {/* <section id="AboutMe"> */}
      <Parallax type="aboutMe" />
      {/* </section> */}
      {/* <section> */}
      <AboutMe />
      {/* </section> */}
      {/* <section id="Portfolio"> */}
      <Parallax type="portfolio" />
      {/* </section> */}
      <Portfolio />
      {/* <section id="Contact"> */}
      <Contact />
      {/* </section> */}
      <Footer />
    </>
  );
}
