import React from 'react';

import Tab from './Tab/Tab';
import HomeIcon from './icons/home.svg';
import SearchIcon from './icons/search.svg';
import SavedIcon from './icons/saved.svg';
import styles from './TabBar.scss';

const TabBar = () => (
  <div className={styles.container}>
    <Tab name="Home" active={false}>
      <HomeIcon className={styles.homeIcon} />
    </Tab>
    <Tab name="Search" active>
      <SearchIcon className={styles.searchIcon} />
    </Tab>
    <Tab name="Saved" active={false}>
      <SavedIcon className={styles.savedIcon} />
    </Tab>
  </div>
);

export default TabBar;
