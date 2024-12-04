import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.cupContainer}>
        <div className={styles.cup}>
          <div className={styles["cup-handle"]}></div>
        </div>
        <div className={styles.base}></div>
        <div className={styles.textContainer}>
          <p className={styles.text}>Chargement...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
