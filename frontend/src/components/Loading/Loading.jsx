import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.css';

function Loading() {
  return(
    <>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingError}>
          <p>Chargement en cours</p>
        </div>
      </div>
    </>
  )
};


export default Loading;
