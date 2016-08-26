import React from "react";
import { Link, IndexLink } from 'react-router';

const Navigation = () => (
  <div className="navigation">
      <IndexLink className="navigation-item" to="/">
          Home
      </IndexLink>
      {' | '}
      <Link className="navigation-item" to="/servers">
          Servers
      </Link>
      {' | '}
      <Link className="navigation-item" to="/login">
          Login
      </Link>
  </div>
);

export default Navigation;