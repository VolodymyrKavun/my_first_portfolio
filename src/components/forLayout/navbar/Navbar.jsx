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

const Navbar = () => {
  // ! Rendering logic based on width condition
  const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    const getWindowDimensions = useCallback(() => {
      const width = hasWindow ? window.innerWidth : null;
      return {
        width,
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

  return (
    <header className="navbar">
      <Link href="/" className="navbar__logo--wrapper" title="Link to Home">
        <Image
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
