"use client";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolio.data";
import { useRef } from "react";
import SingleSection from "../singleSection/SingleSection";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio__progress">
        <h4 className="portfolio__title">Featured Works</h4>
        <motion.div
          style={{ scaleX: scaleX }}
          className="portfolio__progress-bar"
        ></motion.div>
      </div>
      <ul>
        {portfolioData.map((item) => (
          <li key={item.id}>
            <SingleSection item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
