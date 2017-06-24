import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '', searchable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  handleSubmit(event) {
    const { query } = this.state;
    this.context.updateQuery(query);
    this.setState({ searchable: false });
    event.preventDefault();
  }

  handleClick() {
    this.setState({ searchable: true });
  }

  render() {
    const { query, searchable } = this.state;

    const Searchable = (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className={styles.input}
          placeholder="Search Yahoo Auctions Japan..."
          type="text"
          value={query}
          onChange={this.handleChange}
        />
      </form>
    );

    const Searched = (
      <button className={styles.searched} type="button" onClick={this.handleClick}>
        &quot;{query}&quot;
      </button>
    );

    return (
      <div className={styles.container}>
        { searchable ? Searchable : Searched }
      </div>
    );
  }
}

SearchBar.contextTypes = {
  updateQuery: PropTypes.func,
};

export default SearchBar;
