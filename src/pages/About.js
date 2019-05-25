import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./../components/Heading";
import styles from "./About.module.css";
import Foto from "./../assets/profile.jpg";
import frontendImage from "./../assets/frontend.jpg";
import mobileImage from "./../assets/mobile.jpg";
import backendImage from "./../assets/backend.jpg";
import Button from "./../components/Button";
import SkillCard from "./../components/SkillCard";

const ListIcon = ({ name }) => (
  <div className={styles.ListIcon}>
    <FontAwesomeIcon icon={name} size="2x" />
  </div>
);

const MainListItem = ({ name, icon }) => (
  <li>
    <ListIcon name={icon} />
    <span>{name}</span>
  </li>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainList: [
        { icon: "desktop", name: "Web developer" },
        { icon: "mobile", name: "Mobile developer" },
        { icon: "meteor", name: "Lifelong learner" }
      ],
      skills: [
        {
          name: "Frontend",
          image: frontendImage,
          skillsList: [
            "Javascript (ES6+)",
            "HTML5 + CSS3",
            "React + Redux",
            "VueJS",
            "Responsive Design",
            "Sass"
          ]
        },
        {
          name: "Backend",
          image: backendImage,
          skillsList: [
            "NodeJs",
            "Scala",
            "GraphQl",
            "AWS",
            "Microservices",
            "Unit Testing",
          ]
        },
        {
          name: "Mobile",
          image: mobileImage,
          skillsList: [
            "React Native",
            "React Navigation",
            "Redux",
            "Flutter",
            "Dart"
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <Heading>
          <div className={styles.HeadingContainer}>
            <div className={styles.text}>
              <h1>Hi! I am Nicolás Arias</h1>
              <ul>
                {this.state.mainList.map(item => (
                  <MainListItem {...item} />
                ))}
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
            I was just 15 years old, till then I had not stopped learning. Do code
            has become one of my favorite hobbies, along with cycling, chess and
            music.
          </p>
          <Button text="View Resume" bordered />
        </section>
        <section className={styles.Skills}>
          <h2>What I know...</h2>
          <div>
            {this.state.skills.map(skill => (
              <SkillCard {...skill} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
