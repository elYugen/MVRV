import React, { useEffect, useState } from "react";
import styles from './NewsManagement.module.css';
import axios from 'axios';
import Loading from '../../../components/Loading/Loading';

function ShowModal({ newsId, closeModal }) {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (newsId) {
            setLoading(true);
            axios.get(`http://localhost:5555/news/${newsId}`)
                .then(response => {
                    setNews(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }, [newsId]);

    if (!newsId) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                {loading ? (
                    <Loading />
                ) : (
                    news ? (
                        <>
                            <h2>{news.name}</h2>
                            <p>{news.resume}</p>
                            <hr />
                            <p>{news.content}</p>
                            <hr />
                            <p>{new Date(news.createdAt).toLocaleDateString()}</p>
                        </>
                    ) : (
                        <p>Aucune information disponible.</p>
                    )
                )}
            </div>
        </div>
    );
}

export default ShowModal;
