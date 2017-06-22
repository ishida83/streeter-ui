import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input/Input';
import styles from './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.keyCode === 13) {
      this.setState({ query: event.target.value });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Input onChange={this.handleChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  query: '',
};

export default SearchBar;
