import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Listings from './Listings/Listings';
import url from './../../../api/url';
import styles from './Results.scss';
import { search } from './../../../api/config';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = { listings: null, count: 0 };
  }

  componentWillMount() {
    const { query } = this.props;
    const request = url(search, query);

    fetch(request)
      .then(response => response.json())
      .then(data => this.setState(
        { listings: data.listings, count: data.count },
      ))
      .catch((err) => {
        console.log('err', err); // eslint-disable-line no-console
      });
  }

  render() {
    const { listings, count } = this.state;
    const { query } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.subtitle}>{count} results for {query}</div>
        { listings && <Listings listings={listings} /> }
      </div>
    );
  }
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
};

Results.defaultProps = {
  query: '14x9',
};

export default Results;