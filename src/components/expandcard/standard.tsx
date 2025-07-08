"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };

    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  useOutsideClick(ref, () => setActiveIndex(null));

  return (
    <>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeIndex !== null && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${activeIndex}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActiveIndex(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${activeIndex}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[90vh] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${activeIndex}`}
                className="flex items-center justify-center w-full h-80 bg-white dark:bg-neutral-900 sm:rounded-t-3xl"
              >
                <img
                  src={cards[activeIndex].src}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="flex justify-between items-start p-4 shrink-0">
                <div>
                  <motion.h3
                    layoutId={`title-${activeIndex}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {cards[activeIndex].title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${activeIndex}`}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {cards[activeIndex].description}
                  </motion.p>
                </div>

                <motion.a
                  layoutId={`button-${activeIndex}`}
                  href={cards[activeIndex].ctaLink}
                  target="_blank"
                  className="min-w-fit whitespace-nowrap px-5 py-2 text-sm rounded-full font-bold text-white text-center flex items-center justify-center"
                  style={{ backgroundColor: cards[activeIndex].ctaColor }}
                >
                  {cards[activeIndex].ctaText}
                </motion.a>
              </div>

              <div className="flex-1 overflow-y-auto px-4 pb-4 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm lg:text-base space-y-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {typeof cards[activeIndex].content === "function"
                    ? cards[activeIndex].content()
                    : cards[activeIndex].content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${index}`}
            key={`card-${index}`}
            onClick={() => setActiveIndex(index)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center w-full">
              <motion.div
                layoutId={`image-${index}`}
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
                  layoutId={`title-${index}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${index}`}
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>

            <motion.button
              layoutId={`button-${index}`}
              className="min-w-fit whitespace-nowrap px-5 py-2 text-sm rounded-full font-bold bg-white text-black mt-4 md:mt-0 transition-colors duration-300 text-center flex items-center justify-center"
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
    ctaText: "July 2025 - Present",
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
    ctaText: "June 2025 - July 2025",
    ctaLink: "https://stablecodex.web.app/",
    ctaColor: "#0E6EB6",
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
  {
    description: "Getinterned",
    title: "Web Developer Intern",
    src: "/assets/getintern.webp",
    ctaText: "June 2025 - July 2025",
    ctaLink: "https://https://getinterned.org//",
    ctaColor: "#4439E1",
    content: () => (
      <p>
My web development internship at GetInterned was absolutely relentless—a structured gauntlet of weekly challenges that pushed every aspect of my development skills to their breaking point. This wasn't just another internship; it was a carefully orchestrated battlefield where only the most adaptable and skilled developers could thrive.

Week 1 hit me with a frontend quiz that tested everything from React component optimization to CSS animations and responsive design principles. I had to prove I could build interfaces that weren't just functional but genuinely engaging across all devices. Week 2 cranked up the intensity with a backend quiz that dove deep into server architecture, database optimization, REST API design, and security protocols—the kind of stuff that separates real developers from code copiers.

Week 3 brought the game-changing project challenge: **SmartTailor**, a cloud-based micro-ERP platform for local tailoring shops. This wasn't some toy project—I had to build a complete workflow management system with customer order tracking, fabric inventory management, digital measurement storage, and mobile-friendly interfaces. The complexity was insane: customers could place orders with specific fabric types and measurements, tailors got comprehensive dashboards for managing orders and deadlines, and the whole system included real-time status updates from "cutting started" to "out for delivery." The optional features pushed me even further—AI-based measurement estimation, fabric pricing integration, WhatsApp bot functionality, and productivity tracking for solo tailors.

The final hackathon was where everything came together. Five problem statements ranging from AI-powered health kiosks to smart inventory systems, each requiring full-stack solutions that could actually solve real-world problems. Working under intense time pressure, I had to choose the most challenging problem, architect a complete solution, and build something production-ready while judges evaluated technical skills, creativity, and problem-solving abilities.

GetInterned didn't just teach me web development—they forged me into a developer who could handle any challenge thrown my way. Every quiz, every project, every sleepless night debugging code contributed to building the kind of comprehensive skill set that most developers take years to develop.
      </p>
    ),
  },
  {
    description: "Zidio Development",
    title: "Web Developer Intern",
    src: "/assets/zidio.webp",
    ctaText: "June 2025 - Present",
    ctaLink: "https://www.zidio.in/",
    ctaColor: "#343695",
    content: () => (
      <p>
My web development internship at Zidio Development was absolutely transformative—a comprehensive deep dive into modern web technologies that completely revolutionized my approach to building scalable, production-ready applications. This wasn't just another internship; it was an intensive training ground where theoretical knowledge met real-world application in the most demanding ways possible.
From day one, I was thrown into the deep end of full-stack development, working with cutting-edge technologies like React.js, Node.js, and MongoDB to build responsive, dynamic web applications that could handle serious traffic loads. The learning curve was steep, but the structured approach at Zidio made it manageable—each project built upon the previous one, creating a comprehensive skill set that most developers take years to acquire.
The highlight of my experience was developing a comprehensive e-commerce platform from scratch, handling everything from user authentication and payment gateway integration to inventory management and real-time order tracking. This wasn't some basic tutorial project—I was building enterprise-level features like advanced search functionality, recommendation algorithms, and mobile-responsive interfaces that worked flawlessly across all devices. The complexity pushed me to master both frontend optimization techniques and backend architecture principles that are crucial for scalable web applications.
What made this experience truly exceptional was the mentorship approach. The senior developers at Zidio didn't just assign tasks; they walked me through architectural decisions, code review processes, and industry best practices that you simply don't learn in textbooks. I gained hands-on experience with version control workflows, agile development methodologies, and collaborative coding practices that are essential for professional development teams.
The technical challenges were relentless but rewarding. I implemented RESTful APIs that could handle thousands of concurrent requests, optimized database queries for lightning-fast response times, and built interactive user interfaces using modern JavaScript frameworks. The debugging sessions were intense—tracking down complex bugs in production-like environments while maintaining code quality standards that would pass any professional review.
Beyond the technical skills, Zidio's emphasis on professional development was incredible. I learned to communicate technical concepts clearly, present solutions to stakeholders, and work effectively in cross-functional teams. The experience included exposure to DevOps practices, deployment strategies, and performance monitoring that gave me a complete picture of the web development lifecycle.
The project portfolio I built during this internship is absolutely insane—from dynamic dashboard applications with real-time data visualization to complex form handling systems with advanced validation and security features. Each project taught me different aspects of web development while reinforcing fundamental concepts like clean code architecture, responsive design principles, and user experience optimization.
This internship didn't just teach me web development; it transformed me into a developer who can tackle any full-stack challenge with confidence. The combination of hands-on projects, professional mentorship, and exposure to industry-standard tools and practices at Zidio Development created a foundation that's already proving invaluable in my career trajectory.</p>
    ),
  },
  {
    description: "Atal Incubation Center (MUJ)",
    title: "Content Writer",
    src: "/assets/aicmuj.webp",
    ctaText: "Nov 2024 - May 2025",
    ctaLink: "https://www.aicmuj.com/index.php",
    ctaColor: "#DB7943",
    content: () => (
      <p>
        My 7-month tenure as Content Writer at Atal Incubation Center-MUJ was absolutely transformative—a deep dive into the heart of India's innovation ecosystem that completely revolutionized how I approach storytelling, startup communication, and entrepreneurial content creation. Working within this flagship initiative of Atal Innovation Mission and NITI Aayog wasn't just a job; it was front-row access to the country's most ambitious entrepreneurship acceleration program.

Every single day brought me face-to-face with groundbreaking startups, visionary founders, and industry leaders who were actively reshaping entire sectors of the economy. I wasn't just writing content—I was documenting the birth of India's next generation of unicorns, capturing the raw energy of innovation as it happened in real-time.

The flagship events I covered were absolutely insane in their scope and impact. **Startup Mela 3.0** wasn't just another networking event—it was a convergence of over 200 startups, VCs, and industry leaders where million-dollar deals were happening in real-time. My comprehensive event coverage captured every keynote, every pitch session, every breakthrough moment, resulting in a 40% surge in online engagement that brought national attention to the incredible innovation happening at AIC-MUJ. The articles I crafted didn't just report on events; they told the stories of entrepreneurs who were literally changing the world.

**Cohort 2025 Conference** pushed me into even more complex territory—documenting the comprehensive 20-week incubation program that transforms raw ideas into scalable, profitable ventures. I had exclusive access to the 12 Critical Success Elements framework, interviewing founders as they navigated the notorious "Valley of Death" that kills most startups. My in-depth reports on their journeys, challenges, and breakthroughs became essential reading for aspiring entrepreneurs across the country.

The **Scale Your Startup: Interact with CEO** series was where my content creation skills truly exploded. I wasn't just writing summaries—I was crafting detailed case studies that broke down exactly how successful CEOs built their companies from ground zero. These weren't generic success stories; they were actionable blueprints that readers could actually implement, complete with specific strategies, common pitfalls, and insider insights that most entrepreneurs never get access to.

My collaboration with founders and VCs was absolutely mind-blowing. I wasn't interviewing them from the outside—I was embedded in their strategic planning sessions, pitch preparations, and investor meetings. This gave me unprecedented insight into how early-stage venture development actually works, from ideation to scaling. The 30+ articles I published weren't just content pieces; they were educational resources that documented real-world startup growth strategies, funding approaches, and market expansion techniques.

The technical workflow I developed using **Notion for content organization, Grammarly for precision editing, and WordPress for professional publishing** created a content pipeline that could handle the massive volume of high-quality articles needed to document this incredible innovation ecosystem. Every piece went through rigorous fact-checking, multiple revision cycles, and collaboration with subject matter experts to ensure accuracy and value.

What made this experience truly exceptional was the direct access to AIC-MUJ's comprehensive support infrastructure—the 10,000 sq. m innovation facility, prototype development labs, and rich mentorship network that included industry veterans, successful entrepreneurs, and investment professionals. I wasn't just writing about the startup ecosystem; I was living inside it, understanding the complex dynamics that determine which startups succeed and which fail.

The promotional content I created for preincubation programs directly contributed to attracting high-quality applicants from across India. My detailed program descriptions, success stories, and application guidance helped position AIC-MUJ as one of the premier innovation destinations in the country. The content strategy I developed increased program applications by significant margins while maintaining the quality standards that made AIC-MUJ one of only ten selections from over 3,658 initial applicants.

This wasn't just content writing—it was strategic communication that helped build one of India's most successful startup ecosystems. Every article, every report, every piece of promotional material contributed to creating an environment where innovation could thrive and entrepreneurs could access the resources they needed to build world-changing companies.
      </p>
    ),
  },
  {
    description: "Artificial Intelligence Intern",
    title: "Codsoft",
    src: "/assets/codsoftnew.webp",
    ctaText: "Sept 2024 - Oct 2025",
    ctaLink: "https://www.codsoft.in/",
    ctaColor: "#C04548",
    content: () => (
      <p>My one-month AI internship at CodSoft was absolutely intense—a rapid-fire dive into artificial intelligence that compressed years of learning into four weeks of pure, hands-on AI development. This wasn't just another theoretical program; it was a task-based battlefield where I had to choose 3 projects from 5 available challenges and build production-ready AI solutions that actually worked.

**Project 1: Rule-Based Chatbot** was my entry point into natural language processing, but calling it "simple" would be completely misleading. I built an intelligent conversational agent using pattern matching and if-else logic that could understand user intent, maintain conversation flow, and provide contextually relevant responses. The challenge wasn't just making it respond—it was creating conversation patterns sophisticated enough to handle human unpredictability while maintaining coherent dialogue. My chatbot could handle multi-turn conversations, remember context from previous interactions, and gracefully handle edge cases that would break most basic implementations.

**Project 2: Tic-Tac-Toe AI Agent** pushed me deep into game theory and strategic thinking algorithms. This wasn't just random move generation—I implemented a minimax algorithm with alpha-beta pruning that could analyze every possible game state, calculate optimal moves, and consistently beat human players. The AI could adapt its strategy based on opponent behavior, recognize winning patterns before they developed, and execute defensive moves that would frustrate even experienced players. Watching my AI consistently dominate games while explaining its decision-making process was absolutely mind-blowing.

**Project 3: Movie Recommendation System** was where machine learning really clicked for me. I built a content-based filtering system that analyzed movie metadata, user preferences, and viewing patterns to generate personalized recommendations that felt genuinely intelligent. This involved implementing TF-IDF vectorization, cosine similarity calculations, and collaborative filtering techniques that could process massive datasets and deliver recommendations in real-time. The system didn't just suggest popular movies—it understood user taste profiles and could recommend hidden gems that perfectly matched individual preferences.

The technical depth was insane. I worked with Python libraries like scikit-learn, pandas, numpy, and NLTK to build machine learning models that could actually learn and improve. The movie recommendation system required deep understanding of feature engineering, similarity metrics, and data preprocessing techniques that most developers never encounter. The chatbot pushed me into natural language processing territory, working with tokenization, pattern matching, and conversation flow management.

What made this experience truly exceptional was the compressed timeline—one month to build three production-ready AI applications while mastering the theoretical foundations behind each technology. Every day brought new challenges that forced me to think algorithmically, debug complex logic flows, and optimize performance for real-world usage.

The projects weren't isolated exercises; they were interconnected challenges that built upon each other. The pattern recognition skills from the chatbot enhanced my approach to the recommendation system. The strategic thinking from the Tic-Tac-Toe AI improved my algorithm design for all projects. Each solution required different aspects of AI development—from rule-based systems to machine learning models to game theory implementation.

CodSoft's task-based approach meant no unnecessary theory, just pure implementation that forced me to understand how AI actually works under the hood. By the end of the month, I wasn't just familiar with AI concepts—I was building intelligent systems that could learn, adapt, and solve real problems. The portfolio I created during this internship demonstrates genuine AI development skills that most computer science students take semesters to develop.

This wasn't just an internship; it was an AI bootcamp that transformed me from someone who understood AI theoretically into a developer who could build intelligent applications from scratch. The experience taught me that AI isn't magic—it's clever algorithms, solid mathematics, and creative problem-solving applied to make computers behave intelligently.</p>
    ),
  },
];
