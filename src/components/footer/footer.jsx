import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-32 text-center overflow-hidden">
      {/* 🌄 Background Gradient Image */}
      <div className="absolute inset-0 h-full w-full z-0 bg-[url('/assets/footer-gradient.svg')] bg-cover bg-center bg-no-repeat" />

      {/* ✨ Pure blur panel with no background color or border */}
      <div className="relative z-10 max-w-4xl mx-auto rounded-t-3xl px-8 py-12 flex flex-col items-center backdrop-blur-md">
        {/* Contact Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-gradient-to-br from-[#F1DFA3] to-[#EAC67A] bg-clip-text animate-fade-in">
          CONTACT
        </h1>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in">
          {[
            { href: "https://github.com", alt: "GitHub", src: "/assets/githublogo.svg" },
            { href: "https://linkedin.com", alt: "LinkedIn", src: "/assets/linkedinlogo.webp" },
            { href: "mailto:email@example.com", alt: "Email", src: "/assets/gmaillogo.svg" },
            { href: "https://instagram.com", alt: "Instagram", src: "/assets/instalogo.svg" },
          ].map(({ href, alt, src }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform transform hover:scale-110 duration-300"
            >
              <img
                src={src}
                alt={alt}
                className="w-8 h-8 transition duration-300 grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100"
                style={{ filter: "invert(0.8)", transition: "filter 0.3s" }}
              />
            </a>
          ))}
        </div>

        {/* Spacer gap between buttons and text */}
        <div className="h-8" />

        {/* Contact Info */}
        <div className="flex flex-col items-center text-gray-300 text-sm gap-2 animate-fade-in">
          <a href="/" className="hover:text-white font-medium transition-colors duration-300">coolguyjc</a>

          <div className="flex gap-2 justify-center flex-wrap">
            <span>jaivanshmuj@gmail.com</span>
            <span>|</span>
            <span>+91-9654263346</span>
          </div>

          <div className="flex gap-2 justify-center flex-wrap">
            <span>Jaivansh Chawla</span>
            <span>|</span>
            <span>Gurugram/Jaipur, India</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs mt-4 z-10 relative animate-fade-in">
        © 2025 JC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
