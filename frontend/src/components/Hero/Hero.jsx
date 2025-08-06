import React from "react";
import Lottie from "lottie-react";
import animation from "../../assets/Programming Animation.json";

export default function Hero() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  }
  return (
    <div className="flex min-h-screen overflow-hidden pt-24 md:pt-0">
      <div className="flex-grow mx-auto px-[10%] flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-3">
        <div className="text-start space-y-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-black dark:text-white">Hi, I'm</span> <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Aidan Henning
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-950 to-gray-600 dark:bg-gradient-to-r dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
            Full Stack Developer
          </p>
          <address className="text-md text-black dark:text-white">
            📍 Santa Monica, CA
          </address>
          <p className="text-lg text-black dark:text-white">
            Enhancing digital experiences that are smooth, scalable, and made to
            impress.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-1.5 text-white font-semibold bg-gradient-to-r from-[#6366f1] to-[#a855f7] py-2 px-4 rounded hover:cursor-pointer">
              Resume <ion-icon name="cloud-download"></ion-icon>
            </button>
            <button
              className="flex items-center justify-center gap-1.5 text-black dark:text-white font-semibold bg-gray-400/20 py-2 px-4 rounded hover:bg-gray-500/20 hover:cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Connect With Me <ion-icon name="arrow-forward"></ion-icon>
            </button>
          </div>
        </div>
        <div className="text-center mb-12">
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  );
}
