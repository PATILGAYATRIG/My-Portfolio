import React from "react";

import styles from "./Hero.module.css";
import { getImageurl } from "../../utlis";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gayatri</h1>
        <p className={styles.description}>
       
        Proficient in Java, and C, with a strong passion for frontend development. Skilled in clean coding and problem-solving. Eager to contribute to cutting-edge software projects with a focus on frontend design and development
    
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageurl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
