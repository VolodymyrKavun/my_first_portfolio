import Image from "next/image";
import "./socialLinks.scss";
import { motion } from "framer-motion";
import { socialItems } from "@/data/social.data";

const socialsVariants = {
  visible: (index) => ({ opacity: 1, transition: { delay: index * 0.2 } }),
  hidden: { opacity: 0 },
};

const SocialLinks = () => {
  return (
    <motion.ul
      className="social-links"
      initial="hidden"
      animate="visible"
      variants={socialsVariants}
    >
      {socialItems.map((item, index) => (
        <motion.li
          key={item.id}
          className="social-links__img--wrapper"
          variants={socialsVariants}
          custom={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.alt}
          >
            <Image
              src={item.icon}
              alt={item.alt}
              fill={true}
              title={item.alt}
            />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SocialLinks;
