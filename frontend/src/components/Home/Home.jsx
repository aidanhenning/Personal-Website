import styles from "./Home.module.css";
import heroImage from "../../assets/personal-headshot.jpg";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Hello, I'm <br /> Aidan Henning
          </h1>
          <p>Fullstack Web Developer</p>
          <address>📍 Santa Monica</address>
          <div className={styles.heroButtons}>
            <button className="btn btn-primary">My Resume</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="headshot of Aidan" width="200px" />
        </div>
      </section>
      <section className={styles.skills}>
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
      <section className={styles.projects}>
        <h2>Projects</h2>
        <div>
          <div>Personal Website</div>
          <div>Property Management App</div>
          <div>Artist Storefront</div>
        </div>
      </section>
      <section className={styles.cta}>
        <h2>Hire me!</h2>
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
