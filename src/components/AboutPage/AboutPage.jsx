import React from "react";
import styles from "./style.module.css";
import banner from "../../assets/img/banniere.jpg";
import portrait from "../../assets/img/portrait.jpg";

function AboutPage() {
    return (
        <section id="aboutpage" className={styles.aboutSection}>
            <div className={styles.bannerContainer}>
                <img src={banner} alt="Bannière" className={styles.banner} />
                <div className={styles.overlay}>
                    <div className={styles.portraitContainer}>
                        <img src={portrait} alt="Portrait de Thomas Chevron" className={styles.portrait} />
                    </div>
                    <div className={styles.textOverlay}>
                        <h2 className={styles.title}>Thomas Chevron</h2>
                        <p className={styles.text}>
                            Développeur Web Junior – JavaScript & React <br />
                            Curieux, patient et passionné, je transforme les idées en projets accessibles et .
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutPage;