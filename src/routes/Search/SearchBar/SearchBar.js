import React from 'react';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <div className={styles.container}>
    <input
      className={styles.input}
      placeholder="Search Yahoo Auctions Japan..."
    />
  </div>
);

export default SearchBar;
