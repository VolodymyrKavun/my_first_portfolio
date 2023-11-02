"use client";
import Image from "next/image";
import "./navbar.scss";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicNavLinks = dynamic(() => import("../../linksNav/NavLinks"), {
  ssr: false,
});
const DynamicLinksTab = dynamic(() => import("../../linksTab/LinksTab"), {
  ssr: false,
});

// ! Second example

// const useMediaQuery = (width) => {
//   const [targetReached, setTargetReached] = useState(false);

//   const updateTarget = useCallback((e) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`);
//     media.addListener(updateTarget);

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setTargetReached(true);
//     }

//     return () => media.removeListener(updateTarget);
//   }, [updateTarget, width]);

//   return targetReached;
// };

const Navbar = () => {
  // const variants = {
  //   visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  //   hidden: { opacity: 0 },
  // };

  // ---------------------

  // const variants = {
  //   visible: (index) => ({ opacity: 1, transition: { delay: index * 0.5 } }),
  //   hidden: { opacity: 0 },
  // };

  // ! first example

  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    const getWindowDimensions = useCallback(() => {
      const width = hasWindow ? window.innerWidth : null;
      // const height = hasWindow ? window.innerHeight : null;
      return {
        width,
        // height,
      };
    }, [hasWindow]);

    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }, [getWindowDimensions, hasWindow]);

    return windowDimensions;
  };

  const { width } = useWindowDimensions();
  const breakpoint = 767;

  // ! Second example

  // const isBreakpoint = useMediaQuery(767);

  return (
    <header className="navbar">
      <Link href="/" className="navbar__logo--wrapper">
        <Image
          src={"/logo-no-background.svg"}
          alt="Logo"
          fill={true}
          title="Logo"
        />
      </Link>
      {width <= breakpoint ? <DynamicLinksTab /> : <DynamicNavLinks />}
    </header>
  );
};

export default Navbar;

// ! Before

// "use client";
// import Image from "next/image";
// import "./navbar.scss";
// import { socialItems } from "@/data/social.data.js";
// import { motion } from "framer-motion";
// import Sidebar from "../sidebar/Sidebar";
// import Link from "next/link";

// const Navbar = () => {
//   // const variants = {
//   //   visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
//   //   hidden: { opacity: 0 },
//   // };

//   const variants = {
//     visible: (index) => ({ opacity: 1, transition: { delay: index * 0.5 } }),
//     hidden: { opacity: 0 },
//   };

//   return (
//     <header className="navbar">
//       {/* Sidebar */}
//       <Sidebar />
//       <div className="wrapper">
//         {/* <motion.h1
//           className="logo"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           Volodymyr Kavun
//         </motion.h1> */}
//         <Link href="/" className="logoWrapper">
//           <Image src={"/logo-no-background.svg"} alt="Logo" fill={true} />
//         </Link>
//         <motion.ul
//           className="socialLinks"
//           initial="hidden"
//           animate="visible"
//           variants={variants}
//         >
//           {socialItems.map((item, index) => (
//             <motion.li
//               key={item.id}
//               className="imgWrapperNavbar"
//               variants={variants}
//               custom={index}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a href={item.url} target="_blank" rel="noopener noreferrer">
//                 <Image src={item.icon} alt={item.alt} fill={true} />
//               </a>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
