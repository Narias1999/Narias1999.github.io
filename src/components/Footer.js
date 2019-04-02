import React from "react";
import styles from "./Footer.module.css";
import Logo from "./../assets/logo.svg";
function Footer({}) {
  return (
    <footer>
      <div className={styles.Brand}>
        <img src={Logo} />
        <h4>Nicolás Arias</h4>
        <strong>Fullstack developer</strong>
      </div>
    </footer>
  );
}

export default Footer;
