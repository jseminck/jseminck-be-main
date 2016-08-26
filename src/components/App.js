import React, { PropTypes } from 'react';
import Navigation from "./Navigation";
import './../styles/App.css';

const App = (props) => {
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
