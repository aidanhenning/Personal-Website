import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                <span>01</span>
                <p>// Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                <span>02</span>
                <p>// Work</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                <span>03</span>
                <p>// About</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                <span>04</span>
                <p>// Contact</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
