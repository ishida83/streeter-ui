import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '', submitted: '', focused: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
  }

  handleSubmit(event) {
    const { query } = this.state;

    if (query) {
      this.context.updateQuery(query);
      this.setState({ focused: false, submitted: query });
    }
    event.preventDefault();
  }

  handleClick() {
    this.setState({ focused: true });
  }

  handleFocus() {
    this.setState({ focused: true });
  }

  handleBlur() {
    const { submitted } = this.state;

    if (submitted) {
      this.setState({ focused: false });
    }
  }

  render() {
    const { query, submitted, focused } = this.state;

    // TODO: Move components
    const Searchable = (
      <form onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className={styles.input}
          placeholder="Search Yahoo Auctions Japan..."
          type="text"
          value={query}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        { focused &&
          <button className={styles.cancel} type="button" onClick={this.handleClick}>
          Cancel
        </button> }
      </form>
    );

    const Submitted = (
      <button className={styles.searched} type="button" onClick={this.handleClick}>
        &quot;{submitted}&quot;
      </button>
    );

    return (
      <div className={styles.container}>
        { focused ? Searchable : Submitted }
      </div>
    );
  }
}

SearchBar.contextTypes = {
  updateQuery: PropTypes.func,
};

export default SearchBar;
