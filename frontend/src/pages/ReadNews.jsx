import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading"
import '/src/assets/newsread.css';

function ReadNews() {

    const [news, setNews] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/news/${id}`)
        .then(response => {
            setNews(response.data)
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
            setLoading(false);
        })
    }, [])

    document.title = `MVRV Database - ${news.name}`;

    return(
        <>
        <Navbar />
        <section>
        {loading ? (
                <Loading />
            ) : (
                <div className="newsContainer">
                    <div className="news">
                        <h1>{news.name}</h1>
                        <p>{news.resume}</p>
                        <p >Date de création : {news.createdAt}</p>
                        <hr />
                        <p>{news.content}</p>
                    </div>

                </div>
            )}
        </section>      
        <Footer />
        </>
    );
}

export default ReadNews