import React from "react";
import styles from "./Footer.module.css";
import Logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

function Footer({}) {
  return (
    <footer>
      <div className={styles.Brand}>
        <img src={Logo} />
        <h4>Nicolás Arias</h4>
        <strong>Fullstack developer</strong>
      </div>
      <div className={styles.Menu}>
        <h4>Menú</h4>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.Contact}>
        <h4>Find me at</h4>
        <SocialMedia />
        <h4 style={{ marginTop: 10 }}>Or write me an email</h4>
        <p className={styles.mail}>
          <a href="mailto:nicolasarias870@gmail.com">
            nicolasarias870@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
