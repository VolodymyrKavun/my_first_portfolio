import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import "./singleSection.scss";

const SingleSection = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    // <section>
    <article className="single-section">
      <figure className="single-section__wrapper-img" ref={ref}>
        <Image
          src={item.img}
          alt="Image Portfolio"
          fill={true}
          className="single-section__image"
          loading="lazy"
          title={`Image ${item.title}`}
        />
      </figure>
      <motion.div className="single-section__text--container" style={{ y: y }}>
        <h3 className="single-section__text--title">{item.title}</h3>
        <p className="single-section__text--description">{item.description}</p>
        <figure className="single-section__buttons--wrapper">
          <a
            href={item.site}
            className="single-section__buttons--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit Website</span>
            <Image
              src={"/icon_external-link.svg"}
              alt="Website link"
              width={24}
              height={24}
              className="single-section__buttons--img"
              loading="lazy"
              title="Website link"
            />
          </a>
          <a
            href={item.code}
            className="single-section__buttons--link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Source Code</span>
            <Image
              src={"/icon_github-link.svg"}
              alt="GitHub code link"
              width={24}
              height={24}
              className="single-section__buttons--img"
              loading="lazy"
              title="GitHub code link"
            />
          </a>
        </figure>
      </motion.div>
    </article>
    // </section>
  );
};

export default SingleSection;
