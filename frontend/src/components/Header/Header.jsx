import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" className={styles.navLink}>
                Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.navLink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
