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
      id={type === "aboutMe" ? "About Me" : "Portfolio"}
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "aboutMe"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h2 style={{ y: yText }} className="titleParralaxFirst">
        {type === "aboutMe" ? "About Me" : "Portfolio"}
      </motion.h2>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "aboutMe" ? "/parallax/planets.png" : "/parallax/sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </section>
  );
};

export default Parallax;
