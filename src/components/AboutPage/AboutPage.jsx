import React from "react";
import { motion } from "framer-motion"; // Import de Framer Motion
import styles from "./AboutPage.module.css";
import portrait2 from "../../assets/img/portrait2.avif";

import { ReactComponent as LogoCSS } from "../../assets/img/css3-02-svgrepo-com.svg";
import { ReactComponent as LogoHTML } from "../../assets/img/html5-02-svgrepo-com.svg";
import { ReactComponent as LogoJS } from "../../assets/img/javascript-svgrepo-com.svg";
import { ReactComponent as LogoReact } from "../../assets/img/react-svgrepo-com.svg";
import { ReactComponent as LogoNode } from "../../assets/img/node-js-svgrepo-com.svg";
import { ReactComponent as LogoPostman } from "../../assets/img/postman-svgrepo-com.svg";
import { ReactComponent as LogoPhp } from "../../assets/img/php01-svgrepo-com.svg";
import { ReactComponent as LogoSql } from "../../assets/img/sql-file-format-svgrepo-com.svg";
import { ReactComponent as LogoMysql } from "../../assets/img/mysql-svgrepo-com.svg";
import { ReactComponent as LogoPython } from "../../assets/img/python-svgrepo-com.svg";
import { ReactComponent as LogoGithub } from "../../assets/img/github-inverted-svgrepo-com.svg";

function AboutPage() {
  // Variants pour les animations d'apparition
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, // L'élément commence caché avec un décalage vertical
    visible: { opacity: 1, y: 0 }, // L'élément devient visible et revient à sa position d'origine
  };

  // Liste des logos avec leurs noms pour affichage dynamique
  const logos = [
    { component: LogoHTML, name: "HTML5" },
    { component: LogoCSS, name: "CSS3" },
    { component: LogoJS, name: "JavaScript" },
    { component: LogoReact, name: "React" },
    { component: LogoNode, name: "Node.js" },
    { component: LogoPostman, name: "Postman" },
    { component: LogoPhp, name: "PHP" },
    { component: LogoSql, name: "SQL" },
    { component: LogoMysql, name: "MySQL" },
    { component: LogoPython, name: "Python" },
    { component: LogoGithub, name: "GitHub" },
  ];

  return (
    <motion.section
      id="aboutpage"
      className={styles.aboutSection}
      initial="hidden" // État initial caché
      animate="visible" // Animation déclenchée lorsque l'élément entre dans la vue
      variants={{
        hidden: { opacity: 0 }, // Caché initialement
        visible: {
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut" },
        }, // Apparaît avec une transition fluide
      }}
    >
      <div className={styles.contentContainer}>
        {/* Section pour le portrait */}
        <motion.div
          className={styles.portrait2Container}
          variants={fadeInVariant} // Applique l'animation fadeIn
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }} // Retard et durée spécifiques
        >
          <img
            src={portrait2}
            alt="Portrait de moi"
            className={styles.portrait2} // Style appliqué à l'image du portrait
          />
        </motion.div>

        {/* Section pour le texte descriptif */}
        <motion.div
          className={styles.textContainer}
          variants={fadeInVariant} // Applique l'animation fadeIn
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }} // Retard et durée spécifiques
        >
          <h2 className={styles.title}>À propos de moi</h2>
          <p className={styles.description}>
            Issu de deux formations en développement web : <br />
            <br />
            Développeur Web - Web Mobile | 2022 <br />
            Titre RNCP niveau 5 - BAC+2 - La Piscine, à Mérignac
          </p>
          <hr className={styles.horizontalRule} />
          <p className={styles.description}>
            Développeur d'application - JavaScript React | 2023 - 2024 <br />
            Titre RNCP niveau 6 - BAC+4 - OpenClassrooms, formation en
            distanciel
          </p>
          <p>
            <a
              href="/cv-thomas-chevron.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvLink} // Lien vers le CV avec style
            >
              Mon CV disponible ici
            </a>
          </p>
        </motion.div>
      </div>

      {/* Section pour les technologies */}
      <motion.div
        className={styles.extraTextContainer}
        variants={fadeInVariant} // Applique l'animation fadeIn
        transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }} // Retard et durée spécifiques
      >
        <h3 className={styles.extraTitle}>Technologies</h3>
      </motion.div>

      {/* Section contenant les logos */}
      <motion.div
        className={styles.logosContainer}
        variants={fadeInVariant} // Applique l'animation fadeIn
        transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }} // Retard et durée spécifiques
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className={styles.logoWrapper} // Conteneur pour chaque logo
            whileHover={{ scale: 1.2 }} // Effet d'agrandissement au survol
            transition={{ type: "spring", stiffness: 250, damping: 15 }} // Animation de type spring
          >
            <logo.component className={styles.logo} /> {/* Logo SVG */}
            <span className={styles.logoName}>{logo.name}</span>{" "}
            {/* Nom du logo */}
          </motion.div>
        ))}
      </motion.div>

      {/* Section Mes Valeurs et Ce que je recherche */}
      <motion.div
        className={styles.valuesAndGoalsContainer}
        variants={fadeInVariant} // Applique l'animation fadeIn
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }} // Retard et durée spécifiques
      >
        {/* Bloc pour les valeurs */}
        <motion.div
          className={styles.valuesContainer}
          variants={fadeInVariant} // Applique l'animation fadeIn
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }} // Retard et durée spécifiques
        >
          <h3 className={styles.valuesTitle}>Mes valeurs</h3>
          <ul className={styles.valuesList}>
            <li>💡 Innovation : toujours explorer de nouvelles solutions.</li>
            <li>🤝 Collaboration : l’entraide est au cœur de mes projets.</li>
            <li>
              🌍 Accessibilité : créer des applications utilisables par tous.
            </li>
            <li>
              📈 Apprentissage continu : apprendre chaque jour pour évoluer.
            </li>
          </ul>
        </motion.div>

        {/* Bloc pour les objectifs professionnels */}
        <motion.div
          className={styles.goalsContainer}
          variants={fadeInVariant} // Applique l'animation fadeIn
          transition={{ delay: 1.4, duration: 1, ease: "easeInOut" }} // Retard et durée spécifiques
        >
          <h3 className={styles.goalsTitle}>Ce que je recherche</h3>
          <p className={styles.goalsDescription}>
            Je suis à la recherche d'un poste en tant que développeur front-end
            ou full-stack, dans une entreprise où je pourrai apprendre,
            collaborer, et apporter mes compétences en JavaScript, React, et
            Node.js.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutPage;
