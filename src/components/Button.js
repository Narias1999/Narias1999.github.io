import React from "react";
import styles from "./Button.module.css";

function Button({ children, click, block, bordered, icon }) {
  let buttonStyles = [styles.Button];
  if (block) buttonStyles.push(styles.block);
  if (bordered) buttonStyles.push(styles.bordered);
  if (icon) buttonStyles.push(styles.icon)
  return (
    <button className={buttonStyles.join(" ")} onClick={click}>
      {children}
    </button>
  );
}

export default Button;
