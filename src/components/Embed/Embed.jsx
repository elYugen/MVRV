import React from 'react';

function TwitchEmbed () {
  return (
    <div style={{ paddingBottom: '56.25%', position: 'relative' }}>
      <iframe
        style={{width: '1000px', height: '500px' }}
        width="100%"
        height="100%"
        src="https://player.twitch.tv/?autoplay=false&channel=sinatraa&parent=localhost"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Twitch Stream"
      ></iframe>
    </div>
  );
};

export default TwitchEmbed;
