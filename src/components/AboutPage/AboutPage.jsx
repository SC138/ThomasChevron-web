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
        </div>
      </div>
      <div className={styles.extraTextContainer}>
        <h3 className={styles.extraTitle}>Technologies</h3>
      </div>
      <div className={styles.logosContainer}>
        <LogoCSS className={styles.logo} />
        <LogoHTML className={styles.logo} />
        <LogoJS className={styles.logo} />
        <LogoReact className={styles.logo} />
        <LogoNode className={styles.logo} />
        <LogoPostman className={styles.logo} />
        <LogoPhp className={styles.logo} />
        <LogoSql className={styles.logo} />
        <LogoMysql className={styles.logo} />
        <LogoPython className={styles.logo} />
        <LogoGithub className={styles.logo} />
      </div>
    </section>
  );
}

export default AboutPage;
