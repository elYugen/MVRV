import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../assets/heroread.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Assurez-vous d'importer useParams
import Loading from '../components/Loading/Loading'
import { Link } from 'react-router-dom';

function ShowHero() {
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // Utilisez useParams pour obtenir l'ID du héros

    useEffect(() => {
        axios.get(`http://localhost:5555/heros/${id}`)
            .then(response => {
                setHero(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    return (
        <>
        <Navbar/>
        <section>
            <div className="container">
                <div className="herosContainer">
                    
                {loading ? (
                    <Loading />
                ) : (
                    hero && (
                        <>
                        <div className="herosImage">
                            <img src={hero.sprite} alt={hero.name} />
                        </div>
                        <div className="heros">
                            <h1>Nom : {hero.name}</h1>
                            <p >Santé : {hero.health}</p>
                            <p>Difficulté : {hero.difficulty}</p>
                            <p>Catégorie : {hero.category}</p>
                            <p>Passif : {hero.passivename}</p>
                            <div>
                                <h2 >Sorts :</h2>
                                <ul>
                                    {hero.spellsname.map((spell, index) => (
                                        <li key={index} >
                                            <strong>{spell}:</strong> {hero.spells[index][spell]}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        </>                
                    )
                )}
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}

export default ShowHero;