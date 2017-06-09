import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Listings from './Listings';
import url from './../../api/url';
import styles from './Results.scss';
import { search } from './../../api/config';

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
        console.log('err', err);
      });
  }

  render() {
    const { listings, count } = this.state;
    const { query } = this.props;

    return (
      <div>
        <span className={styles.subtitle}>{count} results for {query}</span>
        { listings && <Listings listings={listings} /> }
      </div>
    );
  }
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Results;
