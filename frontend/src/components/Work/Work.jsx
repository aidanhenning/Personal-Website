import styles from "./Work.module.css";
import projectTemp from "../../assets/project-temp.jpg";

function Work() {
  return (
    <section className={styles.work}>
      <h2>My Work</h2>
      <ul className={styles.cards}>
        <li className={styles.card}>
          <img src={projectTemp} alt="temp project image" />
          <div>
            <h3>Project title</h3>
            <p>description</p>
            <a href="#">website.com</a>
          </div>
        </li>
        <li className={styles.card}>
          <img src={projectTemp} alt="temp project image" />
          <div>
            <h3>Project title</h3>
            <p>description</p>
            <a href="#">website.com</a>
          </div>
        </li>
        <li className={styles.card}>
          <img src={projectTemp} alt="temp project image" />
          <div>
            <h3>Project title</h3>
            <p>description</p>
            <a href="#">website.com</a>
          </div>
        </li>
        <li className={styles.card}>
          <img src={projectTemp} alt="temp project image" />
          <div>
            <h3>Project title</h3>
            <p>description</p>
            <a href="#">website.com</a>
          </div>
        </li>
        <li className={styles.card}>
          <img src={projectTemp} alt="temp project image" />
          <div>
            <h3>Project title</h3>
            <p>description</p>
            <a href="#">website.com</a>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Work;
