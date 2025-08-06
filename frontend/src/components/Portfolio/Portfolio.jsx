import React from "react";
import portfolioImg from "../../assets/project-temp.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div id="portfolio" className="mx-auto px-[10%] mb-[10%]">
      <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-6">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 px-8 py-8 rounded-2xl border border-gray-700 shadow-lg">
          <div className="flex items-center rounded-2xl">
            <img src={portfolioImg} alt="project image capture" />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-black dark:text-white text-xl md:text-2xl mb-3">
                Capstone: Property Management App
              </h3>
              <p className="text-black dark:text-gray-300 text-md mb-3">
                Built a full-stack rental management platform with dual
                interfaces for property managers and residents to handle
                maintenance requests, rent payments, and community updates.
                Focused on usability and modular design to ensure scalability
                and a smooth user experience across devices.
              </p>
              <ul className="flex flex-wrap gap-2 text-black dark:text-white text-md mb-3">
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  HTML
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  CSS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  REACT
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  NODE JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  EXPRESS JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  POSTGRESQL
                </li>
              </ul>
              <a
                className="text-blue-500"
                href="https://cozy-melba-1a313f.netlify.app/"
                target="_blank"
              >
                <span className="flex items-center gap-2 font-semibold hover:cursor-pointer">
                  Live Demo
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 px-8 py-8 rounded-2xl border border-gray-700 shadow-lg">
          <div className="flex items-center">
            <img src={portfolioImg} alt="project image capture" />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-black dark:text-white text-xl md:text-2xl mb-3">
                Personal Portfolio Site
              </h3>
              <p className="text-black dark:text-gray-300 text-md mb-3">
                Developed a responsive, single-page personal portfolio website
                to showcase software development projects and technical skills.
                Implemented clean, accessible UI/UX design to highlight project
                details, GitHub repositories, and contact information.
              </p>
              <ul className="flex flex-wrap gap-2 text-black dark:text-white text-md">
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  HTML
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  CSS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  REACT
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700">
                  TAILWIND
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
