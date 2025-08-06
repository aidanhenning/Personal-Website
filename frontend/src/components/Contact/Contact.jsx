import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const recipientEmail = "henningaidan@gmail.com";
  const subject = "Inquiry about your service";
  const body = "Hello, I would like to inquire about...";

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="mx-auto px-[10%] mb-[10%]">
      <h2
        data-aos="fade-up"
        className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-6"
      >
        Connect With Me
      </h2>
      <p
        data-aos="fade-up"
        className="text-center text-md text-black dark:text-white mb-6"
      >
        Feel free to connect with me on these platforms to discuss tech, share
        ideas, or just say hello!
      </p>
      <div className="flex flex-wrap gap-6 items-center justify-center">
        <a
          data-aos="fade-up-right"
          href="https://github.com/aidanhenning"
          target="_blank"
          className="flex flex-col items-center text-black dark:text-white bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:cursor-pointer hover:transition hover:duration-300"
        >
          <FaGithub /> Github
        </a>

        <a
          data-aos="fade-up"
          href="https://www.linkedin.com/in/aidanhenning/"
          target="_blank"
          className="flex flex-col items-center text-black dark:text-white bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:cursor-pointer hover:transition hover:duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <div
          data-aos="fade-up-left"
          onClick={handleEmailClick}
          className="flex flex-col items-center text-black dark:text-white bg-white dark:bg-zinc-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/20 hover:cursor-pointer hover:transition hover:duration-300"
        >
          <MdEmail /> Email
        </div>
      </div>
    </div>
  );
}
