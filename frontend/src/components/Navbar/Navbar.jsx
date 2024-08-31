import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Navbar.module.css';
import { FaRegUserCircle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { useAuth } from '../../contexts/AuthContext';
import { SlLogout } from "react-icons/sl";


function Navbar() {
  const { user, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin/home');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return(
    <>
<div className={styles.NavbarContainer}>
  <nav className={styles.Navbar}>
    <div className={styles.NavbarLogo}><a href="/home">MV Rivals &nbsp;<strong>Database</strong></a></div>
    <ul className={styles.NavbarItems}>
      <li><a href="/heros">Guides Perso</a></li>
      <li><a href="/tierlist">Tierlist</a></li>
      {/* <li><a href="#">Guide Meta</a></li>
      <li><a href="#">Ranking Joueur</a></li> */}
      <li><a href="/stream">Stream</a></li>
    </ul>
    <div className={styles.NavbarRight}>
      <input type="text" placeholder="Trouver un personnage" className={styles.NavbarSearch}/>
      <div className={styles.UserIconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <FaRegUserCircle style={{ fontSize: "25px", cursor: "pointer" }} />
        {user ? (
        <>
        {isHovered && (
          <div className={styles.UserMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.UserMenuArrow}></div>
            <p>{user.username}</p>
            {user.rank === 7 ? (
            <button className={styles.UserButton} onClick={handleAdminClick}><SlLogout style={{fontSize: "20px"}}/>Panel Admin</button>
            ) : (
              <></>
            )}
            <button className={styles.UserButton} onClick={logout}><SlLogout style={{fontSize: "20px"}}/>Déconnexion</button>
          </div>
        )}
        </>) : (
        <>
        {isHovered && (
          <div className={styles.UserMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.UserMenuArrow}></div>
            <button className={styles.UserButton} ><a href="login"><PiSignIn style={{fontSize: "20px"}}/> Connexion</a></button>
            <button className={styles.UserButton}><a href="register"><FaPencilAlt style={{fontSize: "20px"}}/>Inscription</a></button>
          </div>
        )}
        </>
        )}
      </div>
    </div>
  </nav>
</div>

    </>
  );
};

export default Navbar