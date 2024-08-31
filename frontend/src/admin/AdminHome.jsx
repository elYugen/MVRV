import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import styles from "../components/News/News.module.css";
import herolist from "../components/HeroList/HeroList.module.css";
import adminstyles from "./assets/admin.module.css";

function Home() {
  document.title = "MVRV Admin Panel";

  const [news, setNews] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsResponse, heroesResponse, usersResponse] = await Promise.all(
          [
            axios.get("http://localhost:5555/news"),
            axios.get("http://localhost:5555/heros"),
            axios.get("http://localhost:5555/users"),
          ]
        );
        setNews(newsResponse.data.data);
        setHeroes(heroesResponse.data.data);
        setUsers(usersResponse.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const latestNews = news.slice(0, 3);
  const latestHeroes = heroes.slice(0, 3);
  const latestUsers = users.slice(0, 3);

  return (
    <>
      <AdminNavbar />
      <section>
        <div className={adminstyles.container}>
          <h1>Récap Administrateur</h1>

          {/* ----- Les 3 dernières news ajoutées ----- */}
          {news.length === 0 ? (
            <div className={styles.newsContainer}>
              <div className={styles.newsError}>
                <p>Il n'y a aucun article actuellement</p>
              </div>
            </div>
          ) : (
            <div className={styles.newsContainer}>
              <h3 className={styles.newsLatest}>Les 3 derniers articles ajoutées</h3>
              {latestNews.map((article) => (
                <div key={article._id}>
                  <div className={styles.news}>
                    <div className={styles.newsImage}>
                      <img src={article.cover} alt="Article" />
                    </div>
                    <div className={styles.newsContent}>
                      <h2>{article.name}</h2>
                      <p className={styles.newsResume}>{article.resume}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className={styles.newsLatest}>
                <button className={adminstyles.UserButton}>
                  <Link to="/admin/news" className={adminstyles.viewMoreButton}>
                    Voir les autres news →
                  </Link>
                </button>
              </div>
            </div>
          )}

          {/* ----- Les 3 derniers héros ajoutés ----- */}
          <div className={styles.newsContainer}>
            {heroes.length === 0 ? (
              <div className={styles.newsContainer}>
                <div className={styles.newsError}>
                  <p>Il n'y a aucun héros actuellement</p>
                </div>
              </div>
            ) : (
              <table className={herolist.herolistTable}>
                <thead>
                  <tr>
                    <th colSpan="2"><center>Les 3 derniers héros ajoutées</center></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td className={herolist.heroImage}>
                  {latestHeroes.map((hero) => (
                        <img key={hero._id} src={hero.icon} alt={hero.name} />
                  ))}
                </td>
                </tr>
                </tbody>
              </table>
            )}
            <div className={styles.newsLatest}>
              <button className={adminstyles.UserButton}>
                <Link to="/admin/hero" className={adminstyles.viewMoreButton}>
                  Voir les autres héros →
                </Link>
              </button>
            </div>
          </div>

          {/* ----- Les 3 derniers utilisateurs inscrits ----- */}
          {users.length === 0 ? (
            <div className={styles.newsContainer}>
              <div className={styles.newsError}>
                <p>Il n'y a aucun utilisateur actuellement</p>
              </div>
            </div>
          ) : (
            <div className={styles.newsContainer}>
              <h3 className={styles.newsLatest}>
                Les 3 derniers utilisateurs inscrits
              </h3>
              {latestUsers.map((user) => (
                <div key={user._id}>
                  <div className={styles.news}>
                    <div className={styles.newsContent}>
                      <p>{user.username}</p>
                      <p className={styles.newsResume}>Email: {user.email}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
              <div className={styles.newsLatest}>
                <button className={adminstyles.UserButton}>
                  <Link to="/admin/users" className={adminstyles.viewMoreButton}>
                    Voir les autres utilisateurs →
                  </Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
