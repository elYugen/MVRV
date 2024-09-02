import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './HeroList.module.css';

function HeroList() {
  const [heroes, setHeroes] = useState({
    dps: [],
    tank: [],
    heal: []
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5555/heros')
      .then(response => {
        const data = response.data.data; 

        const categorizedHeroes = {
          dps: [],
          tank: [],
          heal: [] 
        };
        
        data.forEach(hero => {
          switch (hero.category.toLowerCase()) {
            case 'dps':
              categorizedHeroes.dps.push(hero);
              break;
            case 'tank':
              categorizedHeroes.tank.push(hero);
              break;
            case 'heal': 
              categorizedHeroes.heal.push(hero);
              break;
            default:
              break;
          }
        });
        
        setHeroes(categorizedHeroes);
      })
      .catch(error => {
        console.error("Il y a une erreur sur la récupération des héros", error);
      });
  }, []);

  const handleImageClick = (id) => {
    navigate(`/heros/read/${id}`);
  };

  return (
    <div className={styles.herolistContainer}>
      {/* ----- Tableau des héros DPS ----- */}
      <table className={styles.herolistTable}>
        <thead>
          <tr>
            <th colSpan="2">Héros Dégâts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              {heroes.dps.map(hero => (
                <img key={hero.id} src={hero.icon} alt={hero.name} onClick={() => handleImageClick(hero.id)} className={styles.heroImage}/>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* ----- Tableau des héros Tank ----- */}
      <table className={styles.herolistTable}>
        <thead>
          <tr>
            <th colSpan="2">Héros Tank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              {heroes.tank.map(hero => (
                <img key={hero.id} src={hero.icon} alt={hero.name} onClick={() => handleImageClick(hero.id)} className={styles.heroImage}/>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* ----- Tableau des héros Heal ----- */}
      <table className={styles.herolistTable}>
        <thead>
          <tr>
            <th colSpan="2">Héros Heal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">
              {heroes.heal.map(hero => (
                <img key={hero.id} src={hero.icon} alt={hero.name} onClick={() => handleImageClick(hero.id)} className={styles.heroImage}/>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HeroList;