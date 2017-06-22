import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';
import styles from './Search.scss';

class Search extends Component {
  constructor() {
    super();

    this.state = { query: '' };
    this.updateQuery = this.updateQuery.bind(this);
  }

  getChildContext() {
    return { updateQuery: this.updateQuery };
  }

  updateQuery(newQuery) {
    this.setState({ query: newQuery });
  }

  render() {
    return (
      <div className={styles.container}>
        <SearchBar />
        <Results />
      </div>
    );
  }
}

Search.childContextTypes = {
  updateQuery: PropTypes.func,
};

Search.propTypes = {
  query: PropTypes.string,
};

export default Search;
