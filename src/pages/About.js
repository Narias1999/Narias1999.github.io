import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./../components/Heading";
import styles from "./About.module.css";
import Foto from "./../assets/profile.jpg";

const ListIcon = ({ name }) => (
  <div className={styles.ListIcon}>
    <FontAwesomeIcon icon={name} size="2x" />
  </div>
);

class Home extends Component {
  render() {
    return (
      <Heading>
        <div className={styles.HeadingContainer}>
          <div className="text">
            <h1>Hi! I am Nicolás Arias</h1>
            <ul>
              <li>
                <ListIcon name="desktop" />
                <span>Web developer</span>
              </li>
              <li>
                <ListIcon name="mobile" />
                <span>Mobile developer</span>
              </li>
              <li>
                <ListIcon name="meteor" />
                <span>Lifelong learner</span>
              </li>
            </ul>
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
