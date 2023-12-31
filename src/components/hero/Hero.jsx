"use client";

import Image from "next/image";
import "./hero.scss";
import { motion } from "framer-motion";
import SocialLinks from "../socialLinks/SocialLinks";
import Link from "next/link";

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.article
        className="hero__text--container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={textVariants} className="hero__title--main">
          Volodymyr Kavun
        </motion.h1>
        <motion.h2 variants={textVariants} className="hero__title--second">
          Front-End Developer
        </motion.h2>

        <SocialLinks />

        <motion.figure
          variants={textVariants}
          animate="scrollButton"
          className="hero__scroll-icon-wrapper"
        >
          <Link href="#aboutMe">
            <Image
              src={"/scroll.webp"}
              alt="Scroll down"
              fill={true}
              className="hero__scroll-icon--img"
              loading="lazy"
              title="Button scroll down"
              sizes="(min-width: 1300px) 50px, (min-width: 780px) 30px, 24px"
            />
          </Link>
        </motion.figure>
      </motion.article>

      <figure className="hero__img-container">
        <a
          href="/Volodymyr_Kavun_Frontend Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="My Resume"
          className="hero__img-container--btn-resume"
        >
          Resume
        </a>
        <Image
          className="hero__img-container--image"
          src={"/hero-image.webp"}
          alt="Hero image"
          fill={true}
          title="Image hero"
          sizes="(min-width: 780px) 411px, 320px"
          priority={true}
        />
      </figure>
    </section>
  );
};

export default Hero;
