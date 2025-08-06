import React from "react";
import { useState } from "react";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Header({ isDark, setIsDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  }

  const navLinks = (
    <>
      <li
        className="text-black dark:text-white hover:text-indigo-500 hover:cursor-pointer text-md font-semibold hover:transition hover:duration-300"
        onClick={() => scrollToSection("about")}
      >
        About
      </li>
      <li
        className="text-black dark:text-white hover:text-indigo-500 hover:cursor-pointer text-md font-semibold hover:transition hover:duration-300"
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </li>
      <li
        className="text-black dark:text-white hover:text-indigo-500 hover:cursor-pointer text-md font-semibold hover:transition hover:duration-300"
        onClick={() => scrollToSection("portfolio")}
      >
        Portfolio
      </li>
      <li
        className="text-black dark:text-white hover:text-indigo-500 hover:cursor-pointer text-md font-semibold hover:transition hover:duration-300"
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </li>
      <li>
        <button
          className="text-black dark:text-white hover:text-amber-300  dark:hover:text-gray-400 hover:cursor-pointer text-md font-semibold hover:transition hover:duration-300"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <FiMoon /> : <LuSun />}
        </button>
      </li>
    </>
  );

  return (
    <div
      id="header"
      className="fixed w-full bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl z-1"
    >
      <nav className="flex items-center justify-between mx-auto px-[10%] py-4 relative">
        <div className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
          Aidan Henning
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 items-center">{navLinks}</ul>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <RxCross1 className="text-black dark:text-white" size={24} />
            ) : (
              <RxHamburgerMenu
                className="text-black dark:text-white"
                size={24}
              />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white dark:bg-zinc-800 text-black dark:text-white flex flex-col items-center space-y-4 py-6 md:hidden shadow-md z-10">
            {navLinks}
          </ul>
        )}
      </nav>
    </div>
  );
}
