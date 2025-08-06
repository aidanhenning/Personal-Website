import React from "react";
import FrontEndIcon from "../../assets/icons8-code-100.png";
import BackEndIcon from "../../assets/icons8-server-100.png";
import DatabaseIcon from "../../assets/icons8-database-100.png";
import ToolsIcon from "../../assets/icons8-tools-96.png";
import htmlIcon from "../../assets/icons8-html-5.svg";
import cssIcon from "../../assets/icons8-css3.svg";
import jsIcon from "../../assets/icons8-javascript.svg";
import reactIcon from "../../assets/icons8-react.svg";
import tailwindIcon from "../../assets/icons8-tailwindcss.svg";
import nodeIcon from "../../assets/icons8-node-js.svg";
import expressIcon from "../../assets/icons8-express-js.svg";
import postgresqlIcon from "../../assets/icons8-postgresql.svg";
import vscodeIcon from "../../assets/icons8-visual-studio-code-2019.svg";
import gitIcon from "../../assets/icons8-git.svg";
import githubIcon from "../../assets/icons8-github.svg";
import figmaIcon from "../../assets/icons8-figma.svg";

export default function Skills() {
  return (
    <div id="skills" className="mx-auto px-[10%] mb-[10%]">
      <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-6">
        Technical Skills
      </h2>
      <p className="text-center text-lg text-black dark:text-white mb-10">
        I've gained proficiency in various technologies throughout my career.
        Here are the key tools and frameworks I use to build exceptional
        products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-lg hover:transition hover:duration-300">
          <h3 className="flex items-center gap-2 text-xl text-black dark:text-white font-semibold mb-4">
            <img className="max-w-6" src={FrontEndIcon} alt="front end icon" />
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={htmlIcon} alt="html icon" />
                <span className="text-sm text-black dark:text-white">HTML</span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={cssIcon} alt="css icon" />
                <span className="text-sm text-black dark:text-white">CSS</span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={jsIcon} alt="javascript icon" />
                <span className="text-sm text-black dark:text-white">
                  JAVASCRIPT
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={reactIcon} alt="react icon" />
                <span className="text-sm text-black dark:text-white">
                  REACT
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img
                  className="w-4 h-4"
                  src={tailwindIcon}
                  alt="tailwind icon"
                />
                <span className="text-sm text-black dark:text-white">
                  TAILWIND CSS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-lg hover:transition hover:duration-300">
          <h3 className="flex items-center gap-2 text-xl text-black dark:text-white font-semibold mb-4">
            <img className="max-w-6" src={BackEndIcon} alt="back end icon" />
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={nodeIcon} alt="node icon" />
                <span className="text-sm text-black dark:text-white">
                  NODE JS
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={expressIcon} alt="express icon" />
                <span className="text-sm text-black dark:text-white">
                  EXPRESS JS
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-lg hover:transition hover:duration-300">
          <h3 className="flex items-center gap-2 text-xl text-black dark:text-white font-semibold mb-4">
            <img className="max-w-6" src={DatabaseIcon} alt="database icon" />
            Database
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img
                  className="w-4 h-4"
                  src={postgresqlIcon}
                  alt="postgresql icon"
                />
                <span className="text-sm text-black dark:text-white">
                  POSTGRESQL
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-lg hover:transition hover:duration-300">
          <h3 className="flex items-center gap-2 text-xl text-black dark:text-white font-semibold mb-4">
            <img className="w-4 h-4" src={ToolsIcon} alt="tools icon" />
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={vscodeIcon} alt="vscode icon" />
                <span className="text-sm text-black dark:text-white">
                  VSCODE
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={gitIcon} alt="git icon" />
                <span className="text-sm text-black dark:text-white">GIT</span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={githubIcon} alt="github icon" />
                <span className="text-sm text-black dark:text-white">
                  GITHUB
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-full border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:transition hover:duration-300">
                <img className="w-4 h-4" src={figmaIcon} alt="figma icon" />
                <span className="text-sm text-black dark:text-white">
                  FIGMA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
