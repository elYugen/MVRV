import styles from './News.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/news')
        .then((response) => {
            setNews(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
  }, []);

  if(news.length === 0) {
    return(
      <div className={styles.newsContainer}>
        <div className={styles.newsError}>
          <p>Il n'y a aucun article actuellement</p>
        </div>
      </div>
    )
  } else {
    return(
      <div className={styles.newsContainer}>
        {news.map((article) => (
        <div key={article._id}>
          <div className={styles.news}>
            <div className={styles.newsImage}>
              <img src={article.cover} alt="Article" />
            </div>
            <div className={styles.newsContent}>
              <h2>{article.name}</h2>
              <p className={styles.newsResume}>{article.resume}</p>
              <Link to={`/news/read/${article._id}`}>Lire la suite →</Link>
            </div>
          </div>
          <hr />
        </div>
        ))}
      </div>
    );  
  }
}

export default News;