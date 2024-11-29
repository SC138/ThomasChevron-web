import React from "react";
import styles from "./About.module.css";
import portrait from "../../assets/img/portrait.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className={styles.aboutSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.aboutContent}>
        <img
          src={portrait}
          alt="Portrait de Thomas Chevron"
          className={styles.portrait}
        />
        <div className={styles.textContent}>
          <h2>À propos de moi</h2>
          <p>
            Je suis un développeur passionné, spécialisé en JavaScript et React.
            J'aime relever les défis et créer des projets accessibles, performants,
            et innovants.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;