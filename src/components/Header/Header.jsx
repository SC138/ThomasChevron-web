import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import logo from "../../assets/img/logo-tc.png";

function Header({ setIsLoading }) {
  const [activeLink, setActiveLink] = useState("#home"); // Lien actif par défaut
  const location = useLocation(); // Connaître la route actuelle

  const handleClick = (link) => {
    setActiveLink(link); // Met à jour le lien actif
    if (link === "#home" && location.pathname !== "/") {
      // Active le loader uniquement pour "Accueil" et si on n'est pas déjà dessus
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false); // Désactive le loader après 3 secondes
      }, 3000);
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink} onClick={() => handleClick("#home")}>
          <img src={logo} alt="Logo Thomas Chevron" className={styles.logo} />
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link
              to="/"
              className={`${styles.link} ${
                activeLink === "#home" ? styles.active : ""
              }`}
              onClick={() => handleClick("#home")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/aboutpage"
              className={`${styles.link} ${
                activeLink === "#aboutpage" ? styles.active : ""
              }`}
              onClick={() => handleClick("#aboutpage")}
            >
              À propos
            </Link>
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
