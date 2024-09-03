// DeleteModal.jsx
import React from 'react';
import axios from 'axios';
import styles from './HeroManagement.module.css';

function DeleteModal({ herosId, closeModal, onDelete }) {
    const handleDelete = () => {
        if (herosId) {
            axios.delete(`http://localhost:5555/heros/${herosId}`)
                .then(() => {
                    onDelete();
                    closeModal();
                })
                .catch(error => {
                    console.error('Error deleting hero:', error);
                    alert(`Une erreur est survenue lors de la suppression : ${error.response?.data?.message || error.message}`);
                });
        }
    };
    

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>Confirmation de Suppression</h2>
                <p>Êtes-vous sûr de vouloir supprimer ce personnage ?</p>
                <button onClick={handleDelete} className={styles.UserButton}>Supprimer</button>
                <button onClick={closeModal} className={styles.UserButton}>Annuler</button>
            </div>
        </div>
    );
}

export default DeleteModal;
