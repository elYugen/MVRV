import React, { useEffect, useState } from "react";
import axios from 'axios';
import ShowModal from './ShowModal';
import DeleteModal from './DeleteModal';
import CreateModal from './CreateModal';
import styles from './HeroManagement.module.css'; 

function HerosManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [herosList, setHerosList] = useState([]);
    const [selectedHerosId, setSelectedHerosId] = useState(null);

    const openModal = (herosId) => {
        setSelectedHerosId(herosId);
        setIsOpen(true);
    };

    const openDeleteModal = (herosId) => {
        setSelectedHerosId(herosId);
        setDeleteModalOpen(true);
    };


    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedHerosId(null);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedHerosId(null);
    };


    const closeCreateModal = () => {
        setCreateModalOpen(false);
    };

    const refreshHerosList = () => {
        axios.get('http://localhost:5555/heros')
            .then(response => {
                const herosArray = Array.isArray(response.data) ? response.data : response.data.data;
                setHerosList(herosArray);
            })
            .catch(error => console.error('Error fetching heros:', error));
    };

    useEffect(() => {
        refreshHerosList();
    }, []);

    return (
        <div className={styles.herosManagement}>
            <button onClick={openCreateModal} className={styles.UserButton}>
                Créer un héros
            </button>
            <table className={styles.herosTable}>
                <thead>
                    <tr>
                        <th>Icône</th>
                        <th>Nom du personnage</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {herosList.map((heros) => (
                        <tr key={heros.id}>
                            <td>
                                <img src={heros.icon} alt={heros.name} className={styles.herosImage} />
                            </td>
                            <td>
                                <h3>{heros.name}</h3>
                            </td>
                            <td>
                                <div className={styles.buttonContainer}>
                                    <button onClick={() => openModal(heros.id)} className={styles.UserButton}>Voir</button>
                                    <button onClick={() => openDeleteModal(heros.id)} className={styles.UserButton}>Supprimer</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && <ShowModal herosId={selectedHerosId} closeModal={closeModal} />}
            {deleteModalOpen && <DeleteModal herosId={selectedHerosId} closeModal={closeDeleteModal} onDelete={refreshHerosList} />}

            {createModalOpen && <CreateModal closeModal={closeCreateModal} onCreate={refreshHerosList} />}
        </div>
    );
}

export default HerosManagement;
