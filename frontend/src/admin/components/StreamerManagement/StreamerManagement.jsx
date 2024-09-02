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

    const closeModal = () => {
        setIsOpen(false);
        setSelectedStreamerId(null);
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
            <button onClick={() => setCreateModalOpen(true)} className={styles.UserButton}>
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
                        <tr key={streamer.id}>
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
                                    <button onClick={() => openModal(streamer.id)} className={styles.UserButton}>Voir</button>
                                    <button onClick={() => { setSelectedStreamerId(streamer.id); setEditModalOpen(true); }} className={styles.UserButton}>Éditer</button>
                                    <button onClick={() => { setSelectedStreamerId(streamer.id); setDeleteModalOpen(true); }} className={styles.UserButton}>Supprimer</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && <ShowModal streamerId={selectedStreamerId} closeModal={closeModal} />}
            {deleteModalOpen && <DeleteModal streamerId={selectedStreamerId} closeModal={() => setDeleteModalOpen(false)} onDelete={refreshStreamersList} />}
            {editModalOpen && <EditModal streamerId={selectedStreamerId} closeModal={() => setEditModalOpen(false)} onUpdate={refreshStreamersList} />}
            {createModalOpen && <CreateModal closeModal={() => setCreateModalOpen(false)} onCreate={refreshStreamersList} />}
        </div>
    );
}

export default StreamersManagement;
