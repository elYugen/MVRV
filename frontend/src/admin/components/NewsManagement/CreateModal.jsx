// CreateModal.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './NewsManagement.module.css';

function CreateModal({ closeModal, onCreate }) {
    const [news, setNews] = useState({ name: '', resume: '', content: '', cover: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews(prevNews => ({
            ...prevNews,
            [name]: value
        }));
    };

    const handleSave = () => {
        axios.post('http://localhost:5555/news', news)
            .then(() => {
                onCreate();
                closeModal(); 
            })
            .catch(error => {
                console.error('Error creating news:', error);
                setError('Erreur lors de la création.');
            });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Créer un nouvel article</h2>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.formGroup}>
                    <label>Titre</label>
                    <input
                        type="text"
                        name="name"
                        value={news.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Résumé</label>
                    <textarea
                        name="resume"
                        value={news.resume}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Contenu</label>
                    <textarea
                        name="content"
                        value={news.content}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Couverture (URL)</label>
                    <input
                        type="text"
                        name="cover"
                        value={news.cover}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSave} className={styles.saveButton}>Créer</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default CreateModal;
