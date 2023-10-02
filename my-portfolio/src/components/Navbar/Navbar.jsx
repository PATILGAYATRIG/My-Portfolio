import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageurl } from '../../utlis'; 

export const Navbar = () => {
  const [listOpen, setListOpen] = useState(false);

 
  const toggleList = () => {
    setListOpen(!listOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <div className={styles.list}>
        
        <img
          className={`${styles.listbtn} ${listOpen ? styles.closecon : styles.menucon}`}
          src={listOpen ? getImageurl('nav/closecon.png') : getImageurl('nav/menucon.png')}
          alt='menu-button'
          onClick={toggleList}
        />
        <ul className={`${styles.listItems} ${listOpen && styles.listOpen}`} onClick={() => setListOpen(false)}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};