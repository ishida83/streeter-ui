import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Launch from './routes/Launch/Launch';
import TabBar from './common/TabBar/TabBar';
import url from './api/url';
import { heartbeat } from './api/config';

injectTapEventPlugin();

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
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log('err', err); // eslint-disable-line no-console
      });
  }

  render() {
    const { loading } = this.state;
    const { children } = this.props;

    return (
      <div>
        { loading && <Launch />}
        { !loading && children }
        { !loading && <TabBar /> }
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
