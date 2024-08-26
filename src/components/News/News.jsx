import React from 'react';
import styles from './News.module.css';
import news from '../../api/news'

function News() {

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
        {news.map(article => (
        <div key={article.id}>
          <div className={styles.news}>
            <div className={styles.newsImage}>
              <img src={article.cover} alt="Article" />
            </div>
            <div className={styles.newsContent}>
              <h2>{article.name}</h2>
              <p>{article.resume}</p>
              <a href="#">Lire la suite →</a>
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
