import React from 'react'
import { getImageurl } from '../../utlis'


import styles from "./About.module.css"

export const About=()=> {
  return (
    <section  id="about"className={styles.container}>
        <h2 className={styles.heading}>About</h2>
        <div className={styles.content} >
            <img
            src={getImageurl("about/aboutmage.png")}
            alt='Me sitting with laptop' className={styles.img}
            />
            <ul className={styles.Items}>
            <li className={styles.Item}>
            <img
           src={getImageurl("about/cursorcon.png")}
           alt='Server Icon'/>
           <div className={styles.desc}  >
            <h3>Software Developer</h3>
            <p>
            I'm equipped with foundational programming knowledge and excited to embark on my career, eager to learn and contribute to software projects.
            </p>
           </div >
            </li>
               <li className={styles.Item} >
                <img
           src={getImageurl("about/cursorcon.png")}
           alt='Cursor Icon'/>
           <div className={styles.desc}>
            <h3>Front-End Developer</h3>
            <p>
            I'm a frontend developer with experience in building responsive and optimized sites
            </p>
           </div>
            </li>
           
             <li className={styles.Item}>
                <img
           src={getImageurl("about/uicon.png")}
           alt='UI Icon'/>
           <div className={styles.desc}>
            <h3> UI Designer</h3>
            <p>
            I have designed multiple landing pages and have created design systems as well
            </p>
           </div>
                </li>

            </ul>
        
        </div>
    </section>
  )
}
