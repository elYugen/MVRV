import React, { useState, useEffect } from 'react';
import styles from './Stream.module.css';
import axios from 'axios';

function Stream() {
  const [channel, setChannel] = useState('MarvelRivalsfr'); // chaine par défaut
  const [streamers, setStreamers] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:5555/streamers') 
      .then(response => {
        setStreamers(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des streamers:', error);
      });
  }, []);

  const handleChannelChange = (newChannel) => {
    setChannel(newChannel);
  };

  return (
    <div>
      {/* Iframe de Twitch */}
      <iframe  width="100%"  height="500"  src={`https://player.twitch.tv/?autoplay=false&channel=${channel}&parent=localhost`}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" className={styles.Stream} title="Twitch Stream"><small>Powered by <a href="https://embed.tube/embed-code-generator/twitch/">twitch embed</a> generator</small></iframe>

      {/* Box avec les logos des autres streamers */}
      <div className={styles.streamerBox}>
        {streamers.map((streamer) => (
          <img key={streamer._id} src={streamer.picture} alt={streamer.name} onClick={() => handleChannelChange(streamer.name)} className={styles.streamerLogo}/>
        ))}
      </div>
    </div>
  );
}

export default Stream;
