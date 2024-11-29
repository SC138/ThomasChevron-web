import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Banner.module.css";

const Banner = () => {
  // Hook pour suivre la progression du scroll
  const { scrollYProgress } = useScroll();

  // Transformations basées sur le scroll
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // Transparence de 1 à 0
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]); // Déplacement vers le haut

  return (
    <motion.section
      className={styles.bannerSection}
      style={{
        opacity: opacity, // Applique l'effet de fade-out
        y: y, // Déplacement vertical vers le haut
      }}
    >
      <div className={styles.bannerContent}>
        <h1>Thomas Chevron</h1>
        <p className={styles.subtitle}>
          Développeur Web Junior — JavaScript & React <br />
          Curieux, patient et passionné.
        </p>
      </div>
    </motion.section>
  );
};

export default Banner;