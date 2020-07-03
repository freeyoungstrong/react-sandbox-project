import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles';

const Button = ({ title, onClick }) => {
  const componentStyles = {
    wrap: 'wrap',
  };
  return (
    <button onClick={onClick} styleName={componentStyles.wrap}>
      {title}
    </button>
  );
};

export default CSSModules(Button, styles);
