import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface Brand {
  name: string;
  color: string; // unique hover color
}

const brands: Brand[] = [
  { name: "C/C++", color: "#B0B0B0" },         // Soft neutral light grey
  { name: "Python", color: "#4C94D4" },       // Fresh but clear Python blue
  { name: "HTML/CSS", color: "#F27A3F" },     // Brightened but elegant HTML orange
  { name: "Javascript", color: "#E8D24B" },   // Clear, warm yellow
  { name: "React", color: "#70DAF2" },        // Crisp but not harsh cyan
  { name: "Nextjs", color: "#A1A1A1" },       // Light silver grey for readability on dark
  { name: "MySql/Oracle SQL", color: "#539BB7" }, // Distinct medium teal
  { name: "Git/Github", color: "#EF6940" },   // Brighter git orange for contrast
  { name: "Tailwind CSS", color: "#60CDF9" }, // Refined, soft cyan
  { name: "Typescript", color: "#5C95D6" },   // Balanced TS blue
  { name: "Sass", color: "#D485A8" },         // Dusty, muted rose pink
  { name: "MERN", color: "#67B34D" },         // Fresh mid-green, distinct from others
  { name: "Gsap", color: "#B1E345" },         // Soft lime, still easy on eyes
  { name: "Linux (Ubuntu)", color: "#F06328" }, // Warm, richer orange
  { name: "Docker", color: "#6BB8F1" },       // Balanced Docker blue
  { name: "Kubernetes", color: "#5F8FE9" },   // Clear k8s blue, not dark
  { name: "AI", color: "#9457B0" },           // Regal violet, distinct
  { name: "ML", color: "#AD76E0" },           // Softer lavender
  { name: "Arduino", color: "#52B8BE" },      // Crisp, readable teal
  { name: "Blender", color: "#E58A41" },      // Warmer orange with pop
  { name: "Figma,Canva", color: "#A77BE5" },  // Soft but bright purple
  { name: "Photoshop", color: "#5DB2F6" },    // Polished sky blue
  { name: "Conversational AI", color: "#EA6F6F" }, // Bright rose pink, distinct from Sass
];


export default function IntegrationPills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center py-10">
      <div
        className={cn(
          "flex w-full max-w-lg flex-wrap justify-center rounded-xl px-2 py-6 shadow-2xl transition-colors duration-300 ease-in-out",
        )}
        style={{
          backgroundColor: hoveredIndex !== null ? "#000000" : "#0A0506",
        }}
      >
        {brands.map((brand, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && !isHovered;

          return (
            <div
              key={index}
              className={cn(
                "m-1 transform cursor-pointer rounded-full border-2 px-6 py-2 text-xl transition-all duration-300 ease-in-out",
                isHovered
                  ? "scale-110"
                  : isOtherHovered
                  ? "scale-75 opacity-60"
                  : "scale-100",
              )}
              style={{
                borderColor: isHovered
                  ? brand.color
                  : "#C89A98",
                color: isHovered
                  ? brand.color
                  : "#ffffff",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {brand.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
