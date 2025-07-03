import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader/index";
import Hero from "./components/home";
import "./App.css";
import ClickSpark from "./components/ui/ClickSpark";
import { NavbarDemo } from "./components/navbar/navdemo";

import { LampContainer } from "./components/ui/lamp";
import TiltedCard from "./components/card/TiltedCard";
import { GlowEffect } from "./components/card/gloweffect";
import { ExpandableCardDemo } from "./components/expandcard/standard";
import { ExpandableCardGrid } from "./components/expandcard/grid";
import { Manipal } from "./components/motion-primitives/MUJ";
import { Presidium } from "./components/motion-primitives/PRES";
import { Tibraze } from "./components/motion-primitives/differ";
import CaseStudyCard from "./components/card/casecard";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const pendingScroll = useRef(null);

  const handlePreloaderExitComplete = () => {
    setShowPreloader(false);
  };

  useEffect(() => {
    if (showPreloader) {
      const timer = setTimeout(() => setShowPreloader(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showPreloader]);

  const MainContent = () => (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div id="home-section">
        <Hero />
      </div>

      {/* ABOUT ME Section */}
      <div id="about-section">
        <LampContainer>
          <h1 className="text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text">
            ABOUT ME
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 px-6 pt-12">
            <div className="relative w-[300px] h-[300px] rounded-xl">
              <GlowEffect
                colors={[
                  "#0894FF", "#4B9DFF", "#8F92FF", "#A86EFF",
                  "#C959DD", "#FF2EBA", "#FF2E54", "#FF5B2E",
                  "#FF9004", "#FFC300", "#FFDD7A", "#E9C0FF",
                  "#B3B3FF", "#8FCFFF", "#42C5FF", "#0894FF",
                ]}
                mode="rotate"
                blur="medium"
                className="absolute inset-0 rounded-xl"
              />
              <div className="relative z-10">
                <TiltedCard
                  imageSrc="/nordtech/assets/avatar.jpg"
                  altText="User Avatar"
                  captionText=""
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
            </div>
            {/* Bio */}
            <div className="meinfo max-w-2xl text-slate-300 text-justify">
              <p className="leading-relaxed text-[16px]">
                I’ve been fascinated by computers, electronics, microcontrollers,
                robotics, IoT devices, and sensors for as long as I can remember.
                Currently pursuing a Mechatronics Engineering (Honours) degree at
                The University of Sydney, I specialize in embedded systems and
                have hands-on experience with a diverse set of programming
                languages, including Python, C, C++, and JavaScript, alongside
                exposure to C#, Node.js, and Rust. My skills extend beyond
                coding—I’m proficient in CAD (SolidWorks), PCB design (KiCad,
                EasyEDA), and technical documentation (LaTeX, Markdown), honed
                through student clubs, coursework, and personal projects. I thrive
                in collaborative environments, leading an electrical engineering
                team at university and contributing to three student initiatives
                focused on electronics and robotics. While my foundation is in
                mechatronics, I’m passionate about bridging software, electronics,
                and innovative technologies. My goal is to leverage platforms like
                this to learn, innovate, and connect with inspiring professionals
                while working on impactful engineering challenges.
              </p>
            </div>
          </div>
        </LampContainer>
      </div>

      {/* Academic Profile */}
      <h1
        id="education"
        className="text-center mt-20 text-4xl font-medium tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text"
      >
        ACADEMIC PROFILE
      </h1>

      <div className="mt-8 flex justify-center">
        <Manipal />
      </div>

      <div className="mt-8 flex justify-center">
        <Presidium />
      </div>

      {/* Experience Section */}
      <div id="experience-section">
        <h1 className="text-center mt-20 text-4xl font-medium tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text">
          EXPERIENCE
        </h1>
        <div className="mt-12 px-4">
          <ExpandableCardDemo />
        </div>
      </div>

      {/* More Highlights */}
      <div id="highlights-section">
        <h2 className="text-center mt-10 text-3xl font-semibold tracking-tight text-slate-200">
          More Highlights
        </h2>
        <div className="mt-8 px-4">
          <ExpandableCardGrid />
        </div>
      </div>

      {/* Tibraze and CaseStudyCard side-by-side */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-8 px-4">
        <Tibraze />
        <CaseStudyCard
          title="Smart Energy Grid"
          category="Capstone Project"
          image="/assets/casestudy1.jpg"
          logo="/assets/magician.png"
          link="https://example.com/case-study"
          type="content"
        />
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-8 bg-transparent relative z-10">
        <p className="text-white/60 text-sm bg-transparent">
          &copy; {new Date().getFullYear()} jaivanshchawla. All rights reserved.
        </p>
      </footer>
    </div>
  );

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#000",
      }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Navbar included globally */}
        <NavbarDemo />

        <AnimatePresence onExitComplete={handlePreloaderExitComplete}>
          {showPreloader && <Preloader key="preloader" />}
        </AnimatePresence>
        {!showPreloader && <MainContent />}
      </ClickSpark>
    </div>
  );
}

export default App;
