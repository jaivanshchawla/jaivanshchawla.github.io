import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import GooeyNav from "../funky/GooeyNav";
import RippleButton from "../ui/ripple-button";
import { CoolMode } from "../ui/coolmode";
import { Spotlight } from "./spotlight";

const gooeyNavItems = [
  { label: "GitHub", href: "https://github.com/jaivanshchawla" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jaivanshchawla" },
  { label: "Email", href: "mailto:jaivanshchawla@example.com" },
  { label: "Instagram", href: "https://twitter.com/jaivanshchawla" },
];

const Hero = () => {
  const introRef = useRef(null);

  useEffect(() => {
    if (introRef.current) {
      gsap.fromTo(
        introRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power3.out",
          stagger: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Spotlight: now rendered first, behind everything */}
      <Spotlight />

      {/* Background SVG */}
      <img
        src="/nordtech/assets/header-gradient.svg"
        alt="Header Gradient Background"
        className={styles.headerGradient}
        aria-hidden="true"
      />

      {/* Intro Text */}
      <div className={`${styles.introText} relative z-20`} ref={introRef}>
        <span className={styles.subtext}>IT&apos;S ME,</span>
        <h1 className={styles.name}>JAIVANSH CHAWLA</h1>
        <p className={`${styles.subheading} mt-4`}>
          ENGINEER - CAR NERD - BATMAN - HUMAN
        </p>
      </div>

      {/* GooeyNav and Resume Button */}
      <div className={`${styles.gooeyNavWrapper} relative z-10`}>
        <GooeyNav items={gooeyNavItems} />
      </div>
      <div className="mt-12 flex justify-center relative z-20">
        <CoolMode>
          <RippleButton>RESUME</RippleButton>
        </CoolMode>
      </div>
    </section>
  );
};

export default Hero;
