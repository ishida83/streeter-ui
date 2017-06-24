import React from 'react';

import logo from './../Launch/yahoo-logo.png';
import styles from './Home.scss';

const Home = () => (
  <div>
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Yahoo Auctions Japan" />
      <div className={styles.caption}>Streeter UI</div>
    </div>
    <div className={styles.pane}>
      <div className={styles.description}>
        Find rare and original items from Yahoo Auctions Japan
      </div>
    </div>
  </div>
);

export default Home;
