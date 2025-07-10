import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div>
        <NavLink to="/">Logo</NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
