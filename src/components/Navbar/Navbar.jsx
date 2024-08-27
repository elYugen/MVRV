import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return(
    <>
    <nav className={styles.Navbar}>
      <div className={styles.NavbarLogo}><a href="/">MV Rivals &nbsp;<strong>Database</strong></a></div>
      <ul className={styles.NavbarItems}>
        <li><a href="perso">Guides Perso</a></li>
        <li><a href="tierlist">Tierlist</a></li>
        <li><a href="#">Guide Meta</a></li>
        <li><a href="#">Ranking Joueur</a></li>
        <li><a href="stream">Stream</a></li>
      </ul>
      <input type="text" placeholder="Trouver un personnage" className={styles.NavbarSearch}/>
    </nav>
    </>
  );
};

export default Navbar