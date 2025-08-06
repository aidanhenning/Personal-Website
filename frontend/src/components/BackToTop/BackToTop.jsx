import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          className="flex items-center gap-1 text-black dark:text-white font-semibold mb-[10%] animate-bounce hover:cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Back To Top <FaArrowUp />
        </button>
      </div>
    </>
  );
}
