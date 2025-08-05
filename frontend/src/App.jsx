import "./App.css";
import { useState } from "react";
import About from "./components/About/About";
import BackToTop from "./components/BackToTop/BackToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className={`${isDark ? "dark" : ""} bg-white dark:bg-zinc-800`}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
