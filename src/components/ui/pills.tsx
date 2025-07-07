import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface Brand {
  name: string;
  color: string; // hex color for unique hover styling
}

const brands: Brand[] = [
  { name: "C/C++", color: "#999999" },
  { name: "Python", color: "#3776AB" },
  { name: "HTML/CSS", color: "#E44D26" },
  { name: "Javascript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Nextjs", color: "#000000" },
  { name: "MySql/Oracle SQL", color: "#00618A" },
  { name: "Git/Github", color: "#F05032" },
  { name: "Tailwind CSS", color: "#38BDF8" },
  { name: "Typescript", color: "#3178C6" },
  { name: "Sass", color: "#CD6799" },
  { name: "MERN", color: "#4DB33D" },
  { name: "Gsap", color: "#88CE02" },
  { name: "Linux (Ubuntu)", color: "#E95420" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "AI", color: "#5A189A" },
  { name: "ML", color: "#9D4EDD" },
  { name: "Arduino", color: "#00979D" },
  { name: "Blender", color: "#F5792A" },
  { name: "Figma,Canva", color: "#A259FF" },
  { name: "Photoshop", color: "#31A8FF" },
  { name: "Conversational AI", color: "#14B8A6" },
];

export default function IntegrationPills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center py-10">
      <div
        className={cn(
          "flex w-full max-w-lg flex-wrap justify-center rounded-xl px-2 py-6 shadow-2xl transition-all duration-300 ease-in-out",
        )}
        style={{
          backgroundColor: hoveredIndex !== null ? "#000000" : "#0A0506",
        }}
      >
        {brands.map((brand, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <div
              key={index}
              className={cn(
                "m-1 transform cursor-pointer rounded-full border-2 bg-white px-6 py-2 text-xl transition-all duration-300 ease-in-out",
                isHovered
                  ? "scale-110"
                  : isOtherHovered
                  ? "scale-75 opacity-70 text-gray-400"
                  : "scale-100 text-black",
              )}
              style={{
                borderColor: isHovered ? brand.color : "#CCCCCC",
                color: isHovered ? brand.color : undefined,
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
