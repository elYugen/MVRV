// ShowModal.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HeroManagement.module.css';
import Loading from '../../../components/Loading/Loading';

function ShowModal({ herosId, closeModal }) {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (herosId) {
            axios.get(`http://localhost:5555/heros/${herosId}`)
                .then(response => {
                    setHero(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching hero:', error);
                    setLoading(false);
                });
        }
    }, [herosId]);

    if (!herosId) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                {loading ? (
                    <Loading />
                ) : (
                    hero ? (
                        <div className={styles.modalBody}>
                            <div className={styles.heroInfos}>
                            <img src={hero.icon} alt={hero.name} className={styles.heroIcon} />   
                                <h2>{hero.name}</h2>
                            </div>

                            <div className={styles.heroDetails}>
                                <p><strong>Niveau:</strong> {hero.tier}</p>
                                <p><strong>Santé:</strong> {hero.health}</p>
                                <p><strong>Difficulté:</strong> {hero.difficulty}</p>
                                <p><strong>Catégorie:</strong> {hero.category}</p>
                                <p><strong>Passifs:</strong></p>
                                <ul>
                                    {hero.passive.map((p, i) => (
                                        <li key={i}><strong>{p.name}:</strong> {p.description}</li>
                                    ))}
                                </ul>
                                <p><strong>Sorts:</strong></p>
                                <ul>
                                    {hero.spells.map((s, i) => (
                                        <li key={i}><strong>{s.name}:</strong> {s.description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <p>Aucun héros disponible.</p>
                    )
                )}
            </div>
        </div>
    );
}

export default ShowModal;
