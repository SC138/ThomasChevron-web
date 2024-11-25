import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/Animation.json";
import styles from "./style.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "400px", height: "400px" }}
      />
    </div>
  );
};

export default Loader;
