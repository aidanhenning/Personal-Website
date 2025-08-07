import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init();

  return (
    <div id="about" className="mx-auto px-[10%] mb-[10%]">
      <h2
        data-aos="fade-up"
        className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent pb-6"
      >
        About Me
      </h2>
      <p
        data-aos="fade-up"
        className="text-center text-lg text-black dark:text-white mb-2"
      >
        Hi, I’m Aidan Henning - a Software Developer and recent graduate of
        Fullstack Academy with a background in real estate management.
      </p>
      <p
        data-aos="fade-up"
        className="text-center text-lg text-black dark:text-white mb-2"
      >
        While managing multifamily properties, I discovered my interest in
        coding. What started as a personal curiosity quickly grew into a genuine
        passion for building projects and solving complex problems. As a result,
        I decided to make a career pivot and enroll in a software development
        bootcamp.
      </p>
      <p
        data-aos="fade-up"
        className="text-center text-lg text-black dark:text-white mb-2"
      >
        Today, I enjoy applying my problem-solving skills, creativity, and
        attention to detail to build applications that create real value for
        people. I’m excited to grow as a fullstack developer, learn from
        experienced teams, and contribute to building meaningful web
        applications that improve people’s lives.
      </p>
    </div>
  );
}
