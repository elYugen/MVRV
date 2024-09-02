import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Tierlist.module.css';

function Tierlist() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5555/heros')
      .then(response => {
        const charactersData = response.data.data;
        if (Array.isArray(charactersData)) {
          setCharacters(charactersData);
        } else {
          console.error('Les données reçues ne sont pas dans le format attendu.');
          setError('Erreur lors de la récupération des données.');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Erreur lors de la récupération des données.');
        setLoading(false);
      });
  }, []);

  const tiers = {
    'S+': [],
    'A+': [],
    'A': [],
    'B': [],
    'C': [],
  };

  if (Array.isArray(characters)) {
    characters.forEach(character => {
      const tier = character.tier || 'Inconnu'; 
      if (tiers[tier]) {
        tiers[tier].push(character);
      } else {
        console.warn(`Tier inconnu: ${tier}`);
      }
    });
  }

  if (loading) return <div className={styles.loading}>Chargement...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.tierlistContainer}>
      <table className={styles.tierlistTable}>
        <thead>
          <tr>
            <th colSpan="2"><center>Tierlist des Personnages</center></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(tiers).map(tier => (
            <tr key={tier}>
              <td className={styles[`tierlist${tier.replace('+', 'Plus')}`]}>
                <center>{tier}</center>
              </td>
              <td>
                {tiers[tier].map(character => (
                  <img key={character._id} src={character.icon} alt={character.name} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tierlist;
