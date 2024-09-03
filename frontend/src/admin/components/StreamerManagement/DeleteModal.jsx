import React from 'react';
import axios from 'axios';
import styles from './StreamerManagement.module.css'; 

function DeleteModal({ streamerId, closeModal, onDelete }) {
    const handleDelete = () => {
        if (streamerId) {
            axios.delete(`http://localhost:5555/streamers/${streamerId}`)
                .then(() => {
                    onDelete();
                    closeModal();
                })
                .catch(error => {
                    console.error('Erreur lors de la suppression du streamer:', error);
                    alert('Une erreur est survenue lors de la suppression.');
                });
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Confirmation de Suppression</h2>
                <p>Êtes-vous sûr de vouloir supprimer ce streamer ?</p>
                <button onClick={handleDelete} className={styles.deleteButton}>Supprimer</button>
                <button onClick={closeModal} className={styles.cancelButton}>Annuler</button>
            </div>
        </div>
    );
}

export default DeleteModal;
