import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';
import Input from './Input/Input';
import styles from './SearchBar.scss';

describe('SearchBar', () => {
  it('should render styles', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(Input).length).to.equal(1);
    expect(wrapper.state().query).to.equal('');
  });

  it('should read input onchange', () => {
    const wrapper = shallow(<SearchBar />);
    const inputEvent = {
      target: {
        value: 'new query',
      },
    };

    wrapper.setState({ query: 'some query' });
    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state().query).to.equal('new query');
  });
});
