import React from "react";
import styles from "./style.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Thomas Chevron - JavaScript & React Developer</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <a href="#about" className={styles.link}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" className={styles.link}>
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" className={styles.link}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
