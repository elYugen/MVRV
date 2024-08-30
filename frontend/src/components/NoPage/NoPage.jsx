import React from "react";
import styles from "./NoPage.module.css";

function NoPage() {
  document.title = `MVRV Database - Page Inexistante`;

  return (
    <>
      <div id={styles.notfound}>
        <div className={styles.notfound}>
          <div className={styles.notfound404}>
            <h1>Oops!</h1>
          </div>
          <br />
          <h2>404 - Page non trouvé</h2>
          <p>
            Thanos a sûrement supprimé la page que tu veux atteindre avec les gemmes de l'infini
          </p>
          <a href="/">Retour à l'Accueil</a>
        </div>
      </div>
    </>
  );
}

export default NoPage;
