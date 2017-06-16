import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';
import styles from './SearchBar.scss';

describe('SearchBar', () => {
  it('should render styles', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });
});
