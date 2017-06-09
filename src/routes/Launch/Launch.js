import React from 'react';

import logo from './yahoo-logo.png';
import styles from './Launch.scss';

const Launch = () => (
  <div className={styles.launch}>
    <img className={styles.logo} src={logo} alt="Yahoo Auctions Japan" />
    <h1 className={styles.text}>Launch.js</h1>
  </div>
);

export default Launch;
