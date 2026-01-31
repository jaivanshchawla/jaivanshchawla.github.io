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
    description: "Smart Blood Donor Finder",
    title: "Arteria",
    src: "/assets/arterialogo.webp",
    ctaText: "Github",
    ctaLink: "https://github.com/jaivanshchawla/Arteria",
    ctaColor: "#E53935",
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">🩸 The Vision That Started It All</h4>
          <p>
            Picture this: You're in a hospital corridor at 3 AM. A patient needs O-negative blood urgently, but the blood bank is empty. Traditional donor lists are outdated phone directories from 2019. Facebook groups are flooded with desperate pleas. WhatsApp forwards create chaos instead of solutions.
          </p>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div>
          <p className="font-medium text-red-500 dark:text-red-400 mb-2">
            This is exactly what happened during COVID-19. People were literally dying while potential donors were just kilometers away, scrolling through their phones, unaware of the emergency happening in their backyard.
          </p>
          <p>
            The spark for Arteria ignited during our college blood donation camp in January 2025. Watching hundreds of students donate blood while manually filling paper forms like it's 1995 was the eureka moment.
          </p>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">🚀 What Arteria Actually Does</h4>
          <p className="mb-3">
            Arteria isn't just another donor database – it's a <span className="font-semibold text-emerald-500">hyper-intelligent blood matching ecosystem</span> that treats every second like it could save a life.
          </p>
          <div className="space-y-2">
            <p><strong className="text-blue-600 dark:text-blue-400">⚡ Lightning-Fast Filtering:</strong> Tree-structured algorithm processes 1,000+ donor profiles in milliseconds</p>
            <p><strong className="text-purple-600 dark:text-purple-400">🎯 Dijkstra's Algorithm:</strong> Dynamically calculates nearest suitable donor in seconds</p>
            <p><strong className="text-green-600 dark:text-green-400">🔒 Aadhaar Authentication:</strong> For Indians, by Indians. No fake profiles, just verified citizens</p>
          </div>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">🔧 Tech Stack</h4>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <p className="font-medium mb-1">Current Arsenal:</p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• <span className="text-yellow-600 dark:text-yellow-400">Python</span> (Pandas, NumPy) – Data crunching powerhouse</li>
                <li>• <span className="text-blue-600 dark:text-blue-400">MySQL</span> – Rock-solid relational database</li>
                <li>• <span className="text-green-600 dark:text-green-400">Flask</span> – Lightning-fast API framework</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">🏆 Current Achievements</h4>
          <div className="space-y-2 text-sm">
            <p><strong>📊 1,000+ Donor Records</strong> processed with 98%+ matching accuracy</p>
            <p><strong>⚡ Sub-second Response</strong> times in emergency simulations</p>
            <p><strong>🌳 Hierarchical System</strong> that makes traditional searches look stone-age</p>
            <p><strong>🚨 Emergency Optimization</strong> finds perfect donor before paperwork finishes</p>
          </div>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div>
          <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">🔮 The "Hella Crazy" Future</h4>
          <p className="mb-2 font-medium text-pink-600 dark:text-pink-400">
            🧠 Blood Demand Forecasting AI - What if we could predict blood shortages before they happen?
          </p>
          <p className="text-sm mb-2">Our upcoming AI analyzes:</p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Historical hospital admission data</li>
            <li>• Traffic accident patterns</li>
            <li>• Major events (IPL matches = spike in emergencies)</li>
            <li>• Weather patterns (monsoon = dengue surge)</li>
          </ul>
        </div>
        <hr className="border-neutral-300 dark:border-neutral-600" />
        <div className="text-center">
          <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">💰 The Reward Revolution</h4>
          <p className="text-sm">
            Monetary Incentive Integration – Donors earn credits for successful donations. Think Uber for blood donation, but with emergency service urgency.
          </p>
        </div>
        <div className="text-center pt-2">
          <p className="font-semibold text-red-500 dark:text-red-400">
            🩸 Where Technology Meets Humanity, One Drop at a Time 🩸
          </p>
        </div>
      </div>
    ),
  },
  {
    description: "Alumni Database Management System",
    title: "JASSPA",
    src: "/assets/jasspalogo.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla/JASSPA---Alumni-Portal",
    ctaColor: "#0F52BA", // Red
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            🎓 The Problem Nobody Talks About
          </h4>
          <p>
            Colleges don’t really end at graduation — they just quietly disappear. Alumni WhatsApp groups die after 2 weeks. LinkedIn connections go cold.
            Important seniors become “that guy from 2019” whose number no one has anymore.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <p className="font-medium text-indigo-500 dark:text-indigo-400 mb-2">
            JASSPA faced the same silent problem: hundreds of alumni, rich placement history, and years of academic resources — scattered across spreadsheets,
            drives, and forgotten emails.
          </p>
          <p>
            JASSPA Codes was built to fix that fragmentation. Not as a social network clone, but as a
            <span className="font-semibold text-indigo-600"> living institutional memory</span> — structured, searchable, and actually useful.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            🧩 What the Portal Actually Does
          </h4>
          <p className="mb-3">
            The JASSPA Alumni Portal isn’t just a directory — it’s a
            <span className="font-semibold text-emerald-500"> centralized collaboration hub</span> connecting alumni, students, and administrators.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">🔍 Intelligent Alumni Search:</strong>
              Filter 500+ alumni by batch, specialization, and placement history in real time
            </p>
            <p>
              <strong className="text-purple-600 dark:text-purple-400">📅 Event Tracking Engine:</strong>
              Calendar-based event module tracking 20+ upcoming alumni and academic events
            </p>
            <p>
              <strong className="text-green-600 dark:text-green-400">📚 Academic Archive:</strong>
              Centralized access to 100+ technical resources, notes, and past examination papers
            </p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            🔐 Built for Control, Not Chaos
          </h4>
          <p className="mb-2">
            Unlike open forums that decay into noise, JASSPA Codes maintains quality through a
            <span className="font-semibold text-cyan-500"> secure admin-first architecture</span>.
          </p>
          <div className="space-y-2 text-sm">
            <p>• JWT-based authentication for admins and moderators</p>
            <p>• Controlled content moderation and alumni verification</p>
            <p>• Secure handling of 50+ monthly user queries</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🛠️ Tech Stack
          </h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <ul className="space-y-1 ml-4">
              <li>• <span className="text-yellow-600 dark:text-yellow-400">HTML, CSS, JavaScript</span> – Clean, responsive frontend</li>
              <li>• <span className="text-green-600 dark:text-green-400">Node.js + Express.js</span> – Scalable backend APIs</li>
              <li>• <span className="text-emerald-600 dark:text-emerald-400">MongoDB</span> – Flexible document-based alumni records</li>
              <li>• <span className="text-blue-600 dark:text-blue-400">REST APIs + JWT</span> – Secure, modular communication</li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
            📊 Impact So Far
          </h4>
          <div className="space-y-2 text-sm">
            <p><strong>👥 500+ Alumni Profiles</strong> organized and searchable</p>
            <p><strong>📈 50+ Monthly Queries</strong> handled via admin dashboard</p>
            <p><strong>📅 20+ Events</strong> tracked with calendar integration</p>
            <p><strong>📚 100+ Academic Resources</strong> preserved and accessible</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
            🔮 The Long-Term Vision
          </h4>
          <p className="mb-2 font-medium text-pink-600 dark:text-pink-400">
            What if alumni portals didn’t just store data — but actively shaped careers?
          </p>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Alumni–student mentorship matching</li>
            <li>• Placement trend analytics across batches</li>
            <li>• Automated event recommendations</li>
            <li>• Institutional memory that evolves every year</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div className="text-center pt-2">
          <p className="font-semibold text-indigo-500 dark:text-indigo-400">
            🎓 Preserving Legacy. Powering Connections. Building Continuity. 🎓
          </p>
        </div>
      </div>

    ),
  },
  {
    description: "Real life satelite visualization project",
    title: "SATMAP",
    src: "/assets/SATMAPLOGO.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla/Satviz",
    ctaColor: "#FF5A09", // Slate Gray
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-sky-600 dark:text-sky-400 mb-2">
            🛰️ The Problem Above Our Heads
          </h4>
          <p>
            Satellite communication looks effortless from Earth — a signal goes up, data comes down, problem solved.
            But in orbit, nothing is that simple.
          </p>
          <p className="mt-2">
            Line-of-sight breaks. Earth blocks signals. Satellites move at 7.5 km/s.
            A missed handshake isn’t a glitch — it’s physics.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <p className="font-medium text-sky-500 dark:text-sky-400 mb-2">
            During the Space Handshakes Hackathon, one question stood out:
          </p>
          <p>
            <span className="font-semibold text-sky-600">
              How do you *see*, analyze, and reason about satellite-to-satellite communication before anything is launched?
            </span>
          </p>
          <p className="mt-2">
            SatMap (Satviz) was built to answer that — not with spreadsheets or static plots, but with
            a live, spatial, time-aware simulation of orbital reality.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            🚀 What SatMap Actually Does
          </h4>
          <p className="mb-3">
            SatMap is a <span className="font-semibold text-emerald-500">2D + 3D satellite communication simulator</span>
            that models Beacon-to-Iridium handshakes across real orbital mechanics.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">📡 Handshake Simulation:</strong>
              Simulates Beacon–Iridium communication using bi-directional Line-of-Sight logic
            </p>
            <p>
              <strong className="text-purple-600 dark:text-purple-400">🛰️ Dynamic TLE Generation:</strong>
              Generates valid Beacon TLEs on the fly for custom Sun-Synchronous and LEO orbits
            </p>
            <p>
              <strong className="text-green-600 dark:text-green-400">⏱️ Time-Stepped Propagation:</strong>
              Propagates orbits across 5,000+ time steps per run using satellite.js
            </p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            🧠 Under the Hood: The Simulation Brain
          </h4>
          <p className="mb-2">
            SatMap isn’t animation — it’s computation.
          </p>
          <div className="space-y-2 text-sm">
            <p>• ECI → Geodetic coordinate conversion at each time step</p>
            <p>• Earth occultation checks using geometric LOS calculations</p>
            <p>• Horizon-aligned Beacon FOV vs nadir-pointing Iridium cones</p>
            <p>• Handshake detection, blackout logging, and event timing analysis</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            🌍 From Data to Space You Can Explore
          </h4>
          <p className="mb-2">
            SatMap V3.0 introduced a full spatial leap — bringing the simulation into three dimensions.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Switchable 2D map and fully interactive 3D Earth globe</p>
            <p>• Real-time satellite trails, active link lines, and handshake markers</p>
            <p>• 3D communication cones and Earth footprint projections</p>
            <p>• Playback controls: realtime, timelapse, speed control, time-range filtering</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🛠️ Tech Stack
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• <span className="text-yellow-600 dark:text-yellow-400">TypeScript</span> – Strongly-typed simulation core</li>
            <li>• <span className="text-green-600 dark:text-green-400">satellite.js</span> – Orbital propagation & mechanics</li>
            <li>• <span className="text-blue-600 dark:text-blue-400">React</span> – Real-time UI and state orchestration</li>
            <li>• <span className="text-indigo-600 dark:text-indigo-400">Three.js + @react-three/fiber</span> – Immersive 3D visualization</li>
            <li>• <span className="text-cyan-600 dark:text-cyan-400">Axios</span> – Live Iridium TLE ingestion from CelesTrak</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
            📊 Simulation Scale & Impact
          </h4>
          <div className="space-y-2 text-sm">
            <p><strong>🛰️ 1,000+ Orbital Events</strong> analyzed per simulation run</p>
            <p><strong>⏱️ 5,000+ Time Steps</strong> processed with deterministic propagation</p>
            <p><strong>📡 Accurate Blackout Logging</strong> with handshake timing precision</p>
            <p><strong>🌍 IRIDIUM & IRIDIUM-NEXT</strong> constellation support</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
            🔮 Where SatMap Is Headed
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Public API for programmatic simulation triggering</li>
            <li>• Advanced antenna pattern and interference modeling</li>
            <li>• Doppler shift and atmospheric effects</li>
            <li>• Exportable handshake and blackout datasets</li>
            <li>• High-fidelity Earth visuals and satellite models</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div className="text-center pt-2">
          <p className="font-semibold text-sky-500 dark:text-sky-400">
            🛰️ Turning Orbital Mechanics Into Something You Can See, Test, and Trust 🛰️
          </p>
        </div>
      </div>
    ),

  },
  {
    description: "Student Management Project",
    title: "Zyntra",
    src: "/assets/ZYNTRA.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla/Zyntra",
    ctaColor: "#00BCD4", // Cyan
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-violet-600 dark:text-violet-400 mb-2">
            🧠 The Learning Problem Nobody Fixed Properly
          </h4>
          <p>
            Online learning platforms are everywhere — yet most of them still feel static, scripted, and painfully one-directional.
            Videos don’t adapt. Doubts wait. Human tutors don’t scale.
          </p>
          <p className="mt-2">
            The real gap wasn’t content — it was <span className="font-semibold text-violet-600">interaction</span>.
            Learning needed a voice. A personality. A companion that could think, respond, and evolve in real time.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <p className="font-medium text-violet-500 dark:text-violet-400 mb-2">
            Zyntra was built around a simple question:
          </p>
          <p>
            <span className="font-semibold text-violet-600">
              What if every learner could build their own AI teacher — not just chat with one?
            </span>
          </p>
          <p className="mt-2">
            Not a generic bot, but a personalized teaching companion with a defined subject, voice, tone, and teaching style —
            available instantly, anytime.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            🚀 What Zyntra Actually Does
          </h4>
          <p className="mb-3">
            Zyntra is a <span className="font-semibold text-emerald-500">real-time AI teaching platform</span> where users create,
            customize, and learn with AI-powered companions.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">🎓 AI Companions:</strong>
              Build teachers with custom subjects, personalities, voices, and teaching styles
            </p>
            <p>
              <strong className="text-purple-600 dark:text-purple-400">🎙️ Voice-First Learning:</strong>
              Sub-200ms voice responses using Vapi AI and 11Labs for natural conversations
            </p>
            <p>
              <strong className="text-green-600 dark:text-green-400">📚 Companion Library:</strong>
              Browse, search, and filter AI teachers by topic, subject, or learning intent
            </p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            ⚡ Real-Time, At Scale
          </h4>
          <p className="mb-2">
            Zyntra isn’t a demo — it’s production-grade.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Real-time transcript streaming during live voice sessions</p>
            <p>• Scaled to 100+ concurrent users with 99.9% uptime</p>
            <p>• 500+ daily learning interactions across personalized paths</p>
            <p>• Subscription-backed access with user-specific learning history</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            🧩 Under the Hood: Platform Architecture
          </h4>
          <p className="mb-2">
            Zyntra was designed as a modern, type-safe, full-stack AI product — not a stitched-together prototype.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Server Actions handling companion creation, filtering, and sessions</p>
            <p>• Supabase-backed PostgreSQL for secure, scalable data storage</p>
            <p>• Clerk-protected routes for authentication and subscriptions</p>
            <p>• Streaming voice pipelines optimized for low-latency feedback</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🛠️ Tech Stack
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• <span className="text-blue-600 dark:text-blue-400">Next.js (App Router)</span> – Server-first architecture</li>
            <li>• <span className="text-indigo-600 dark:text-indigo-400">TypeScript</span> – End-to-end type safety</li>
            <li>• <span className="text-emerald-600 dark:text-emerald-400">Supabase (PostgreSQL)</span> – Scalable data layer</li>
            <li>• <span className="text-purple-600 dark:text-purple-400">Clerk</span> – Authentication & subscriptions</li>
            <li>• <span className="text-pink-600 dark:text-pink-400">Vapi AI + 11Labs</span> – Real-time voice intelligence</li>
            <li>• <span className="text-cyan-600 dark:text-cyan-400">ShadCN UI + Tailwind</span> – Clean, accessible UI</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
            📊 Platform Impact
          </h4>
          <div className="space-y-2 text-sm">
            <p><strong>👥 100+ Concurrent Users</strong> supported without degradation</p>
            <p><strong>⚡ Sub-200ms Voice Latency</strong> for natural conversation flow</p>
            <p><strong>📈 500+ Daily Interactions</strong> across personalized learning paths</p>
            <p><strong>🔒 99.9% Uptime</strong> with secure authentication and billing</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
            🔮 Where Zyntra Is Headed
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Adaptive difficulty based on learner performance</li>
            <li>• Multi-companion collaborative learning sessions</li>
            <li>• Emotion-aware teaching using voice signals</li>
            <li>• Institution-level deployments for schools and universities</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div className="text-center pt-2">
          <p className="font-semibold text-violet-500 dark:text-violet-400">
            🧠 Learning, Reimagined — One AI Companion at a Time 🧠
          </p>
        </div>
      </div>
    ),

  },
  {
    description: "Cricket Score Predictor",
    title: "Match Maven",
    src: "/assets/MATCHMAVEN.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#FFC107", // Amber Yellow
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">
            🏏 The Problem Every Cricket Fan Knows
          </h4>
          <p>
            Watching a live IPL match is pure chaos — momentum swings every over, one wicket changes everything,
            and yet most “predictions” are either gut feelings or post-match stats.
          </p>
          <p className="mt-2">
            The real question fans ask mid-match is simple:
            <span className="font-semibold text-orange-600">
              Who’s winning *right now* — and by how much?
            </span>
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <p className="font-medium text-orange-500 dark:text-orange-400 mb-2">
            MatchMaven was built to bring data science into the stadium.
          </p>
          <p>
            Not after the match. Not before the toss.
            <span className="font-semibold text-orange-600">
              Live — ball by ball — when decisions actually matter.
            </span>
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            🚀 What MatchMaven Actually Does
          </h4>
          <p className="mb-3">
            MatchMaven is a <span className="font-semibold text-emerald-500">live IPL prediction platform</span>
            that uses machine learning to forecast match outcomes and final scores in real time.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">🏆 Winner Prediction:</strong>
              ML model estimates win probabilities dynamically as the match progresses
            </p>
            <p>
              <strong className="text-purple-600 dark:text-purple-400">🔢 Score Prediction:</strong>
              Regression model predicts final total (±5 runs) using live match state
            </p>
            <p>
              <strong className="text-green-600 dark:text-green-400">📊 Match Dashboard:</strong>
              Unified view of Upcoming, Live, and Completed matches
            </p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            🧠 Inside the Model
          </h4>
          <p className="mb-2">
            MatchMaven isn’t guesswork — it’s trained intuition.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Models trained on 50,000+ historical IPL records</p>
            <p>• Live features: runs, overs, wickets, venue, and momentum indicators</p>
            <p>• Separate pipelines for classification (winner) and regression (score)</p>
            <p>• Serialized models served via Flask APIs for low-latency inference</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            ⚡ Real-Time, Fan-First Experience
          </h4>
          <p className="mb-2">
            Data is useless if it’s slow or unreadable.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Live probability outputs updated on user input</p>
            <p>• Parallax hero section and animated match cards</p>
            <p>• Clean React–Flask integration with near-instant responses</p>
            <p>• Designed for fans — not analysts with spreadsheets</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🛠️ Tech Stack
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• <span className="text-yellow-600 dark:text-yellow-400">Python + Flask</span> – ML inference APIs</li>
            <li>• <span className="text-green-600 dark:text-green-400">scikit-learn</span> – Training and prediction models</li>
            <li>• <span className="text-blue-600 dark:text-blue-400">React + Vite</span> – Fast, interactive frontend</li>
            <li>• <span className="text-purple-600 dark:text-purple-400">CSS Animations</span> – Fluid UI interactions</li>
            <li>• <span className="text-cyan-600 dark:text-cyan-400">Render</span> – Zero-DevOps deployment</li>
            <li>• <span className="text-indigo-600 dark:text-indigo-400">Git LFS</span> – Large ML model versioning</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
            📊 Platform Impact
          </h4>
          <div className="space-y-2 text-sm">
            <p><strong>📈 Real-Time Win Probabilities</strong> during live IPL matches</p>
            <p><strong>🎯 Score Predictions</strong> accurate within ±5 runs</p>
            <p><strong>⚡ Sub-second Responses</strong> via Flask inference APIs</p>
            <p><strong>🌍 Live Public Demo</strong> deployed and accessible</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
            🔮 What’s Next for MatchMaven
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Ball-by-ball win probability graphs</li>
            <li>• Player impact modeling (batters & bowlers)</li>
            <li>• Team strategy simulations</li>
            <li>• Multi-season and venue-based trend analysis</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div className="text-center pt-2">
          <p className="font-semibold text-orange-500 dark:text-orange-400">
            🏏 Turning Live Cricket Into Data-Driven Drama 🏏
          </p>
        </div>
      </div>
    ),

  },
  {
    description: "Handwritten Text Recognition & Key Concept Extraction ",
    title: "ScriptSense",
    src: "/assets/ssense.webp",
    ctaText: "Visit",
    ctaLink: "https://github.com/jaivanshchawla",
    ctaColor: "#3A6C72", // Purple
    content: () => (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-600 dark:text-slate-400 mb-2">
            ✍️ The Problem Hidden in Handwriting
          </h4>
          <p>
            Handwritten documents still dominate classrooms, archives, forms, and historical records —
            yet most of this data remains effectively invisible to machines.
          </p>
          <p className="mt-2">
            Traditional OCR struggles with writer variability, inconsistent spacing, noise, and spelling errors.
            Recognizing text is hard — <span className="font-semibold text-slate-600">understanding it is harder</span>.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <p className="font-medium text-slate-500 dark:text-slate-400 mb-2">
            ScriptSense was built to bridge that gap.
          </p>
          <p>
            Not just to read handwritten text — but to transform it into
            <span className="font-semibold text-slate-600">
              structured, machine-usable knowledge
            </span>.
          </p>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
            🚀 What ScriptSense Actually Does
          </h4>
          <p className="mb-3">
            ScriptSense is an <span className="font-semibold text-emerald-500">end-to-end OCR + NLP pipeline</span>
            for handwritten documents — from raw images to structured semantic output.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="text-blue-600 dark:text-blue-400">🧠 Transformer-Based OCR:</strong>
              Fine-tuned TrOCR models for line- and page-level handwritten text recognition
            </p>
            <p>
              <strong className="text-purple-600 dark:text-purple-400">📄 Multi-Writer Generalization:</strong>
              Robust recognition across 310+ writers in the CVL dataset
            </p>
            <p>
              <strong className="text-green-600 dark:text-green-400">🔎 Key Concept Extraction:</strong>
              Named Entity Recognition with structured post-processing and correction
            </p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
            📊 Accuracy That Actually Matters
          </h4>
          <p className="mb-2">
            ScriptSense focuses on evaluation metrics that reflect real-world usability.
          </p>
          <div className="space-y-2 text-sm">
            <p><strong>📉 Character Error Rate (CER):</strong> 0.04</p>
            <p><strong>📉 Word Error Rate (WER):</strong> 0.09</p>
            <p>• Achieved via fine-tuning transformer OCR on writer-diverse data</p>
            <p>• Evaluated across both line-level and page-level recognition</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            🧠 Pipeline Architecture
          </h4>
          <p className="mb-2">
            ScriptSense is designed as a modular, reproducible ML pipeline.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Automated XML parsing and label generation for CVL dataset</p>
            <p>• Transformer fine-tuning with configurable batch size and learning rate</p>
            <p>• OCR outputs serialized for downstream processing</p>
            <p>• Post-OCR spelling correction using pretrained language models</p>
            <p>• spaCy NER with optional entity reduction into broader semantic classes</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🧩 From Text to Structure
          </h4>
          <p className="mb-2">
            Recognition alone isn’t enough — ScriptSense organizes information.
          </p>
          <div className="space-y-2 text-sm">
            <p>• Extraction of 15+ entity types using spaCy NER</p>
            <p>• Spelling normalization for noisy handwritten output</p>
            <p>• Structured JSON schema per document sample</p>
            <p>• Ready for downstream analytics, search, or storage</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">
            🛠️ Tech Stack
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• <span className="text-yellow-600 dark:text-yellow-400">Python</span> – Core pipeline orchestration</li>
            <li>• <span className="text-green-600 dark:text-green-400">PyTorch</span> – Model training and evaluation</li>
            <li>• <span className="text-blue-600 dark:text-blue-400">HuggingFace Transformers</span> – TrOCR fine-tuning</li>
            <li>• <span className="text-indigo-600 dark:text-indigo-400">spaCy</span> – Named entity recognition</li>
            <li>• <span className="text-cyan-600 dark:text-cyan-400">pandas / numpy</span> – Data handling and analysis</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
            📈 Research-Grade Outcomes
          </h4>
          <div className="space-y-2 text-sm">
            <p><strong>🖋️ High-Fidelity OCR</strong> across noisy, real-world handwriting</p>
            <p><strong>🧠 Structured Knowledge Extraction</strong> from unstructured text</p>
            <p><strong>📦 Reproducible Pipeline</strong> with modular scripts and checkpoints</p>
            <p><strong>📊 Insightful Plots</strong> for dataset and training behavior analysis</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div>
          <h4 className="font-semibold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
            🔮 Where ScriptSense Can Go Next
          </h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Domain-specific fine-tuning (forms, exams, medical notes)</li>
            <li>• Multilingual handwritten OCR</li>
            <li>• Layout-aware document understanding</li>
            <li>• API-first deployment for document intelligence systems</li>
          </ul>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-600" />

        <div className="text-center pt-2">
          <p className="font-semibold text-slate-500 dark:text-slate-400">
            ✍️ Turning Handwriting Into Structured Intelligence ✍️
          </p>
        </div>
      </div>
    ),

  },
];