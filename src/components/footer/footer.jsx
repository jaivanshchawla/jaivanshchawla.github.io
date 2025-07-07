import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full flex flex-col items-center text-center">
      {/* Semi-transparent black box */}
      <div className="w-full max-w-6xl mx-auto bg-black/70 py-10 px-4 rounded-t-2xl flex flex-col gap-6">
        
        {/* Contact heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">Contact</h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {/* Replace # with your links */}
          <a href="#" className="hover:scale-110 transition">
            <img src="/github-icon.svg" alt="GitHub" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <img src="/email-icon.svg" alt="Email" className="h-8 w-8" />
          </a>
          <a href="#" className="hover:scale-110 transition">
            <img src="/instagram-icon.svg" alt="Instagram" className="h-8 w-8" />
          </a>
        </div>

        {/* Bottom info split in three */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm gap-2 mt-6">
          {/* coolguyjc link */}
          <a href="/" className="hover:text-white font-medium">coolguyjc</a>

          {/* email & phone */}
          <div className="flex gap-2 flex-wrap justify-center">
            <span>email@example.com</span>
            <span>|</span>
            <span>+91-9876543210</span>
          </div>

          {/* name & location */}
          <div className="flex gap-2 flex-wrap justify-center">
            <span>Jaivansh Chawla</span>
            <span>|</span>
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Copyright text outside the box */}
      <p className="text-gray-400 text-xs mt-2 mb-4">Copyright © JC</p>
    </footer>
  );
}
