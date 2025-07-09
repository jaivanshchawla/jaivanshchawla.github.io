"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import LazyImage from "../ui/LazyImage";

export function ExpandableCardGrid() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }

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
                <LazyImage
                  width={200}
                  height={200}
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
                  className="min-w-fit whitespace-nowrap px-5 py-2 text-sm rounded-full font-bold text-white text-center flex items-center justify-center"
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

      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="flex items-center justify-center w-full h-60 bg-transparent rounded-lg overflow-hidden"
              >
                <LazyImage
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
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
    description: "Arteria",
    title: "Smart Blood Donor Finder",
    src: "/assets/cool-min.webp",
    ctaText: "Github",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#FF69B4", // Hot Pink
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style. Born Elizabeth Woolridge
        Grant in New York City, she has captivated audiences worldwide with her
        haunting voice and introspective lyrics. <br /> <br /> Her songs often
        explore themes of tragic romance, glamour, and melancholia, drawing
        inspiration from both contemporary and vintage pop culture. With a
        career that has seen numerous critically acclaimed albums, Lana Del Rey
        has established herself as a unique and influential figure in the music
        industry, earning a dedicated fan base and numerous accolades.
      </p>
    ),
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "/assets/guy-min.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#D32F2F", // Red
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics that resonate deeply with his audience. Born
        in the village of Khant Maanpur in Punjab, India, he has become a
        cultural icon in the Punjabi music industry. <br /> <br /> His songs
        often reflect the struggles and triumphs of everyday life, capturing the
        essence of Punjabi culture and traditions. With a career spanning over
        two decades, Babbu Maan has released numerous hit albums and singles
        that have garnered him a massive fan following both in India and abroad.
      </p>
    ),
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/assets/punk-min.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#607D8B", // Slate Gray
    content: () => (
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their
        powerful sound and intense performances. Formed in Los Angeles,
        California, they have become a cultural icon in the heavy metal music
        industry. <br /> <br /> Their songs often reflect themes of aggression,
        social issues, and personal struggles. With a career spanning over four
        decades, Metallica has released numerous hit albums and singles that
        have garnered them a massive fan following both in the United States and
        abroad.
      </p>
    ),
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "/assets/chill-min.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#00BCD4", // Cyan
    content: () => (
      <p>
        Himesh Reshammiya, a renowned Indian music composer, singer, and actor,
        is celebrated for his distinctive voice and innovative compositions.
        Born in Mumbai, India, he has become a prominent figure in the Bollywood
        music industry. <br /> <br /> His songs often feature a blend of
        contemporary and traditional Indian music. With a career spanning over
        two decades, he has released numerous hit albums and singles that have
        garnered him a massive fan following.
      </p>
    ),
  },
  {
    description: "Daft Punk",
    title: "One More Time",
    src: "/assets/rain-min.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#FFC107", // Amber Yellow
    content: () => (
      <p>
        Daft Punk, the legendary French electronic music duo, is celebrated for
        revolutionizing house music with their innovative soundscapes and
        iconic robot personas. <br /> <br /> Known for their infectious beats
        and groundbreaking albums like "Discovery," Daft Punk has influenced
        countless artists and earned a devoted global fan base.
      </p>
    ),
  },
  {
    description: "Taylor Swift",
    title: "Blank Space",
    src: "/assets/snake-min.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#BA68C8", // Purple
    content: () => (
      <p>
        Taylor Swift, a multi-Grammy-winning singer-songwriter, is celebrated
        for her storytelling prowess and genre-spanning musical evolution.
        Rising to fame as a country artist before conquering pop music,
        she has captivated millions worldwide. <br /> <br /> Swift’s deeply
        personal lyrics and catchy melodies have made her one of the most
        influential artists of her generation.
      </p>
    ),
  },
];

