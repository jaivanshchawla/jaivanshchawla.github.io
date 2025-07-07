import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface Brand {
  name: string;
  color: string; // unique hover color
}

const brands: Brand[] = [
  { name: "C/C++", color: "#B0B0B0" },
  { name: "Python", color: "#4C94D4" },
  { name: "HTML/CSS", color: "#F27A3F" },
  { name: "Javascript", color: "#E8D24B" },
  { name: "React", color: "#70DAF2" },
  { name: "Nextjs", color: "#A1A1A1" },
  { name: "MySql/Oracle SQL", color: "#539BB7" },
  { name: "Git/Github", color: "#EF6940" },
  { name: "Tailwind CSS", color: "#60CDF9" },
  { name: "Typescript", color: "#5C95D6" },
  { name: "Sass", color: "#D485A8" },
  { name: "MERN", color: "#67B34D" },
  { name: "Gsap", color: "#B1E345" },
  { name: "Linux (Ubuntu)", color: "#F06328" },
  { name: "Docker", color: "#6BB8F1" },
  { name: "Kubernetes", color: "#5F8FE9" },
  { name: "AI", color: "#9457B0" },
  { name: "ML", color: "#AD76E0" },
  { name: "Arduino", color: "#52B8BE" },
  { name: "Blender", color: "#E58A41" },
  { name: "Figma,Canva", color: "#A77BE5" },
  { name: "Photoshop", color: "#5DB2F6" },
  { name: "Conversational AI", color: "#EA6F6F" },
];

export default function IntegrationPills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex justify-center py-0"> {/* ⬅️ Changed py-10 → py-0 */}
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
                borderColor: isHovered ? brand.color : "#C89A98",
                color: isHovered ? brand.color : "#ffffff",
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
