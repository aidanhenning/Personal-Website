import React from "react";

export default function BackToTop() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  return (
    <>
      <button onClick={() => scrollToSection("header")}>Back To Top</button>
    </>
  );
}
