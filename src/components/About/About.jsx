import React from "react";
import styles from "./style.module.css";

function About() {
return (
    <section id="about">
    <h2 className={styles.title}>À propos de moi</h2>
    <p className={styles.text}>
        Je suis Thomas Chevron, développeur JavaScript & React. Bienvenue sur
        mon site !
    </p>
    </section>
);
}

export default About;