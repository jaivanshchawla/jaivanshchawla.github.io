import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-32 text-center">
      <div className="absolute inset-0 h-full w-full">
        {/* Placeholder for your gradient footer background image */}
        {/* Add the background gradient later using a bg-gradient or bg-[url(...)] class */}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto bg-black bg-opacity-60 rounded-t-3xl px-8 py-12 flex flex-col items-center backdrop-blur-sm">
        {/* Contact Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-gradient-to-br from-[#F1DFA3] to-[#EAC67A] bg-clip-text animate-fade-in"
        >
          CONTACT
        </h1>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
            <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="mailto:email@example.com" className="hover:scale-110 transition duration-300">
            <img src="/icons/email.svg" alt="Email" className="w-8 h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col items-center text-gray-300 text-sm gap-2 animate-fade-in">
          <a href="/" className="hover:text-white font-medium transition-colors duration-300">coolguyjc</a>

          <div className="flex gap-2 justify-center flex-wrap">
            <span>email@example.com</span>
            <span>|</span>
            <span>+91-9876543210</span>
          </div>

          <div className="flex gap-2 justify-center flex-wrap">
            <span>Jaivansh Chawla</span>
            <span>|</span>
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Copyright below rectangle */}
      <p className="text-gray-500 text-xs mt-4 animate-fade-in">© 2025 JC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
