import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';
import styles from './SearchBar.scss';

describe('SearchBar', () => {
  const context = { updateQuery: () => {} };

  it('should render styles', () => {
    const wrapper = shallow(<SearchBar />, { context });

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });

  it('should read input onchange', () => {
    const wrapper = shallow(<SearchBar />, { context });
    const inputEvent = { target: { value: 'new query' } };

    wrapper.setState({ query: 'some query' });
    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state().query).to.equal('new query');
  });
});
