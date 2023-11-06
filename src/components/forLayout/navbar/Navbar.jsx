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
      <Link href="/" className="navbar__logo--wrapper" title="Link to Home">
        <Image
          // src={"/logo-no-background.svg"}
          src={"/logo-transparent.svg"}
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
