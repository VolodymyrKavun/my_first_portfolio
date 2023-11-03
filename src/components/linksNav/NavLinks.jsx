"use client";
import { navData } from "@/data/navigation.data";
import { motion } from "framer-motion";
import "./navLinks.scss";

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

const socialsVariants = {
  visible: (index) => ({ opacity: 1, transition: { delay: index * 0.5 } }),
  hidden: { opacity: 0 },
};

// const itemVariants = {
//   open: {
//     // y: 0,
//     opacity: 1,
//   },
//   closed: {
//     // y: 50,
//     opacity: 0,
//   },
// };

const NavLinks = () => {
  return (
    <motion.ul
      className="nav-links__list"
      variants={socialsVariants}
      initial="hidden"
      animate="visible"
    >
      {navData.map((item, index) => (
        <motion.li
          key={item.id}
          variants={socialsVariants}
          custom={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="nav-links__item"
        >
          <a href={`#${item.link}`} title={item.alt}>
            {item.title}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
