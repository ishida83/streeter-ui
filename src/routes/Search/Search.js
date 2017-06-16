import React from 'react';

import Results from './Results';
import SearchBar from './SearchBar/SearchBar';
import styles from './Search.scss';

const Search = () => (
  <div className={styles.search}>
    <SearchBar />
    <Results />
  </div>
);

export default Search;
