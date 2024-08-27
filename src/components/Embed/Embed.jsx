import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const StreamContext = createContext();

export function StreamProvider({ children }) {
  const [streamPath, setStreamPath] = useState('');
  const listeners = React.useRef(new Set());

  const setStreamPathAndNotify = useCallback((newPath) => {
    setStreamPath(newPath);
    listeners.current.forEach(listener => listener(newPath));
  }, []);

  const subscribe = useCallback((listener) => {
    listeners.current.add(listener);
    return () => listeners.current.delete(listener);
  }, []);

  const value = {
    streamPath,
    setStreamPath: setStreamPathAndNotify,
    subscribe
  };

  return (
    <StreamContext.Provider value={value}>
      {children}
    </StreamContext.Provider>
  );
}

export function useStream() {
  return useContext(StreamContext);
}

function Logo() {
  const { setStreamPath } = useStream();

  const handleImageClick = (streamPath) => {
    setStreamPath(streamPath);
  };

  return (
    <section style={{ display: 'flex' }}>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=shrood&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Adam.png" alt="Adam" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Adam</p>
      </div>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=Mickalow&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Namor.png" alt="Namor" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Namor</p>
      </div>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=FeFeGG&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Namor.png" alt="Namor" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Namor</p>
      </div>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Namor.png" alt="Namor" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Namor</p>
      </div>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=MarvelRivalsfr&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Namor.png" alt="Namor" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Namor</p>
      </div>
      <div onClick={() => handleImageClick('https://player.twitch.tv/?channel=Necrosw&parent=localhost')} style={{ margin: '5px', textAlign: 'center' }}>
        <img src="./charicon/Thor.png" alt="Namor" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', margin: '5px 0 0 0' }}>Namor</p>
      </div>
    </section>
  );
}

function TwitchEmbed() {
  const { streamPath } = useStream();

  return (
    <div style={{ position: 'relative' }}>
      <iframe
        style={{width: '1000px', height: '500px' }}
        width="100%"
        height="100%"
        src={streamPath}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        title="Twitch Stream"
      />
    </div>
  );
}

function App() {
  return (
    <StreamProvider>
      <Logo />
      <TwitchEmbed />
    </StreamProvider>
  );
}

export default App;
