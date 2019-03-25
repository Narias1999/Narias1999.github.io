import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigator.module.css";
import Foto from "./../assets/logo.svg";

function Navigator() {
  return (
    <nav className={styles.Navigator}>
      <div className={styles.Right}>
        <img src={Foto} alt="profile" />
        <div>
          <h4>Nicolás Arias</h4>
          <p>Fullstack Developer</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName={styles.active}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName={styles.active}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigator;
