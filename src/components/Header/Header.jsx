import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/img/logo-tc.png";

function Header() {
  const [activeLink, setActiveLink] = useState("#home"); // Lien actif par défaut

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Thomas Chevron" className={styles.logo} />
      </div>

      {/* Navigation */}
      <nav>
        <ul className={styles.nav}>
          <li>
            <a
              href="#home"
              className={`${styles.link} ${
                activeLink === "#home" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("#home")}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${styles.link} ${
                activeLink === "#about" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("#about")}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${styles.link} ${
                activeLink === "#projects" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("#projects")}
            >
              Projets
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`${styles.link} ${
                activeLink === "#skills" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("#skills")}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${styles.link} ${
                activeLink === "#contact" ? styles.active : ""
              }`}
              onClick={() => setActiveLink("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
