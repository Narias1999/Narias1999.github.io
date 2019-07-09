import React, { Component, Fragment } from "react";
import Heading from "../components/Heading";
import styles from "./Resume.module.css"
import Button from "../components/Button"
import english from "./../assets/english.svg";
import spanish from "./../assets/spanish.svg";

class Resume extends Component {
  render() {
    return <Fragment>
      <Heading>
        <div className={styles.header}>
          <h1>RESUME</h1>
          <div className={styles.downloads}>
            <Button icon><img src={english} /></Button>
            <Button icon><img src={spanish} /></Button>
          </div>
        </div>
      </Heading>
      <div>
      </div>
    </Fragment>
  }
}

export default Resume;
