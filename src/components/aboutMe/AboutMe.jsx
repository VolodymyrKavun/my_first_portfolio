"use client";
import Image from "next/image";
import "./aboutMe.scss";
import { motion, useInView } from "framer-motion";
import { aboutMeData } from "@/data/aboutMe.data";
import { useRef } from "react";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const AboutMe = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      className="about-me"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.article className="about-me__expression" variants={variants}>
        <p className="about-me__expression--text">
          My focus is to constantly develop <br /> and move forward
        </p>
        <hr className="about-me__expression--line" />
      </motion.article>
      <section className="about-me__container">
        <motion.article
          className="about-me__info-container"
          variants={variants}
        >
          <motion.h4
            className="about-me__info-container--title"
            whileHover={{ color: "var(--second-color)" }}
          >
            I love working in a team!
          </motion.h4>
          <p className="about-me__info-container--text">
            ⚡ Beyond project commitments, I am dedicated to enhancing my skills
            and staying abreast of the latest trends in web development. I
            firmly believe that continuous learning is the cornerstone of
            success in this dynamic field.
          </p>
          <p className="about-me__info-container--text">
            ⚡ I take pleasure in crafting visually captivating and functional
            web applications that prioritize the optimal user experience. My
            ability to work seamlessly within a team, coupled with a perpetual
            openness to embracing new technologies and approaches, drives my
            passion for excellence.
          </p>
          <figure className="about-me__info-container--img-wrapper">
            <Image
              src={"/people.webp"}
              alt="Working team"
              fill={true}
              className="about-me__info-container--img"
              loading="lazy"
              title="Working team"
              sizes="(min-width: 1040px) 300px, (min-width: 780px) 250px, 200px"
            />
          </figure>
        </motion.article>
        <motion.article div className="about-me__skills" variants={variants}>
          <motion.h4
            className="about-me__skills--title"
            whileHover={{ color: "var(--second-color)" }}
          >
            My skills
          </motion.h4>
          <figure className="about-me__skills--img-wrapper">
            <Image
              src={"/my-photo.webp"}
              alt="Working team"
              fill={true}
              className="about-me__skills--img"
              loading="lazy"
              title="Working team"
              sizes="(min-width: 1040px) 300px, (min-width: 780px) 250px, 200px"
            />
          </figure>
          <ul className="about-me__skills--list">
            {aboutMeData.map((item) => (
              <li key={item.id} className="about-me__skills--item">
                <motion.figure
                  whileHover={{ scale: 1.1 }}
                  className="about-me__item--wrapper-icon"
                >
                  <Image
                    className="about-me__item--icon"
                    src={item.icon}
                    alt={item.alt}
                    fill={true}
                    title={item.title}
                    loading="lazy"
                  />
                </motion.figure>
                <p className="about-me__item--text">
                  <em>{item.title}</em>
                </p>
              </li>
            ))}
          </ul>
        </motion.article>
      </section>
    </motion.section>
  );
};

export default AboutMe;
