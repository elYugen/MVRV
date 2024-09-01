import React from 'react';
import axios from 'axios';
import styles from './NewsManagement.module.css';

function DeleteModal({ newsId, closeModal, onDelete }) {
    const handleDelete = () => {
        if (newsId) {
            axios.delete(`http://localhost:5555/news/${newsId}`)
                .then(() => {
                    onDelete();
                    closeModal();
                })
                .catch(error => {
                    console.error('Error deleting news:', error);
                    alert('Une erreur est survenue lors de la suppression.');
                });
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Confirmation de Suppression</h2>
                <p>Êtes-vous sûr de vouloir supprimer cet article ?</p>
                <button onClick={handleDelete} className={styles.deleteButton}>Supprimer</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default DeleteModal;
