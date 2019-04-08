import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./../components/Heading";
import styles from "./About.module.css";
import Foto from "./../assets/profile.jpg";
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
          image:
            "https://www.intimediastudio.com/wp-content/uploads/2018/06/Responsive4.png",
          skillsList: [
            "Javascript (ES6+)",
            "React + Redux",
            "VueJS",
            "HTML5 + CSS3",
            "Sass"
          ]
        },
        {
          name: "Backend",
          image:
            "https://www.intimediastudio.com/wp-content/uploads/2018/06/Responsive4.png",
          skillsList: [
            "Javascript (ES6+)",
            "React + Redux",
            "VueJS",
            "HTML5 + CSS3",
            "Sass"
          ]
        },
        {
          name: "Frontend",
          image:
            "https://www.intimediastudio.com/wp-content/uploads/2018/06/Responsive4.png",
          skillsList: [
            "Javascript (ES6+)",
            "React + Redux",
            "VueJS",
            "HTML5 + CSS3",
            "Sass"
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
            I was just 15 years old, till then I won't stop learning and do code
            becomes like one of my favorite hobbies, along with cycling and
            music.
          </p>
          <Button text="Ask a question" bordered />
        </section>
        <section className={styles.Skills}>
          <h2>Skills</h2>
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
