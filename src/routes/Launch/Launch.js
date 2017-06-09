import React from 'react';

import logo from './yahoo-logo.png';
import styles from './Launch.scss';

const Launch = () => (
  <div className={styles.launch}>
    <img src={logo} alt="Yahoo Auctions Japan" />
    <h1>Launch.js</h1>
  </div>
);

export default Launch;
