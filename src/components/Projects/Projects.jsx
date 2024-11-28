import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";

// Import des images
import fisheyeImage from "../../assets/img/fisheye.png";
import kasaImage from "../../assets/img/kasa.jpeg";
import petitsplatsImage from "../../assets/img/petitsplats.jpeg";
import jobgestionImage1 from "../../assets/img/jobgestion1.png";
import jobgestionImage2 from "../../assets/img/jobgestion2.png";
import jobgestionImage3 from "../../assets/img/jobgestion3.png";
import jobgestionImage4 from "../../assets/img/jobgestion4.png";

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Gestion du slider pour "Job Gestion"
  const jobGestionImages = [
    jobgestionImage1,
    jobgestionImage2,
    jobgestionImage3,
    jobgestionImage4,
  ];

  const projects = [
    {
      title: "Fisheye",
      description: (
        <>
          Un projet photo interactif qui permet de découvrir des photographes
          talentueux. <br />
          Développé en JavaScript, ce projet mise sur l'accessibilité avec une
          navigation clavier et des descriptions conformes aux standards WCAG.
        </>
      ),
      link: "https://fisheye-tc.netlify.app/",
      image: fisheyeImage,
    },
    {
      title: "Kasa",
      description: (
        <>
          Une application de location immobilière. <br />
          Développée en React, cette application propose une interface
          utilisateur moderne et intuitive.
        </>
      ),

      link: "https://kaza-tc.netlify.app/",
      image: kasaImage,
    },
    {
      title: "Les Petits Plats",
      description: (
        <>
          Un site de recettes de cuisine. <br />
          Développé en JavaScript, ce projet propose une recherche de recettes
          par ingrédients.
        </>
      ),
      link: "https://lespetitsplats-tc.netlify.app/",
      image: petitsplatsImage,
    },
    {
      title: "JobGestion",
      description:
        "Une application pour gérer les candidatures et les opportunités professionnelles. Développée avec Python et Tkinter.",
      link: "https://github.com/SC138/JobGestion/releases/",
      isFullWidth: true,
    },
  ];

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % jobGestionImages.length
      );
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle à la destruction du composant
  }, [jobGestionImages.length]);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Mes Projets</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCardLink} ${
              project.isFullWidth ? styles.fullWidth : ""
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Cascade
            viewport={{ once: true }} // Animation jouée une seule fois
          >
            <div className={styles.projectCard}>
              {project.title === "JobGestion" ? (
                <div className={styles.slider}>
                  <img
                    src={jobGestionImages[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className={styles.sliderImage}
                  />
                </div>
              ) : (
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
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
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
