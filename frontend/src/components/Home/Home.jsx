import styles from "./Home.module.css";
import htmlLogo from "../../assets/icons8-html-5.svg";
import cssLogo from "../../assets/icons8-css3.svg";
import javascriptLogo from "../../assets/icons8-javascript.svg";
import reactLogo from "../../assets/icons8-react.svg";
import nodejsLogo from "../../assets/icons8-node-js.svg";
import expressLogo from "../../assets/icons8-express-js.svg";
import postgresqlLogo from "../../assets/icons8-postgresql.svg";
import vscodeLogo from "../../assets/icons8-visual-studio-code-2019.svg";
import gitLogo from "../../assets/icons8-git.svg";
import githubLogo from "../../assets/icons8-github.svg";
import projectTemp from "../../assets/project-temp.jpg";
import aiProfile from "../../assets/ai-profile.jpg";
import frontendIcon from "../../assets/icons8-code-100.png";
import backendIcon from "../../assets/icons8-server-100.png";
import databaseIcon from "../../assets/icons8-database-100.png";
import toolsIcon from "../../assets/icons8-tools-96.png";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Hello, I'm <br /> <span className={styles.name}>Aidan Henning</span>
          </h1>
          <p>Fullstack Web Developer</p>
          <address>📍 Santa Monica, CA</address>
          <div className={styles.heroButtons}>
            <button className="btn btn-primary">
              My Resume <ion-icon name="download-outline"></ion-icon>
            </button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroImage}
            src={aiProfile}
            alt="headshot of Aidan"
          />
        </div>
      </section>

      <hr />

      <section className={styles.skills}>
        <h2 className={styles.skillsHeader}>My Stack</h2>
        <div className={styles.skillsCards}>
          <div className={styles.skillsCard}>
            <div className={styles.skillsCardHeader}>
              <img src={frontendIcon} alt="frontend icon" />
              <h3>Frontend</h3>
            </div>
            <ul>
              <li>
                <img src={htmlLogo} alt="html logo" />
                <p>HTML</p>
              </li>
              <li>
                <img src={cssLogo} alt="css logo" />
                <p>CSS</p>
              </li>
              <li>
                <img src={javascriptLogo} alt="javascript logo" />
                <p>Javascript</p>
              </li>
              <li>
                <img src={reactLogo} alt="react logo" />
                <p>React</p>
              </li>
            </ul>
          </div>
          <div className={styles.skillsCard}>
            <div className={styles.skillsCardHeader}>
              <img src={backendIcon} alt="backend icon" />
              <h3>Backend</h3>
            </div>
            <ul>
              <li>
                <img src={nodejsLogo} alt="node js logo" />
                <p>Node JS</p>
              </li>
              <li>
                <img src={expressLogo} alt="express js logo" />
                <p>Express JS</p>
              </li>
            </ul>
          </div>
          <div className={styles.skillsCard}>
            <div className={styles.skillsCardHeader}>
              <img src={databaseIcon} alt="database icon" />
              <h3>Database</h3>
            </div>
            <ul>
              <li>
                <img src={postgresqlLogo} alt="postgresql logo" />
                <p>Postgresql</p>
              </li>
            </ul>
          </div>
          <div className={styles.skillsCard}>
            <div className={styles.skillsCardHeader}>
              <img src={toolsIcon} alt="tools icon" />
              <h3>Tools</h3>
            </div>
            <ul>
              <li>
                <img src={vscodeLogo} alt="vscode logo" />
                <p>VSCode</p>
              </li>
              <li>
                <img src={gitLogo} alt="git logo" />
                <p>GIT</p>
              </li>
              <li>
                <img src={githubLogo} alt="github logo" />
                <p>Github</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      <section className={styles.projects}>
        <h2>Featured Work</h2>
        <div className={styles.projectCards}>
          <div class={styles.projectCard}>
            <div class={styles.projectImageContainer}>
              <img src={projectTemp} alt="website snapshot" />
            </div>
            <div class={styles.projectCardDescription}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                pariatur esse rerum? Maiores, nemo! Qui cupiditate, natus
                consequatur sint labore eos doloribus, minus veritatis nostrum
                eius placeat. Ratione, mollitia facere!
              </p>
              <div class={styles.projectTechButtons}>
                <p class={styles.projectTechButton}>html</p>
                <p class={styles.projectTechButton}>css</p>
                <p class={styles.projectTechButton}>javascript</p>
                <p class={styles.projectTechButton}>react</p>
              </div>
              <button className="btn btn-primary">Explore →</button>
            </div>
          </div>

          <div class={styles.projectCard}>
            <div class={styles.projectImageContainer}>
              <img src={projectTemp} alt="website snapshot" />
            </div>
            <div class={styles.projectCardDescription}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                pariatur esse rerum? Maiores, nemo! Qui cupiditate, natus
                consequatur sint labore eos doloribus, minus veritatis nostrum
                eius placeat. Ratione, mollitia facere!
              </p>
              <div class={styles.projectTechButtons}>
                <p class={styles.projectTechButton}>html</p>
                <p class={styles.projectTechButton}>css</p>
                <p class={styles.projectTechButton}>javascript</p>
                <p class={styles.projectTechButton}>react</p>
              </div>
              <button className="btn btn-primary">Explore →</button>
            </div>
          </div>

          <div class={styles.projectCard}>
            <div class={styles.projectImageContainer}>
              <img src={projectTemp} alt="website snapshot" />
            </div>
            <div class={styles.projectCardDescription}>
              <h2>Project Title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                pariatur esse rerum? Maiores, nemo! Qui cupiditate, natus
                consequatur sint labore eos doloribus, minus veritatis nostrum
                eius placeat. Ratione, mollitia facere!
              </p>
              <div class={styles.projectTechButtons}>
                <p class={styles.projectTechButton}>html</p>
                <p class={styles.projectTechButton}>css</p>
                <p class={styles.projectTechButton}>javascript</p>
                <p class={styles.projectTechButton}>react</p>
              </div>
              <button className="btn btn-primary">Explore →</button>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className={styles.cta}>
        <h2 className={styles.ctaHeader}>Hire me!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          perspiciatis. Beatae autem veniam sequi temporibus asperiores, tenetur
          voluptas aliquam repellat, officiis id saepe ad magnam culpa
          aspernatur necessitatibus vel quos! Velit repellendus pariatur
          perspiciatis, nesciunt numquam provident illum? Sint numquam beatae
          assumenda eius cumque, a obcaecati mollitia. Dolorem quasi, impedit
          nemo repudiandae molestias culpa? Esse repellat omnis facere maxime
          dolor! Dolores ratione ducimus officia reprehenderit quae ad, libero
          perferendis provident atque laborum animi laboriosam at, veniam
          obcaecati doloribus sit quasi excepturi optio voluptatibus eius illum
          eligendi tempore. Exercitationem, illo est. Esse libero ea non sequi
          suscipit quaerat rem nam veritatis ut, mollitia amet provident,
          doloribus aspernatur quos! Possimus alias libero neque id blanditiis
          ex molestias suscipit, sed enim labore quia. Voluptate incidunt
          quisquam dolorem tenetur provident illum consequatur ea asperiores.
          Fugiat, saepe nobis! Beatae quam sunt enim, aspernatur perspiciatis
          consequuntur aut laboriosam eius cupiditate quasi consequatur, quis
          animi, dolores a. Quas aspernatur nihil expedita? Aspernatur eligendi
          velit quaerat? Facere porro reprehenderit sunt nihil accusamus
          necessitatibus officia atque! Beatae magnam sunt culpa sequi provident
          cupiditate, quisquam expedita. Odio, quis fugiat. Dolorem? Veritatis
          facere adipisci, tempora maiores, explicabo hic ipsa quos sit quidem
          commodi corrupti voluptatibus quisquam ad. Quas animi earum eos.
          Corporis optio error ipsam quisquam delectus iste voluptas non nam?
          Sunt culpa libero commodi natus sed dolor cum amet quam quaerat,
          itaque doloremque magni sit? Magni soluta nulla aliquid voluptatum
          porro incidunt quod aspernatur, accusamus assumenda magnam a rem
          consequatur! Numquam quos beatae cupiditate, hic nobis ducimus minima
          et eligendi exercitationem inventore. Eius velit ipsum aut omnis
          tempora eum, reprehenderit impedit dolore enim? Dolorum voluptates
          quibusdam, sapiente esse sit sunt. Quibusdam alias laborum, error
          explicabo quos obcaecati! Repellendus minima delectus dolorum quod
          fugit culpa velit, accusantium cumque, illum voluptate suscipit iusto
          ullam ab inventore tempora fuga perspiciatis laborum? Aspernatur,
          odit?
        </p>
      </section>
    </>
  );
}

export default Home;
