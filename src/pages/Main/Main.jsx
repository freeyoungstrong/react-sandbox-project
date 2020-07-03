import React, { useState, useEffect, useCallback } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles';

const clientID = 'HJMbmNcehaxbaYakdLSgDRjhRTce2lobeFrh2VKPc5Q';

const Main = () => {
  const [url, setUrl] = useState('');
  const [altImage, setAltImage] = useState('');

  const componentStyles = {
    background: 'background',
    button: 'button',
  };

  const getRandomPhoto = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query="forest"&orientation=landscape&client_id=${clientID}`,
      );
      const result = await response.json();
      const urlImage = result.urls.regular;
      const alt = result.alt_description;
      setUrl(urlImage);
      setAltImage(alt);
    } catch (err) {
      console.log('Error while fethcing random image', err);
    }
  }, []);

  useEffect(() => {
    getRandomPhoto();
  }, [getRandomPhoto]);

  return (
    <div styleName={componentStyles.background}>
      {url && <img src={url} alt={altImage} />}
      <button onClick={getRandomPhoto} styleName={componentStyles.button}>
        Get random image
      </button>
    </div>
  );
};

export default CSSModules(Main, styles);
