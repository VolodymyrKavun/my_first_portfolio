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
      <motion.div className="about-me__expression" variants={variants}>
        <p className="about-me__expression--text">
          My focus is to constantly develop <br /> and move forward
        </p>
        <hr className="about-me__expression--line" />
      </motion.div>
      <div className="about-me__container">
        <motion.div className="about-me__info-container" variants={variants}>
          <motion.h3
            className="about-me__info-container--title"
            whileHover={{ color: "var(--second-color)" }}
          >
            Like working in a team!
          </motion.h3>
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
            />
          </figure>
        </motion.div>
        <motion.div div className="about-me__skills" variants={variants}>
          <motion.h3
            className="about-me__skills--title"
            whileHover={{ color: "var(--second-color)" }}
          >
            My skills
          </motion.h3>
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
                    alt={item.title}
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;

// ! before

//  <motion.div
//       className="services"
//       variants={variants}
//       initial="initial"
//       // whileInView="animate"
//       ref={ref}
//       // animate={isInView ? "animate" : "initial"}
//       animate={isInView && "animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p className="textExpressionServices">
//           My focus is to constantly develop <br /> and move forward
//         </p>
//         <hr className="lineExpressionServices" />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <div className="imgWrapper">
//             <Image
//               src={"/people.webp"}
//               alt="People Services"
//               fill={true}
//               className="img"
//             />
//           </div>
//           <h1 className="titleServices">
//             <motion.b whileHover={{ color: "var(--second-color)" }}>
//               Unique
//             </motion.b>{" "}
//             Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1 className="titleServices">
//             <motion.b whileHover={{ color: "var(--second-color)" }}>
//               For You
//             </motion.b>{" "}
//             Business.
//           </h1>
//           <button className="buttonServices">WHAT WE DO?</button>
//         </div>
//       </motion.div>
//       <motion.div div className="listContainer" variants={variants}>
//         <ul className="list">
//           {servicesData.map((item) => (
//             <motion.li
//               className="box"
//               key={item.id}
//               whileHover={{ backgroundColor: "lightgray", color: "black" }}
//             >
//               <h2 className="itemTitleServices">{item.title}</h2>
//               <p className="itemDescriptionServices">{item.description}</p>
//               <button className="buttonListContainer">Go</button>
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>
//     </motion.div>
