import React from "react";
import styles from "./About.module.css";
import banner from "../../assets/img/banniere.jpg";
import portrait from "../../assets/img/portrait.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className={styles.aboutSection}
      initial={{ opacity: 0, y: 50 }} // L'élément commence invisible et décalé vers le bas
      whileInView={{ opacity: 1, y: 0 }} // Apparaît avec une transition fluide
      transition={{ duration: 2 }} // Animation qui dure 2 secondes
      viewport={{ once: true }} // Animation déclenchée une seule fois
    >
      <section id="about" className={styles.aboutSection}>
        {/* Conteneur de la bannière */}
        <div className={styles.bannerContainer}>
          {/* Image de la bannière */}
          <img src={banner} alt="Bannière" className={styles.banner} />
          <div className={styles.overlay}>
            {/* Conteneur pour le portrait */}
            <div className={styles.portraitContainer}>
              <img
                src={portrait}
                alt="Portrait de Thomas Chevron"
                className={styles.portrait} // Style de l'image du portrait
              />
            </div>

            {/* Conteneur pour le texte de la bannière */}
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
