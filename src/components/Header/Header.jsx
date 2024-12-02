import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-tc.png";

function Header({ setIsLoading }) {
  const [activeLink, setActiveLink] = useState("#home"); // Lien actif par défaut
  const location = useLocation();

  const handleClick = (link) => {
    setActiveLink(link); // Mettre à jour le lien actif

    // Active le loader UNIQUEMENT pour "Accueil" si on change de page
    if (link === "#home" && location.pathname !== "/") {
      setIsLoading?.(true); // Active le loader
      setTimeout(() => {
        setIsLoading?.(false); // Désactive le loader après 1 seconde
      }, 1000);
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