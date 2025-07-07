import React from "react";

import { cn } from "../../lib/utils";

const brands = [
  {
    name: "C/C++",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Python",
    className: "bg-gray-200 font-bold",
    hoverClass:
      "group-hover:border-blue-500 group-hover:text-blue-500 group-hover:bg-white group-hover:border-2",
  },
  {
    name: "HTML/CSS",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Javascript",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "React",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Nextjs",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "MySql/Oracle SQL",
    className: "bg-gray-200 font-bold",
    hoverClass:
      "group-hover:border-green-500 group-hover:text-green-500 group-hover:bg-white group-hover:border-2",
  },
  {
    name: "Git/Github",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Tailwind CSS",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Typescript",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Sass",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "MERN",
    className: "bg-gray-200 font-bold",
    hoverClass:
      "group-hover:border-purple-500 group-hover:text-purple-500 group-hover:bg-white group-hover:border-2",
  },
  {
    name: "Gsap",
    className: "bg-gray-200 font-bold",
    hoverClass:
      "group-hover:border-purple-500 group-hover:text-purple-500 group-hover:bg-white group-hover:border-2",
  },
  {
    name: "Linux (Ubuntu)",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Docker",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Kubernetes",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "AI",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "ML",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Arduino",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Blender",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Figma,Canva",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
  {
    name: "Photoshop",
    className: "bg-gray-200",
    hoverClass: "group-hover:scale-75 group-hover:text-gray-500",
  },
];

export default function IntegrationPills() {
  return (
    <div className="flex justify-center py-10">
      {/* Rectangular box around all cards with blue background */}
      <div className="group flex w-full max-w-lg flex-wrap justify-center rounded-xl border-2 border-gray-400 bg-blue-100 px-2 py-6 shadow-2xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-2xl">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={cn(
              "m-1 transform cursor-pointer rounded-full border-2 border-gray-400 bg-white px-6 py-2 text-xl text-black transition-transform duration-300 ease-in-out",
              brand.className,
              brand.hoverClass,
            )}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
}
