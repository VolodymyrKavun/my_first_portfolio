"use client";
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={type === "aboutMe" ? "aboutMe" : "portfolio"}
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "aboutMe"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h3 style={{ y: yText }} className="parallax__title">
        {type === "aboutMe" ? "About Me" : "Portfolio"}
      </motion.h3>
      <motion.div className="parallax__mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "aboutMe" ? "/parallax/planets.png" : "/parallax/sun.png"
          })`,
        }}
        className="parallax__planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="parallax__stars"></motion.div>
    </section>
  );
};

export default Parallax;
