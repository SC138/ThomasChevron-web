import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-tc.png";

function Header({ setIsLoading }) {
  const [activeLink, setActiveLink] = useState("#home"); // État pour gérer le lien actif dans la navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour savoir si le menu burger est ouvert ou fermé
  const location = useLocation(); // Permet de connaître la route actuelle

  const handleClick = (link) => {
    setActiveLink(link); // Met à jour le lien actif
    setIsMenuOpen(false); // Ferme le menu burger après un clic
    if (link === "#home" && location.pathname !== "/") {
      // Si on clique sur "Accueil" et qu'on n'est pas déjà sur la page d'accueil
      setIsLoading?.(true); // Active le loader
      setTimeout(() => {
        setIsLoading?.(false); // Désactive le loader après 1 seconde
      }, 5000);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Alterne l'état du menu burger (ouvert/fermé)
  };

  return (
    <header className={styles.header}>
      {/* Logo de l'application */}
      <div className={styles.logoContainer}>
        <Link
          to="/"
          className={styles.logoLink}
          onClick={() => handleClick("#home")}
        >
          <img src={logo} alt="Logo Thomas Chevron" className={styles.logo} />
        </Link>
      </div>

      {/* Icône du menu burger (affichée en mobile) */}
      <div className={styles.burger} onClick={toggleMenu}>
        <div
          className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}
        ></div>
        <div
          className={`${styles.line} ${isMenuOpen ? styles.open : ""}`}
        ></div>
      </div>

      {/* Menu de navigation */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`${styles.link} ${activeLink === "#home" ? styles.active : ""}`}
              onClick={() => handleClick("#home")}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/aboutpage"
              className={`${styles.link} ${activeLink === "#aboutpage" ? styles.active : ""}`}
              onClick={() => handleClick("#aboutpage")}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${styles.link} ${activeLink === "#contact" ? styles.active : ""}`}
              onClick={() => handleClick("#contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
