import React from "react";
import styles from "./SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialItem = ({ url, icon, color }) => (
  <div className={styles.item} style={{ backgroundColor: color }}>
    <a href={url} target="__blank">
      <FontAwesomeIcon className={styles.icon} icon={["fab", icon]} />
    </a>
  </div>
);

function SocialMedia({}) {
  const items = [
    {
      url: "https://github.com/Narias1999",
      icon: "github",
      color: "#24292e"
    },
    {
      url: "https://twitter.com/nmarias_dev",
      icon: "twitter",
      color: "#00acee"
    },
    {
      url: "https://medium.com/@nmariasdev",
      icon: "medium",
      color: "#000"
    }
  ];

  return (
    <div className={styles.SocialMedia}>
      {items.map(item => (
        <SocialItem {...item} key={item.icon} />
      ))}
    </div>
  );
}

export default SocialMedia;
