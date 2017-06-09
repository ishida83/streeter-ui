import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Search from './Search';
import Results from './Results';
import styles from './Search.scss';

describe('Results', () => {
  it('should render Results component by default', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find(`.${styles.search}`).length).to.equal(1);
    expect(wrapper.find(Results).length).to.equal(1);
  });
});
