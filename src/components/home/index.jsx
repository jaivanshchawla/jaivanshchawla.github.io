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
  { label: "Email", href: "mailto:jaivanshmuj@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/__coolguyjc__/" },
];

const Hero = () => {
  const introRef = useRef(null);

  useEffect(() => {
    if (introRef.current) {
      const children = introRef.current.children;

      // Animate all except the subheading (fade + move up)
      gsap.fromTo(
        Array.from(children).filter(
          (el) => !el.classList.contains(styles.subheading)
        ),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 5,
          ease: "power3.out",
          stagger: 0.3,
        }
      );

      // Animate the subheading (fade + blur + color change)
      const subheadingEl = introRef.current.querySelector(`.${styles.subheading}`);
      if (subheadingEl) {
        gsap.fromTo(
          subheadingEl,
          {
            opacity: 0,
            filter: "blur(20px)",
            color: "#000000",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            color: "#C5A3FF",
            duration: 5,
            ease: "power3.out",
          }
        );
      }
    }
  }, []);

  // Handler to open the resume PDF in a new tab
  const handleResumeClick = () => {
    window.open('/assets/resume.pdf', '_blank');
  };

  return (
    <section className={styles.hero}>
      {/* Spotlight: rendered first, behind everything */}
      <Spotlight />

      {/* Background SVG */}
      <img
        src="/assets/header-gradient.svg"
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
          <RippleButton onClick={handleResumeClick}>RESUME</RippleButton>
        </CoolMode>
      </div>
    </section>
  );
};

export default Hero;
