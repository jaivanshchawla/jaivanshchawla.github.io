"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(false);
    };

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="flex items-center justify-center w-full h-80 bg-white dark:bg-neutral-900 sm:rounded-t-3xl"
              >
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="flex justify-between items-start p-4 shrink-0">
                <div>
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${active.title}-${id}`}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold text-white"
                  style={{ backgroundColor: active.ctaColor }}
                >
                  {active.ctaText}
                </motion.a>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm lg:text-base space-y-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="flex items-center justify-center w-full md:w-14 h-36 md:h-14 mx-auto bg-transparent rounded-lg overflow-hidden"
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="text-center md:text-left w-full">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-white text-black mt-4 md:mt-0 transition-colors duration-300"
              style={{
                border: `1px solid ${card.ctaColor}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = card.ctaColor;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "black";
              }}
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    description: "Manipal University Jaipur",
    title: "Student Placement Co-ordinator",
    src: "/assets/manipal.webp",
    ctaText: "Jan 2025 - Present",
    ctaLink: "https://jaipur.manipal.edu/",
    ctaColor: "#F28C28",
    content: () => (
      <p>
What started as me joining the placement cell as a graphic designer somehow snowballed into becoming a full-blown event coordination specialist at Manipal University Jaipur's Dell Technologies Leadership Summit 5.0, where after getting selected as Student Placement Coordinator and becoming deeply integrated with the main team, I naturally evolved into simultaneously handling Liaison Officer, Core Event Organizer, and Lead Graphic Designer roles while juggling 40+ HR professionals and 400+ attendees without completely losing my sanity (spoiler: I definitely lost it, but in the best way possible). Armed with every design software I could get my hands on - Canva, Figma, Photoshop, and Blender - I obsessively crafted 20+ visual assets including flexes, ID cards, backdrops, social media creatives, and placement reports, treating every pixel like it held the secrets to corporate success. As personal liaison to Mr. Sachin Sabyasachi from Dell Technologies HR, I became his campus guardian angel, managing everything from acoustics to coffee preferences while orchestrating full-cycle event execution with the precision of someone who definitely has color-coded spreadsheets and contingency plans for their contingency plans. Through sheer determination and probably unhealthy amounts of caffeine, I coordinated speaker onboarding, scheduling, technical execution, venue setup, and attendee management, essentially becoming a human translator between student chaos and corporate professionalism. Blessed with an incredible senior team and my brilliant graphic design partner who somehow tolerated my perfectionist tendencies, I managed to solve problems before they existed and delivered flawless execution with zero incidents - all while maintaining the enthusiasm of someone who genuinely believes that event planning is the most beautiful form of organized chaos ever invented.
</p>
    ),
  },
  {
    description: "BLUESTOCK.in",
    title: "Software Development Intern",
    src: "/assets/bluestock.webp",
    ctaText: "Jan 2025 - Present",
    ctaLink: "https://bluestock.in/",
    ctaColor: "#5736AE",
    content: () => (
      <p>
Currently absolutely demolishing expectations as a Software Development Engineer Intern at Bluestock Fintech, and honestly? This experience is rewiring my brain in ways I never thought possible. Every single day I'm building production-level fintech solutions that actual clients depend on—no sandbox projects, no fake data, just pure real-world chaos that demands perfection.
My main battlefield is developing a comprehensive IPO Web Application from scratch using Django REST Framework and PostgreSQL, handling millions of dollars worth of financial data like it's just another Tuesday. The front-end work in React.js isn't just about pretty interfaces—I'm crafting experiences that let financial professionals make split-second decisions with confidence, building responsive systems that update in real-time because milliseconds matter when money's on the line. The back-end APIs I'm architecting don't just serve data; they're intelligent systems that process massive transaction volumes while maintaining the bulletproof security standards that fintech absolutely demands.
Working with PostgreSQL to manage critical financial data has taught me database optimization techniques that most developers never encounter. Every query needs to be lightning-fast, every schema perfectly normalized, every security layer impenetrable. The collaborative environment here pushes me beyond what I thought was possible—working alongside seasoned developers who constantly challenge me to think bigger, code cleaner, and solve problems I didn't even know existed.
What makes this insane is that I'm not just learning fintech development; I'm actively contributing to systems that streamline real IPO processes for actual companies. The mentorship from Yash Kale and the entire Bluestock team has been incredible—they've shown me that great software isn't just functional, it's transformative. This isn't just an internship; it's a masterclass in building solutions that actually matter in the financial world.
      </p>
    ),
  },
  {
    description: "StableCode",
    title: "Artificial Intelligence Intern",
    src: "/assets/stablecode.webp",
    ctaText: "Jan 2025 - Present",
    ctaLink: "https://stablecodex.web.app/",
    ctaColor: "#5736AE",
    content: () => (
      <p>
My AI internship at StableCode was absolutely mental—five projects that completely rewired how I think about artificial intelligence and machine learning. This wasn't just coding exercises; this was diving headfirst into the bleeding edge of AI development and emerging with solutions that actually work in the real world.

Started with building a rule-based AI chatbot that could hold genuine conversations, not just spit out pre-programmed responses. The challenge was creating decision trees complex enough to handle human unpredictability while maintaining conversational flow that felt natural. Then came the movie recommendation system using content-based filtering—analyzing user preferences, movie metadata, and viewing patterns to build recommendation algorithms that actually understood what people wanted to watch next.

The Rock, Paper, Scissors game against AI was where things got seriously interesting. This wasn't just random number generation; I built an AI that could learn human patterns, predict behavioral tendencies, and adapt its strategy in real-time. Watching my AI consistently beat human players by recognizing their unconscious patterns was absolutely mind-blowing.

The face detection app pushed me deep into computer vision territory, working with OpenCV and machine learning models to build systems that could identify and track faces with scary accuracy. But the real beast was the offline voice assistant—building an AI that could understand speech, process commands, and respond intelligently without any internet connection. This meant optimizing models for local processing, handling voice recognition in real-time, and creating responses that felt genuinely intelligent.

Each project taught me different aspects of AI development, from natural language processing to computer vision to machine learning optimization. StableCode didn't just give me tasks; they threw me into AI challenges that forced me to understand how these technologies actually work under the hood. Now I think in algorithms, dream in neural networks, and see AI applications everywhere.
      </p>
    ),
  },
];
