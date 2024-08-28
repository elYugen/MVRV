import React from 'react';
import styles from './Card.module.css';
import data from '../../api/data'

function Card() {

  if(data.length === 0) {
  return(
    <>
    <div className={styles.cardContainerError}>
      <div className={styles.cardError}>
        <p>Il n'y a aucun personnage actuellement</p>
      </div>
    </div>
    </>) 
    } else {
    return(
    <>
    <div className={styles.cardContainer}>
    {data.map(personnage => (
      <div key={personnage.id}>
        <div className={styles.card}>
          <img src={personnage.sprite} alt={personnage.name} />
          <div className={styles.title}>{personnage.name}</div>
        </div>
      </div>
    ))}
    </div>
    </>)
  }
}

export default Card;
