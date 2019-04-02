import React from "react";
import styles from "./Button.module.css";

function Button({ text, click, block }) {
  let buttonStyles = [styles.Button];
  if (block) buttonStyles.push(styles.block);
  return (
    <button className={buttonStyles.join(" ")} onClick={click}>
      {text}
    </button>
  );
}

export default Button;
