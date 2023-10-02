import React from "react";

import styles from "./Contact.module.css";
import { getImageurl } from "../../utlis";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:gayatrisp111@gmail.com">gayatrisp111@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageurl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gayatri-patil-618b02206">linkedin.com/GayatriPatil</a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/PATILGAYATRIG">github.com/GayatriPatil</a>
        </li>
      </ul>
    </footer>
  );
};
