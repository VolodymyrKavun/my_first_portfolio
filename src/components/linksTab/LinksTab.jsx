"use client";
import Image from "next/image";
import "./linksTab.scss";
import { navTabData } from "@/data/navTab.data";
import { motion } from "framer-motion";

const socialsVariants = {
  visible: (index) => ({ opacity: 1, transition: { delay: index * 0.5 } }),
  hidden: { opacity: 0 },
};

const LinksTab = () => {
  return (
    <motion.ul
      className="links-tab"
      initial="hidden"
      animate="visible"
      variants={socialsVariants}
    >
      {navTabData.map((item, index) => (
        <motion.li
          key={item.id}
          className="links-tab__item"
          variants={socialsVariants}
          custom={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href={`#${item.link}`}
            className="links-tab__item--link"
            title={item.alt}
          >
            <figure className="links-tab__item--icon-wrap">
              <Image
                src={item.icon}
                alt={item.alt}
                fill={true}
                className="links-tab__item--icon"
                loading="lazy"
                title={item.title}
              />
            </figure>
            <p className="links-tab__item--title">{item.title}</p>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default LinksTab;
