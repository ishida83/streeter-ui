import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import url from './api/url';
import { heartbeat } from './api/config';
import Search from './routes/Search/Search';
import Launch from './routes/Launch/Launch';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentWillMount() {
    const request = url(heartbeat);

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => this.setState({ loading: false }), 2000);
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        { loading && <Launch /> }
        <Search />
      </div>
    );
  }
}

export default Root;
