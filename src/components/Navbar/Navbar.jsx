import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return(
    <>
    <nav className={styles.Navbar}>
      <div className={styles.NavbarLogo}>MV Rivals &nbsp;<strong>Database</strong></div>
      <ul className={styles.NavbarItems}>
        <li><a href="#">Guides des Personnages</a></li>
        <li><a href="tierlist">Tierliste </a></li>
        <li><a href="#">Guide Meta</a></li>
        <li><a href="#">Ranking Joueur</a></li>
      </ul>
      <input type="text" placeholder="Trouver un personnage" className={styles.NavbarSearch}/>
    </nav>
    </>
  );
};

export default Navbar