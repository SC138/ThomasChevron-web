import React from "react";
import styles from "./About.module.css";
import banner from "../../assets/img/banniere.jpg";
import portrait from "../../assets/img/portrait.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className={styles.aboutSection}
      initial={{ opacity: 0, y: 50 }} // Point de départ (invisible et décalé vers le bas)
      whileInView={{ opacity: 1, y: 0 }} // Apparition en douceur
      transition={{ duration: 2 }} // Durée de l'animation
      viewport={{ once: true }} // Déclenchement une seule fois
    >
      <section id="about" className={styles.aboutSection}>
        <div className={styles.bannerContainer}>
          <img src={banner} alt="Bannière" className={styles.banner} />
          <div className={styles.overlay}>
            <div className={styles.portraitContainer}>
              <img
                src={portrait}
                alt="Portrait de Thomas Chevron"
                className={styles.portrait}
              />
            </div>
            <div className={styles.textOverlay}>
              <h2 className={styles.title}>Thomas Chevron</h2>
              <p className={styles.text}>
                Développeur Web Junior – JavaScript & React <br />
                Curieux, patient et passionné, je transforme les idées en
                projets accessibles et innovants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default About;
