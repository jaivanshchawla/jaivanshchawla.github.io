"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // Set width consistently
  const barWidth = "50vw";
  const rayWidth = "30vw";

  const childrenArray = React.Children.toArray(children);
  const heading = childrenArray[0];
  const rest = childrenArray.slice(1);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full z-0 my-8 sm:my-12",
        className
      )}
      style={{ minHeight: "300px" }}
    >
      {/* Visual Lamp Effects */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0.5, width: "20vw" }}
          whileInView={{ opacity: 1, width: rayWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 -translate-x-1/2 h-40 sm:h-56 overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "20vw" }}
          whileInView={{ opacity: 1, width: rayWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 -translate-x-1/2 h-40 sm:h-56 overflow-visible bg-gradient-conic from-transparent via-transparent to-cyan-500 [--conic-position:from_290deg_at_center_top]"
        />
        <motion.div
          initial={{ scaleX: 0.6 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-30 h-8 sm:h-12 rounded-full bg-cyan-400 blur-2xl left-1/2 -translate-x-1/2"
          style={{
            width: barWidth,
            top: 0,
          }}
        />
        <motion.div
          initial={{ scaleX: 0.6 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-50 h-0.5 bg-cyan-400 left-1/2 -translate-x-1/2"
          style={{
            width: barWidth,
            top: "1rem",
          }}
        />
      </div>

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="relative z-50 flex flex-col items-center px-2 sm:px-5 mt-20"
      >
        {heading}
      </motion.div>

      {/* Non-Animated Children */}
      <div className="relative z-50 flex flex-col items-center px-2 sm:px-5 mt-12">
        {rest}
      </div>
    </div>
  );
};
