import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NewsManagement.module.css';

function EditModal({ newsId, closeModal, onUpdate }) {
    const [news, setNews] = useState({ name: '', resume: '', content: '', cover: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (newsId) {
            setLoading(true);
            axios.get(`http://localhost:5555/news/${newsId}`)
                .then(response => {
                    setNews(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching news details:', error);
                    setError('Erreur lors du chargement des détails.');
                    setLoading(false);
                });
        }
    }, [newsId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews(prevNews => ({
            ...prevNews,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (newsId) {
            axios.put(`http://localhost:5555/news/${newsId}`, news)
                .then(() => {
                    onUpdate(); 
                    closeModal(); 
                })
                .catch(error => {
                    console.error('Error updating news:', error);
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
                <h2>Éditer l'article</h2>
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
                <button onClick={handleSave} className={styles.saveButton}>Enregistrer</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default EditModal;
