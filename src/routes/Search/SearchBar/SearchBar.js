import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  handleSubmit(event) {
    this.context.updateQuery(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            placeholder="Search Yahoo Auctions Japan..."
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  updateQuery: PropTypes.func,
};

export default SearchBar;
