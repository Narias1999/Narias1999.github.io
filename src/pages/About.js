import React, { Component } from "react";
import Heading from "./../components/Heading";
import styles from "./About.module.css";
import Foto from "./../assets/profile.jpg";

class Home extends Component {
  render() {
    return (
      <Heading>
        <div className={styles.HeadingContainer}>
          <div className="text">
            <h1>Hi! I am Nicolás Arias</h1>
            <p>I'm a mobile and web fullstack developer, self tought</p>
          </div>
          <figure>
            <img src={Foto} />
          </figure>
        </div>
      </Heading>
    );
  }
}

export default Home;
