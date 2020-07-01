import React, { useState, useEffect } from 'react';

const styles = {
  background: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '65px',
  },
  button: {
    marginTop: '15px',
  },
};

const clientID = 'HJMbmNcehaxbaYakdLSgDRjhRTce2lobeFrh2VKPc5Q';

export const Main = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const initialImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query="forest"&orientation=landscape&client_id=${clientID}`,
        );
        const result = await response.json();
        const urlImage = result.urls.regular;
        setUrl(urlImage);
      } catch (err) {
        console.log('Error while fethcing initial random image', err);
      }
    };
    initialImage();
  }, []);

  const getRandomPhoto = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query="forest"&orientation=landscape&client_id=${clientID}`,
      );
      const result = await response.json();
      const urlImage = result.urls.regular;
      setUrl(urlImage);
    } catch (err) {
      console.log('Error while fethcing random image', err);
    }
  };

  return (
    <div style={styles.background}>
      {url && <img src={url} />}
      <button onClick={getRandomPhoto} style={styles.button}>
        Get random image
      </button>
    </div>
  );
};
