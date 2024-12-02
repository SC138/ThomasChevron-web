import React from "react";
import styles from "./Contact.module.css";
import { ReactComponent as LinkedInIcon } from "../../assets/img/icons8-linkedin.svg";
import { ReactComponent as GitHubIcon } from "../../assets/img/github-inverted-svgrepo-com.svg";
import { ReactComponent as MailIcon } from "../../assets/img/email-icon.svg";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contactez-moi</h2>
      <p className={styles.description}>
        Vous pouvez me retrouver sur mes réseaux ou m'envoyer un mail :
      </p>
      <div className={styles.iconsContainer}>
        <a
          href="https://www.linkedin.com/in/thomas-chevron/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <LinkedInIcon className={styles.icon} />
          <span className={styles.label}>LinkedIn</span>
        </a>
        <a
          href="https://github.com/SC138"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <GitHubIcon className={styles.icon} />
          <span className={styles.label}>GitHub</span>
        </a>
        <a href="mailto:chevron.thomas33@gmail.com" className={styles.iconLink}>
          <MailIcon className={styles.icon} />
          <span className={styles.label}>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
