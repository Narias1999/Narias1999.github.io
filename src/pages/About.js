import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./../components/Heading";
import styles from "./About.module.css";
import Foto from "./../assets/profile.jpg";
import Button from "./../components/Button";

const ListIcon = ({ name }) => (
  <div className={styles.ListIcon}>
    <FontAwesomeIcon icon={name} size="2x" />
  </div>
);

class Home extends Component {
  render() {
    return (
      <Fragment>
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
              <Button text="Say Hello" block />
            </figure>
          </div>
        </Heading>
        <section className={styles.Extract}>
          <h2>About me</h2>
          <p>
            I'm a Colombian based developer, with more than two years of work
            experience, where I've been part of big and small agile teams.
            Working mainly with web and mobile technologies.
          </p>
          <p>
            I started learning to develop and design software applications when
            I was just 15 years old, till then I won't stop learning and do code
            becomes like one of my favorite hobbies, along with cycling and
            music.
          </p>
          <Button text="Ask a question" bordered />
        </section>
        <section className={styles.Skills}>f</section>
      </Fragment>
    );
  }
}

export default Home;
