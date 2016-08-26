import React, { PropTypes } from 'react';
import Navigation from './Navigation';

import styles from './Navigation.scss';

const App = (props) => {
  console.log("styles", styles);
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
