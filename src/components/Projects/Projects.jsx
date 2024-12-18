import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

// Import des images des projets
import fisheyeImage from "../../assets/img/fisheye.png";
import kasaImage from "../../assets/img/kasa.jpeg";
import petitsplatsImage from "../../assets/img/petitsplats.jpeg";
import jobgestionImage1 from "../../assets/img/jobgestion1.png";
import jobgestionImage2 from "../../assets/img/jobgestion2.png";
import jobgestionImage3 from "../../assets/img/jobgestion3.png";
import jobgestionImage4 from "../../assets/img/jobgestion4.png";

function Projects() {
  // État pour gérer l'index actuel des images dans le slider de "JobGestion"
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images pour le slider de "JobGestion"
  const jobGestionImages = [
    jobgestionImage1,
    jobgestionImage2,
    jobgestionImage3,
    jobgestionImage4,
  ];

  // Liste des projets avec des descriptions différentes pour desktop et mobile
  const projects = [
    {
      title: "Fisheye",
      descriptionDesktop: (
        <>
          Un site interactif pour la découverte de photographes. <br />
          Développé en JavaScript, ce projet assure une accessibilité WCAG.
        </>
      ),
      descriptionMobile: "Un projet photo interactif en JavaScript.",
      link: "https://fisheye-tc.netlify.app/",
      image: fisheyeImage,
    },
    {
      title: "Kasa",
      descriptionDesktop: (
        <>
          Une application de location immobilière. <br />
          Développée en React, cette application propose une interface
          utilisateur moderne et intuitive.
        </>
      ),
      descriptionMobile: "Application de location immobilière en React.",
      link: "https://kaza-tc.netlify.app/",
      image: kasaImage,
    },
    {
      title: "Les Petits Plats",
      descriptionDesktop: (
        <>
          Un site de recettes de cuisine. <br />
          Développé en JavaScript, ce projet propose une recherche de recettes
          par ingrédients.
        </>
      ),
      descriptionMobile: "Site de recettes avec recherche par ingrédients.",
      link: "https://lespetitsplats-tc.netlify.app/",
      image: petitsplatsImage,
    },
    {
      title: "JobGestion",
      descriptionDesktop:
        "Une application pour gérer les candidatures et les opportunités professionnelles. Développée avec Python et Tkinter.",
      descriptionMobile: "Gestion des candidatures en Python/Tkinter.",
      link: "https://github.com/SC138/JobGestion/releases/",
      isFullWidth: true, // Indique que cette card prend toute la largeur
    },
  ];

  // Effet pour gérer le défilement automatique des images dans le slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % jobGestionImages.length // Passe à l'image suivante
      );
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle au démontage
  }, [jobGestionImages.length]);

  return (
    <section id="projects" className={styles.projects}>
      {/* Titre de la section */}
      <h2 className={styles.title}>Mes Projets</h2>

      {/* Liste des projets */}
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCardLink} ${
              project.isFullWidth ? styles.fullWidth : ""
            }`}
            initial={{ opacity: 0, scale: 0.8 }} // Animation d'apparition
            whileInView={{ opacity: 1, scale: 1 }} // Effet visible dans la vue
            transition={{ duration: 0.6, delay: index * 0.2 }} // Animation en cascade
            viewport={{ once: true }} // Animation jouée une seule fois
          >
            <div className={styles.projectCard}>
              {/* Slider pour "JobGestion" */}
              {project.title === "JobGestion" ? (
                <div className={styles.slider}>
                  <img
                    src={jobGestionImages[currentImageIndex]} // Image actuelle
                    alt={`Slide ${currentImageIndex + 1}`}
                    className={styles.sliderImage}
                  />
                </div>
              ) : (
                // Image avec lien pour les autres projets
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </a>
              )}

              {/* Contenu du projet */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                {/* Description longue (visible en desktop) */}
                <p
                  className={`${styles.projectDescription} ${styles.desktopOnly}`}
                >
                  {project.descriptionDesktop}
                </p>

                {/* Description courte (visible en mobile) */}
                <p
                  className={`${styles.projectDescription} ${styles.mobileOnly}`}
                >
                  {project.descriptionMobile}
                </p>

                {/* Bouton pour visiter le projet */}
                {project.link && (
                  <div className={styles.projectButtonContainer}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                    >
                      Visiter
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
