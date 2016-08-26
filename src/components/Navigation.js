import React from "react";
import { Link, IndexLink } from 'react-router';
import styles from './Navigation.scss';

const Navigation = () => (
  <div className={styles.container}>
      <IndexLink className={styles.item} to="/">
          Home
      </IndexLink>
      {' | '}
      <Link className={styles.item} to="/servers">
          Servers
      </Link>
      {' | '}
      <Link className={styles.item} to="/login">
          Login
      </Link>
  </div>
);

export default Navigation;