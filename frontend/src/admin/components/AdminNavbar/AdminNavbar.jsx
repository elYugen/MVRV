import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './AdminNavbar.module.css';
import { FaRegUserCircle } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";
import { useAuth } from '../../../contexts/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/404'); // Redirige vers /404 si l'utilisateur n'est pas connecté
    }
  }, [user, navigate]);

  const handleHomeClick = () => {
    navigate('/home');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={styles.NavbarContainer}>
        <nav className={styles.Navbar}>
          <div className={styles.NavbarLogo}>
            <Link to="/admin/home">MV Rivals &nbsp;<strong>Database</strong></Link>
          </div>
          <ul className={styles.NavbarItems}>
            <li><Link to="/admin/news">Gestion Articles</Link></li>
            <li><Link to="/admin/streamer">Gestion Streamers</Link></li>
            <li><Link to="/admin/hero">Gestion Héros</Link></li>
          </ul>
          <div className={styles.NavbarRight}>
            <input type="text" placeholder="Trouver un personnage" className={styles.NavbarSearch} />
            <div className={styles.UserIconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <FaRegUserCircle style={{ fontSize: "25px", cursor: "pointer" }} />
              {isHovered && (
                <div className={styles.UserMenu}>
                  <div className={styles.UserMenuArrow}></div>
                  <p>{user.username}</p>
                  <button className={styles.UserButton} onClick={handleHomeClick}><SlLogout style={{fontSize: "20px"}}/>Retour à l'Accueil</button>
                  <button className={styles.UserButton} onClick={logout}>
                    <SlLogout style={{ fontSize: "20px" }} />Déconnexion
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
