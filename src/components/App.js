import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './../styles/App.css';

const App = (props) => {
  return (
    <div>
      <div className="navigation">
        <IndexLink className="navigation-item" to="/">Home</IndexLink>
        {' | '}
        <Link className="navigation-item" to="/servers">Servers</Link>
        {' | '}
        <Link className="navigation-item" to="/login">Login</Link>
        <br/>
      </div>

      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
