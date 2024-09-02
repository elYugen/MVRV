import React, { useState } from 'react';
import axios from 'axios';
import styles from './StreamerManagement.module.css';

function CreateModal({ closeModal, onCreate }) {
    const [streamer, setStreamer] = useState({ name: '', picture: '', link: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStreamer(prevStreamer => ({
            ...prevStreamer,
            [name]: value
        }));
    };

    const handleSave = () => {
        axios.post('http://localhost:5555/streamers', streamer)
            .then(() => {
                onCreate();
                closeModal(); 
            })
            .catch(error => {
                console.error('Erreur lors de la création du streamer:', error);
                setError('Erreur lors de la création.');
            });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Ajouter un nouveau streamer</h2>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.formGroup}>
                    <label>Nom</label>
                    <input
                        type="text"
                        name="name"
                        value={streamer.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Image (URL)</label>
                    <input
                        type="text"
                        name="picture"
                        value={streamer.picture}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Lien</label>
                    <input
                        type="text"
                        name="link"
                        value={streamer.link}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSave} className={styles.saveButton}>Ajouter</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default CreateModal;
