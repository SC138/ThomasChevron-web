import React from "react";
import styles from "./style.module.css";

// Import des images
import fisheyeImage from "../../assets/img/fisheye.png";
import kasaImage from "../../assets/img/kasa.jpeg";
import petitsplatsImage from "../../assets/img/petitsplats.jpeg";

function Projects() {
  const projects = [
    {
      title: "Fisheye",
      description:
        "Un projet photo interactif qui permet de découvrir des photographes talentueux.",
      link: "https://fisheye-tc.netlify.app/",
      image: fisheyeImage,
    },
    {
      title: "Kasa",
      description:
        "Une application de location immobilière, développée avec React.",
      link: "https://kaza-tc.netlify.app/",
      image: kasaImage,
    },
    {
      title: "Les Petits Plats",
      description:
        "Un site de recettes pour découvrir des plats savoureux, utilisant une recherche optimisée.",
      link: "https://lespetitsplats-tc.netlify.app/",
      image: petitsplatsImage,
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Mes Projets</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCardLink}
          >
            <div className={styles.projectCard}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <button className={`${styles.projectButton} bounce-in-bottom`}>
                  Visiter
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
