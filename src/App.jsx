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
import IntegrationPills from "./components/ui/pills";
import Footer from "./components/footer/footer"; // ✅ NEW FOOTER IMPORT

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
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-12 px-6 pt-12">
      {/* Card container with margin-top on md to lower it */}
      <div className="relative w-[300px] h-[300px] rounded-xl mt-0 md:mt-0">
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
            imageSrc="/assets/jc.webp"
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
      {/* Text container aligned center vertically */}
      <div className="meinfo max-w-2xl text-slate-300 text-justify self-center">
        <p className="leading-relaxed text-[16px]">
          I'm that guy who gets genuinely excited about everything tech—and everything automotive. Currently crushing it with a 9.20 GPA in Computer Science & Engineering (AI & ML) at Manipal University Jaipur, but honestly? I'm addicted to learning whatever's next. One day I'm building AI/ML models with TensorFlow, the next I'm designing UIs in Figma, then architecting databases with MySQL, or even creating 3D art in Blender. When I'm not coding, you'll find me collecting Hot Wheels, following car releases, or obsessing over the newest phone drops and GPU reveals—I'm that person who knows the specs before they're officially announced. Python, C++, JavaScript, React, machine learning, full-stack dev, creative design—I collect skills like they're going out of style. As Student Placement Coordinator, I've learned that the best solutions come from thinking outside your comfort zone. I'm not trying to be a specialist—I'm trying to be that person who can jump into any project and figure out what needs to be done. Always hungry for the next challenge, the next framework, the next "wait, how does this work?" moment. Oh, and I've got German certification from eight years of studying it in school—just another random skill that might come in handy someday. I guess I'm just that relentless person who can't help but dive deep into every detail, overthink every solution, and push everything to absolute perfection—even when nobody asked for it. Let's build something incredible together.
        </p>
      </div>
    </div>
  </LampContainer>
</div>


      {/* Academic Profile */}
      <h1
        id="education"
        className="text-center mt-20 text-4xl font-medium tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-[#F6C5B7] to-[#E79C83] bg-clip-text"
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
        <h1 className="text-center mt-20 text-4xl font-medium tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-[#B3E5C5] to-[#4FAF7E] bg-clip-text">
          EXPERIENCE
        </h1>

        <div className="mt-12 px-4">
          <ExpandableCardDemo />
        </div>
      </div>

      {/* Projects Section */}
      <div id="highlights-section">
        <h1 className="text-center mt-10 text-3xl font-semibold tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-[#E6D6F7] to-[#B89BE6] bg-clip-text">
          PROJECTS
        </h1>

        <div className="mt-8 px-4">
          <ExpandableCardGrid />
        </div>
      </div>

      {/* Aligned Tibraze + CaseStudyCard */}
      <div className="relative max-w-2xl mx-auto w-full mt-8 min-h-[400px]">
        <div className="
          md:absolute md:left-[25%] md:translate-x-[-50%]
          w-full flex justify-center mb-8 md:mb-0
        ">
          <Tibraze />
        </div>

        <div className="
          md:absolute md:left-[75%] md:translate-x-[-50%]
          w-full flex justify-center
        ">
          <CaseStudyCard
            title="Explore the code for these projects and more on my GitHub — where clean commits meet clever solutions. Fork responsibly."
            category="The One With All The Code"
            image="/assets/robocomp.webp"
            logo="/assets/turbo.webp"
            link="https://example.com/case-study"
            type="content"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills-section" className="mb-0">
        <h1 className="text-center mt-20 text-4xl font-medium tracking-tight text-transparent md:text-6xl bg-gradient-to-br from-[#E6C1B5] to-[#D88C9A] bg-clip-text">
          SKILLS
        </h1>

        <IntegrationPills />
      </div>

      {/* Footer */}
      <div id="footer-section" className="mt-0">
        <Footer />
      </div>
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
