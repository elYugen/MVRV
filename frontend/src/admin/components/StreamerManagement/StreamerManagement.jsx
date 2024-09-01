import React, { useEffect, useState } from "react";
import axios from 'axios';
import ShowModal from './ShowModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import CreateModal from './CreateModal';
import styles from './StreamerManagement.module.css';

function StreamersManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [streamersList, setStreamersList] = useState([]);
    const [selectedStreamerId, setSelectedStreamerId] = useState(null);

    const openModal = (streamerId) => {
        setSelectedStreamerId(streamerId);
        setIsOpen(true);
    };

    const openDeleteModal = (streamerId) => {
        setSelectedStreamerId(streamerId);
        setDeleteModalOpen(true);
    };

    const openEditModal = (streamerId) => {
        setSelectedStreamerId(streamerId);
        setEditModalOpen(true);
    };

    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedStreamerId(null);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedStreamerId(null);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedStreamerId(null);
    };

    const closeCreateModal = () => {
        setCreateModalOpen(false);
    };

    const refreshStreamersList = () => {
        axios.get('http://localhost:5555/streamers')
            .then(response => {
                const streamersArray = Array.isArray(response.data) ? response.data : response.data.data;
                setStreamersList(streamersArray);
            })
            .catch(error => console.error('Error fetching streamers:', error));
    };

    useEffect(() => {
        refreshStreamersList();
    }, []);

    return (
        <div className={styles.streamersManagement}>
            <button onClick={openCreateModal} className={styles.UserButton}>
                Ajouter un streamer
            </button>
            <table className={styles.streamersTable}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Lien</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {streamersList.map((streamer) => (
                        <tr key={streamer._id}>
                            <td>
                                <img src={streamer.picture} alt={streamer.name} className={styles.streamerImage} />
                            </td>
                            <td>
                                <h3>{streamer.name}</h3>
                            </td>
                            <td>
                                <a href={streamer.link} target="_blank" rel="noopener noreferrer">{streamer.link}</a>
                            </td>
                            <td>
                                <div className={styles.buttonContainer}>
                                    <button onClick={() => openModal(streamer._id)} className={styles.UserButton}>Voir</button>
                                    <button onClick={() => openEditModal(streamer._id)} className={styles.UserButton}>
                                        Éditer
                                    </button>
                                    <button onClick={() => openDeleteModal(streamer._id)} className={styles.UserButton}>
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && <ShowModal streamerId={selectedStreamerId} closeModal={closeModal} />}
            {deleteModalOpen && <DeleteModal streamerId={selectedStreamerId} closeModal={closeDeleteModal} onDelete={refreshStreamersList} />}
            {editModalOpen && <EditModal streamerId={selectedStreamerId} closeModal={closeEditModal} onUpdate={refreshStreamersList} />}
            {createModalOpen && <CreateModal closeModal={closeCreateModal} onCreate={refreshStreamersList} />}
        </div>
    );
}

export default StreamersManagement;
