import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StreamerManagement.module.css';

function EditModal({ streamerId, closeModal, onUpdate }) {
    const [streamer, setStreamer] = useState({ name: '', picture: '', link: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (streamerId) {
            setLoading(true);
            axios.get(`http://localhost:5555/streamers/${streamerId}`)
                .then(response => {
                    setStreamer(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Erreur lors du chargement des détails du streamer:', error);
                    setError('Erreur lors du chargement des détails.');
                    setLoading(false);
                });
        }
    }, [streamerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStreamer(prevStreamer => ({
            ...prevStreamer,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (streamerId) {
            axios.put(`http://localhost:5555/streamers/${streamerId}`, streamer)
                .then(() => {
                    onUpdate(); 
                    closeModal(); 
                })
                .catch(error => {
                    console.error('Erreur lors de la mise à jour du streamer:', error);
                    setError('Erreur lors de la mise à jour.');
                });
        }
    };

    if (loading) return <div className={styles.loading}>Chargement...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Éditer le streamer</h2>
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
                <button onClick={handleSave} className={styles.saveButton}>Enregistrer</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default EditModal;
