import React from "react";
import styles from "./SkillCard.module.css";

function SkillCard({ image, name }) {
  return (
    <div className={styles.skill}>
      <div className={styles.title}>
        <img src={image} />
        <h3>{name}</h3>
      </div>
      <div className={styles.listContainer}>
        <ul>
          <li>Skill</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
