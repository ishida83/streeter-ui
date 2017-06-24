import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';

import Listing from './Listing/Listing';
import url from './../../../api/url';
import styles from './Results.scss';
import PlaceholderResults from './../../../common/Placeholders/PlaceholderResults';
import { search } from './../../../api/config';

class Results extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.state = { listings: null, count: null, fetching: false };
  }

  componentDidMount() {
    const { query } = this.props;
    this.fetchData(query);
  }

  componentWillReceiveProps(nextProps) {
    const { query } = nextProps;
    this.fetchData(query);
  }

  fetchData(query) {
    const request = url(search, query);
    this.setState({ fetching: true });

    fetch(request)
      .then(response => response.json())
      .then(data => this.setState(
        { listings: data.listings, count: data.count, fetching: false },
      ))
      .catch((err) => {
        console.log('err', err); // eslint-disable-line no-console
      });
  }

  render() {
    const { listings, count, fetching } = this.state;
    const { query } = this.props;

    const PopulatedResults = (
      <div className={styles.container}>
        <div className={styles.subtitle}>{count} results for {query}</div>
        { listings && listings.map((listing, index) => (
          <Listing listing={listing} key={index} />
        )) }
      </div>
    );

    return (
      // TODO: Refactor
      <div>
        { fetching ? <PlaceholderResults /> : PopulatedResults }
      </div>
    );
  }
}

Results.propTypes = {
  query: PropTypes.string.isRequired,
};

Results.defaultProps = {
  query: '',
};

export default Results;
