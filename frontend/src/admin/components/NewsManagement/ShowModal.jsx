import React, { useEffect, useState } from "react";
import styles from './NewsManagement.module.css';
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';

function ShowModal({ newsId, closeModal }) {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (newsId) {
            axios.get(`http://localhost:5555/news/${newsId}`)
                .then(response => {
                    setNews(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching news:", error);
                    setLoading(false);
                });
        }
    }, [newsId]);

    if (loading) return <div>Chargement...</div>;

    if (!news) return <div>Aucune news trouvé.</div>;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <h2>{news.name}</h2>
                <p>{news.resume}</p>
                <hr />
                <p>{news.content}</p>
             
            </div>
        </div>
    );
}

export default ShowModal;
