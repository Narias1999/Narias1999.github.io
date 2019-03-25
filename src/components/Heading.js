import React from "react";
import styles from "./Heading.module.css";

function Heading(props) {
  return <header className={styles.Heading}>{props.children}</header>;
}

export default Heading;
