import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Listings from './Listings';
import url from './../../api/url';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = { listings: null };
  }

  componentWillMount() {
    const { query } = this.props;
    const request = url(query);

    fetch(request)
      .then(response => response.json())
      .then(data => this.setState({ listings: data }))
      .catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    const { listings } = this.state;

    return (
      <div>
        <h1>Results.js</h1>
        { listings && <Listings listings={listings} /> }
      </div>
    );
  }
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Results;
