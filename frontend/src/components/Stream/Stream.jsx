import React, { useState } from 'react';
import styles from './Stream.module.css';

function Stream() {
  const [channel, setChannel] = useState('MarvelRivalsfr'); // Canal par défaut

  const handleChannelChange = (newChannel) => {
    setChannel(newChannel);
  };

  return (
    <div>
      {/* Iframe de Twitch */}
      <iframe  width="100%"  height="500"  src={`https://player.twitch.tv/?autoplay=false&channel=${channel}&parent=localhost`}  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" className={styles.Stream} title="Twitch Stream"><small>Powered by <a href="https://embed.tube/embed-code-generator/twitch/">twitch embed</a> generator</small></iframe>

      {/* Box avec les logos des autres streamers */}
      <div className={styles.streamerBox}>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/00409dc9-32e6-4917-8d73-109a8201f53e-profile_image-70x70.png" alt="Streamer 1" onClick={() => handleChannelChange('MarvelRivalsfr')} className={styles.streamerLogo}/>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea21fba0-a2cd-4689-98cf-f32c2bfae266-profile_image-70x70.png" alt="Streamer 2" onClick={() => handleChannelChange('IkerTTVV')} className={styles.streamerLogo}/>
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/a5f9c2f9-6430-41f5-90bc-8308419a9710-profile_image-70x70.png" alt="Streamer 3" onClick={() => handleChannelChange('thelangam')} className={styles.streamerLogo}/>
      </div>
    </div>
  );
}

export default Stream;
