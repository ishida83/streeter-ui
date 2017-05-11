import React, { Component } from 'react';

import { Pane } from './routes/Navigation/Navigation';


class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { active: 0 };
  }

  render() {
    const { active } = this.state;

    return (
      <div>
        { Pane[active] }
      </div>
    );
  }
}

export default Root;
