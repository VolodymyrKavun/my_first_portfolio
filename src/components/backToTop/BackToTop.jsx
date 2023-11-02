"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./backToTop.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleIsVisible);

    return () => {
      window.removeEventListener("scroll", toggleIsVisible);
    };
  }, []);

  return (
    <>
      <button
        id="backToTop"
        type="button"
        onClick={scrollToTop}
        className={isVisible ? "visible" : "not-visible"}
        aria-label="Button to the top"
      >
        <Image
          src="/icon_double-arrow.svg"
          alt="Button to the top"
          className="visible__icon"
          fill={true}
          loading="lazy"
          title="Button to the top"
        />
      </button>
    </>
  );
};

export default BackToTop;
