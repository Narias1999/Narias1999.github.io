import React, {useState, useEffect} from "react";
import styles from "./Tabs.module.css";

function Tab ({accesor, data}) {
    return <div>
    </div>
}

function Tabs({ titles, accesors, data }) {

  const [active, setActive] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {titles.map((title, i) => <a 
        className={i === active ? styles.active : null}
        onClick={() => setActive(i)}>{title}</a>)}
      </div>
    </div>
  );
}

export default Tabs;
