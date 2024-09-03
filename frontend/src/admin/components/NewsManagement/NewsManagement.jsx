import React, { useEffect, useState } from "react";
import axios from 'axios';
import ShowModal from './ShowModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import CreateModal from './CreateModal';
import styles from './NewsManagement.module.css';

function NewsManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [newsList, setNewsList] = useState([]);
    const [selectedNewsId, setSelectedNewsId] = useState(null);

    const openModal = (newsId) => {
        setSelectedNewsId(newsId);
        setIsOpen(true);
    };

    const openDeleteModal = (newsId) => {
        setSelectedNewsId(newsId);
        setDeleteModalOpen(true);
    };

    const openEditModal = (newsId) => {
        setSelectedNewsId(newsId);
        setEditModalOpen(true);
    };

    const openCreateModal = () => {
        setCreateModalOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedNewsId(null);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedNewsId(null);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedNewsId(null);
    };

    const closeCreateModal = () => {
        setCreateModalOpen(false);
    };

    const refreshNewsList = () => {
        axios.get('http://localhost:5555/news')
            .then(response => {
                const newsArray = Array.isArray(response.data) ? response.data : response.data.data;
                setNewsList(newsArray);
            })
            .catch(error => console.error('Error fetching news:', error));
    };

    useEffect(() => {
        refreshNewsList();
    }, []);

    return (
        <div className={styles.newsManagement}>
            <button onClick={openCreateModal} className={styles.UserButton}>
                Créer un article
            </button>
            <table className={styles.newsTable}>
                <thead>
                    <tr>
                        <th>Couverture</th>
                        <th>Titre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {newsList.map((news) => (
                        <tr key={news.id}>
                            <td>
                                <img src={news.cover} alt={news.name} className={styles.newsImage} />
                            </td>
                            <td>
                                <h3>{news.name}</h3>
                            </td>
                            <td>
                                <div className={styles.buttonContainer}>
                                    <button onClick={() => openModal(news.id)} className={styles.UserButton}>Lire</button>
                                    <button onClick={() => openEditModal(news.id)} className={styles.UserButton}>
                                        Éditer
                                    </button>
                                    <button onClick={() => openDeleteModal(news.id)} className={styles.UserButton}>
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isOpen && <ShowModal newsId={selectedNewsId} closeModal={closeModal} />}
            {deleteModalOpen && <DeleteModal newsId={selectedNewsId} closeModal={closeDeleteModal} onDelete={refreshNewsList} />}
            {editModalOpen && <EditModal newsId={selectedNewsId} closeModal={closeEditModal} onUpdate={refreshNewsList} />}
            {createModalOpen && <CreateModal closeModal={closeCreateModal} onCreate={refreshNewsList} />}
        </div>
    );
}

export default NewsManagement;
