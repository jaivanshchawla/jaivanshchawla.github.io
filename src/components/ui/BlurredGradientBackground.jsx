import React from "react";

export default function BlurredGradientBackground({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 ${className}`}
      style={{ overflow: "visible" }}
    >
      <div
        style={{
          width: "70vw",
          height: "30vh",
          maxWidth: 900,
          minWidth: 320,
          maxHeight: 400,
          minHeight: 120,
          background: "radial-gradient(ellipse at 50% 40%, #60a5fa 0%, #f472b6 40%, #fb7185 65%, #f59e42 100%)",
          filter: "blur(48px)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}
