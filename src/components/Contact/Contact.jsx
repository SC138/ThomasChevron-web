import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { ReactComponent as LinkedInIcon } from "../../assets/img/icons8-linkedin.svg";
import { ReactComponent as GitHubIcon } from "../../assets/img/github-inverted-svgrepo-com.svg";
import { ReactComponent as MailIcon } from "../../assets/img/email-icon.svg";

const Contact = () => {
  // Hook pour désactiver le scroll vertical uniquement sur cette page
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Désactive le scroll vertical

    return () => {
      document.body.style.overflow = "auto"; // Réactive le scroll en quittant la page
    };
  }, []);

  // Animation des conteneurs (stagger pour des animations en cascade)
  const containerVariant = {
    hidden: { opacity: 0 }, // Début invisible
    visible: {
      opacity: 1, // Fin visible
      transition: {
        staggerChildren: 0.2, // Décalage des animations enfants
        duration: 1, // Durée totale
        ease: "easeInOut", // Courbe d'animation fluide
      },
    },
  };

  // Animation des éléments individuels (ex : icônes)
  const itemVariant = {
    hidden: { opacity: 0, y: 50 }, // Début hors de l'écran (vers le bas)
    visible: { opacity: 1, y: 0 }, // Fin en place
  };

  // Animation au survol des icônes (ex : LinkedIn, GitHub)
  const iconVariant = {
    hover: {
      scale: 1.3, // Agrandit légèrement l'icône
      transition: { type: "spring", stiffness: 300, damping: 15 }, // Animation fluide de type ressort
    },
  };

  return (
    <motion.section
      id="contact"
      className={styles.contactSection} // Style général de la section
      initial="hidden" // Animation au chargement
      animate="visible" // État final une fois chargé
      variants={containerVariant} // Définit les variants pour l'animation
    >
      {/* Titre de la page */}
      <motion.h2
        className={styles.title}
        variants={itemVariant} // Animation associée
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation fluide
      >
        Contactez-moi
      </motion.h2>

      {/* Description sous le titre */}
      <motion.p
        className={styles.description}
        variants={itemVariant} // Animation associée
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Légère temporisation
      >
        Vous pouvez me retrouver sur mes réseaux ou m'envoyer un mail :
      </motion.p>

      {/* Conteneur des icônes */}
      <motion.div
        className={styles.iconsContainer} // Style pour regrouper les icônes
        variants={containerVariant} // Définit les animations pour chaque enfant
        initial="hidden" // État initial
        animate="visible" // État final
      >
        {/* Icône LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/thomas-chevron/"
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noopener noreferrer" // Sécurité pour les liens externes
          className={styles.iconLink}
          variants={itemVariant} // Animation associée
          whileHover="hover" // Animation au survol
        >
          <motion.div variants={iconVariant}>
            <LinkedInIcon className={styles.icon} />
          </motion.div>
          <span className={styles.label}>LinkedIn</span>{" "}
          {/* Légende sous l'icône */}
        </motion.a>

        {/* Icône GitHub */}
        <motion.a
          href="https://github.com/SC138"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          variants={itemVariant}
          whileHover="hover"
        >
          <motion.div variants={iconVariant}>
            <GitHubIcon className={styles.icon} />
          </motion.div>
          <span className={styles.label}>GitHub</span>
        </motion.a>

        {/* Icône Email */}
        <motion.a
          href="mailto:chevron.thomas33@gmail.com"
          className={styles.iconLink}
          variants={itemVariant}
          whileHover="hover"
        >
          <motion.div variants={iconVariant}>
            <MailIcon className={styles.icon} />
          </motion.div>
          <span className={styles.label}>Email</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
