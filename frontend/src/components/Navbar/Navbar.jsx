import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useAuth } from '../../contexts/AuthContext'; 
import styles from './Navbar.module.css';

function Navbar() {
  const { user, login, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      axios.get('http://localhost:5555/users/me', { withCredentials: true })
        .then(response => {
          console.log('Données utilisateur reçues:', response.data); 
          login(response.data);
        })
        .catch(() => {
          console.log('Erreur lors de la récupération des données utilisateur');
          login(null);
        });
    }
  }, [user, login]);

  const handleAdminClick = () => {
    navigate('/admin/home');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    axios.post('http://localhost:5555/auth/logout', {}, { withCredentials: true })
      .then(() => {
        logout(); 
        navigate('/home');
      })
      .catch(error => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  };

  return (
    <div className={styles.NavbarContainer}>
      <nav className={styles.Navbar}>
        <div className={styles.NavbarLogo}><Link to="/home">MV Rivals &nbsp;<strong>Database</strong></Link></div>
        <ul className={styles.NavbarItems}>
          <li><Link to="/heros">Guides Perso</Link></li>
          <li><Link to="/tierlist">Tierlist</Link></li>
          <li><Link to="/stream">Stream</Link></li>
        </ul>
        <div className={styles.NavbarRight}>
          <input type="text" placeholder="Trouver un personnage" className={styles.NavbarSearch} />
          <div className={styles.UserIconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaRegUserCircle style={{ fontSize: "25px", cursor: "pointer" }} />
            {isHovered && (
              <div className={styles.UserMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className={styles.UserMenuArrow}></div>
                {user ? (
                  <>
                    <p>{user.username}</p>
                    {user.rank === 7 && (
                      <button className={styles.UserButton} onClick={handleAdminClick}>
                        <SlLogout style={{fontSize: "20px"}}/>Panel Admin
                      </button>
                    )}
                    <button className={styles.UserButton} onClick={handleLogout}>
                      <SlLogout style={{ fontSize: "20px" }} />Déconnexion
                    </button>
                  </>
                ) : (
                  <>
                    <button className={styles.UserButton}>
                      <Link to="/login"><PiSignIn style={{ fontSize: "20px" }} /> Connexion</Link>
                    </button>
                    <button className={styles.UserButton}>
                      <Link to="/register"><FaPencilAlt style={{ fontSize: "20px" }} /> Inscription</Link>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
