import React from "react";
import styles from "./AboutPage.module.css";
import portrait2 from "../../assets/img/portrait2.jpg";

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
  return (
    <section id="aboutpage" className={styles.aboutSection}>
      <div className={styles.contentContainer}>
        {/* Portrait à gauche */}
        <div className={styles.portrait2Container}>
          <img
            src={portrait2}
            alt="Portrait de moi"
            className={styles.portrait2}
          />
        </div>

        {/* Texte à droite */}
        <div className={styles.textContainer}>
          <h2 className={styles.title}>À propos de moi</h2>
          <p className={styles.description}>
            Issue de deux formations en développement web : <br />
            <br />
            Développeur Web - Web Mobile | 2022 <br />
            Titre RNCP niveau 5 - BAC+2 - La Piscine, à Mérignac
          </p>
          <p className={styles.description}>
            Développeur d'application -JavaScript React | 2023 - 2024 <br />
            Titre RNCP niveau 6 - BAC+4 - OpenClassrooms, formation en
            distanciel
          </p>
          <p>
            <a
              href="/cv-thomas-chevron.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvLink}
            >
              Mon CV disponible ici
            </a>
          </p>
        </div>
      </div>
      <div className={styles.extraTextContainer}>
        <h3 className={styles.extraTitle}>Technologies</h3>
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.logoWrapper}>
          <LogoHTML className={styles.logo} />
          <span className={styles.logoName}>HTML5</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoCSS className={styles.logo} />
          <span className={styles.logoName}>CSS3</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoJS className={styles.logo} />
          <span className={styles.logoName}>JavaScript</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoReact className={styles.logo} />
          <span className={styles.logoName}>React</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoNode className={styles.logo} />
          <span className={styles.logoName}>Node.js</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoPostman className={styles.logo} />
          <span className={styles.logoName}>Postman</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoPhp className={styles.logo} />
          <span className={styles.logoName}>PHP</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoSql className={styles.logo} />
          <span className={styles.logoName}>SQL</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoMysql className={styles.logo} />
          <span className={styles.logoName}>MySQL</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoPython className={styles.logo} />
          <span className={styles.logoName}>Python</span>
        </div>
        <div className={styles.logoWrapper}>
          <LogoGithub className={styles.logo} />
          <span className={styles.logoName}>GitHub</span>
        </div>
      </div>

      <div className={styles.valuesAndGoalsContainer}>
  {/* Section Mes valeurs */}
  <div className={styles.valuesContainer}>
    <h3 className={styles.valuesTitle}>Mes valeurs</h3>
    <ul className={styles.valuesList}>
      <li>💡 Innovation : toujours explorer de nouvelles solutions.</li>
      <li>🤝 Collaboration : l’entraide est au cœur de mes projets.</li>
      <li>🌍 Accessibilité : créer des applications utilisables par tous.</li>
      <li>📈 Apprentissage continu : apprendre chaque jour pour évoluer.</li>
    </ul>
  </div>

  {/* Section Ce que je recherche */}
  <div className={styles.goalsContainer}>
    <h3 className={styles.goalsTitle}>Ce que je recherche</h3>
    <p className={styles.goalsDescription}>
      Je suis à la recherche d'un poste en tant que développeur front-end ou
      full-stack, dans une entreprise où je pourrai apprendre, collaborer,
      et apporter mes compétences en JavaScript, React, et Node.js.
    </p>
  </div>
</div>
    </section>
  );
}

export default AboutPage;
