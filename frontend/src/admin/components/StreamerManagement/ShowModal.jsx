import React, { useEffect, useState } from "react";
import styles from './StreamerManagement.module.css';
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';

function ShowModal({ streamerId, closeModal }) {
    const [streamer, setStreamer] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (streamerId) {
            setLoading(true);
            axios.get(`http://localhost:5555/streamers/${streamerId}`)
                .then(response => {
                    setStreamer(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Erreur lors du chargement des détails du streamer:', error);
                    setLoading(false);
                });
        }
    }, [streamerId]);

    if (!streamerId) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                {loading ? (
                    <Loading />
                ) : (
                    streamer ? (
                        <>
                            <h2>{streamer.name}</h2>
                            <img src={streamer.picture} alt={streamer.name} className={styles.streamerImage} />
                            <hr />
                            <p>
                                <a href={streamer.link} target="_blank" rel="noopener noreferrer">
                                    Visiter la chaîne
                                </a>
                            </p>
                            <hr />
                            <p>Créé le : {new Date(streamer.createdAt).toLocaleDateString()}</p>
                        </>
                    ) : (
                        <p>Aucune information disponible.</p>
                    )
                )}
            </div>
        </div>
    );
}

export default ShowModal;
