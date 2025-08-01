"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./sizenav";

export function NavbarDemo() {
  const navItems = [
    { name: "About", link: "#about-section" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience-section" },
    { name: "Projects", link: "#highlights-section" },
    { name: "Skills", link: "#skills-section" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    link: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleSmoothScroll} />
        <div className="flex items-center gap-4">
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
  <NavbarButton variant="secondary">Resume</NavbarButton>
</a>
          <NavbarButton
            variant="customGrey"
            onClick={(e) => handleSmoothScroll(e, "#footer-section")}
          >
            Contact
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => handleSmoothScroll(e, item.link)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
  onClick={() => {
    setIsMobileMenuOpen(false);
    window.open('/assets/resume.pdf', '_blank');
  }}
  variant="customGreen"
  className="w-full"
>
  Resume
</NavbarButton>
            <NavbarButton
              onClick={(e) => handleSmoothScroll(e, "#footer-section")}
              variant="customSilver"
              className="w-full"
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
