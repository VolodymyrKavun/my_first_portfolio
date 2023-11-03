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
      // whileInView="animate"
      ref={ref}
      // animate={isInView ? "animate" : "initial"}
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
            Like working in a team!
          </motion.h4>
          <p className="about-me__info-container--text">
            ⚡ In addition to working on projects, I always strive to improve my
            skills and stay updated with the latest trends in web development. I
            believe that continuous learning is the key to success in this
            field.
          </p>
          <p className="about-me__info-container--text">
            ⚡ I enjoy creating visually appealing and functional web
            applications that provide the best user experience. I can work in a
            team and am always open to learning new technologies and approaches.
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
