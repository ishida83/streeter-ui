import React from 'react';
import { Link } from 'react-router-dom';

import Tab from './Tab/Tab';
import HomeIcon from './icons/home.svg';
import SearchIcon from './icons/search.svg';
import SavedIcon from './icons/saved.svg';
import styles from './TabBar.scss';

const TabBar = () => (
  <div className={styles.container}>
    <Tab name="Home" active={false}>
      <Link to="/home">
        <HomeIcon className={styles.homeIcon} />
      </Link>
    </Tab>
    <Tab name="Search" active>
      <Link to="/search">
        <SearchIcon className={styles.searchIcon} />
      </Link>
    </Tab>
    <Tab name="Saved" active={false}>
      <Link to="/saved">
        <SavedIcon className={styles.savedIcon} />
      </Link>
    </Tab>
  </div>
);

export default TabBar;
