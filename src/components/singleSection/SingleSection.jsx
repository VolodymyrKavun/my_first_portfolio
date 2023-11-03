import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import "./singleSection.scss";

const SingleSection = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <article className="single-section">
      <figure className="single-section__wrapper-img" ref={ref}>
        <Image
          src={item.img}
          alt="Image Portfolio"
          fill={true}
          className="single-section__image"
          loading="lazy"
          title={`Image ${item.title}`}
          sizes="(min-width: 1000px) 397px, (min-width: 780px) calc(88vw - 466px), 300px"
        />
      </figure>
      <motion.article
        className="single-section__text--container"
        style={{ y: y }}
      >
        <h5 className="single-section__text--title">{item.title}</h5>
        <p className="single-section__text--description">{item.description}</p>
        <figure className="single-section__buttons--wrapper">
          <a
            href={item.site}
            className="single-section__buttons--link"
            target="_blank"
            rel="noopener noreferrer"
            title="Website link"
          >
            <span>Visit Website</span>
            <Image
              src={"/icon_external-link.svg"}
              alt="Website link icon"
              width={24}
              height={24}
              className="single-section__buttons--img"
              loading="lazy"
              title="Website link icon"
            />
          </a>
          <a
            href={item.code}
            className="single-section__buttons--link"
            target="_blank"
            rel="noopener noreferrer"
            title="Source code link"
          >
            <span>Source Code</span>
            <Image
              src={"/icon_github-link.svg"}
              alt="GitHub code link icon"
              width={24}
              height={24}
              className="single-section__buttons--img"
              loading="lazy"
              title="GitHub code link icon"
            />
          </a>
        </figure>
      </motion.article>
    </article>
  );
};

export default SingleSection;
