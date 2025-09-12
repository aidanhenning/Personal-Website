import React from "react";
import propertyManagementApp from "../../assets/pm-app-snip.png";
import leagueSearchApp from "../../assets/LoL-search.png";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div id="portfolio" className="mx-auto px-[10%] mb-[10%]">
      <h2
        data-aos="fade-up"
        className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent pb-6"
      >
        Featured Projects
      </h2>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 px-8 py-8 rounded-2xl border border-gray-700/50 shadow-lg">
          <div className="flex items-center max-w-2xl overflow-hidden rounded-2xl">
            <img
              src={propertyManagementApp}
              alt="project image capture"
              className="transition duration-200 hover:scale-105"
            />
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
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  HTML
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  CSS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  REACT
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  NODE JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  EXPRESS JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 px-8 py-8 rounded-2xl border border-gray-700/50 shadow-lg">
          <div className="flex items-center max-w-2xl overflow-hidden rounded-2xl">
            <img
              src={leagueSearchApp}
              alt="project image capture"
              className="transition duration-200 hover:scale-105"
            />
          </div>
          <div className="flex items-center">
            <div>
              <h3 className="text-black dark:text-white text-xl md:text-2xl mb-3">
                Riot Games Search Engine
              </h3>
              <p className="text-black dark:text-gray-300 text-md mb-3">
                Built a full-stack League of Legends profile tracker that
                integrates with Riot’s Data Dragon and API to display player
                statistics, match history, ranked performance, and champion
                mastery. Designed modular, reusable React components for key
                features such as match summaries, ranked cards, and mastery
                overviews, with responsive layouts optimized for clarity and
                usability. Focused on clean data handling, API integration, and
                a polished UI to deliver an engaging and scalable experience.
              </p>
              <ul className="flex flex-wrap gap-2 text-black dark:text-white text-md">
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  HTML
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  CSS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  REACT
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  NODE JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
                  EXPRESS JS
                </li>
                <li className="text-sm px-1.5 py-1 rounded-full border border-gray-700/50">
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
