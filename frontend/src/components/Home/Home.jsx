import styles from "./Home.module.css";
import heroImage from "../../assets/personal-headshot.jpg";

function Home() {
  return (
    <>
      <section>
        <div>
          <h1>Hello, I'm Aidan Henning</h1>
          <h2>Fullstack Web Developer</h2>
          <address>📍 Santa Monica</address>
          <button>My Resume</button>
          <button>Contact Me</button>
        </div>
        <div>
          <img src={heroImage} alt="headshot of Aidan" width="200px" />
        </div>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>REACT</li>
          <li>NODE JS</li>
          <li>EXPRESS JS</li>
          <li>POSTGRESQL</li>
          <li>GIT</li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <div>
          <div>Personal Website</div>
          <div>Property Management App</div>
          <div>Artist Storefront</div>
        </div>
      </section>
      <section>
        <h2>Hire me!</h2>
      </section>
    </>
  );
}

export default Home;
