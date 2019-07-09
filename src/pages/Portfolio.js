import React, { Component, Fragment } from "react";
import styles from "./Portfolio.module.css"
import Heading from "../components/Heading";
import Button from "../components/Button";
import Tabs from "../components/Tabs";


class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      projects: [{
        name: 'first-project',
        description: 'Awesome project',
        category: 'web',
        repository: 'https://github.com/narias1999/repo',
        images: ['url1']
      }],
      titles: ['All', 'Web', 'Mobile']
    }
  }

  render() {
    return <Fragment>
      <Heading>
        <div className={styles.header}>
          <h1>PORTFOLIO</h1>
          <p>Look for some of my awesome personal projects</p>
          <Button>Github</Button>
        </div>
      </Heading>
      <div>
        <Tabs titles={this.state.titles} ></Tabs>
      </div>
    </Fragment>
  }
}

export default Portfolio;
