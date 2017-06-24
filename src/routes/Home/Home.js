import React from 'react';

import logo from './../Launch/yahoo-logo.png';
import HomeIcon from './../../common/TabBar/icons/home.svg';
import { Content } from './../../common/Placeholders/index';
import styles from './Home.scss';

const Home = () => (
  <div>
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Yahoo Auctions Japan" />
      <div className={styles.caption}>Streeter UI</div>
    </div>
    <div className={styles.pane}>
      <div className={styles.description}>
        Find rare Japanese items from Yahoo Auctions
      </div>
      <Content
        title="Explore new items from your saved searches"
        subtitle="Stay up to date with all your searches"
        link="/search"
        cta="Explore Yahoo Auctions"
      >
        <HomeIcon />
      </Content>
    </div>
  </div>
);

export default Home;
