import React from "react";
import styles from "./style.module.css";
import animation from "../../assets/animation/Animation.gif";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={animation} alt="Chargement en cours" />
    </div>
  );
};


export default Loader;
