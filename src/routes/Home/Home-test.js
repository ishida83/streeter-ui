import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './Home';
import styles from './Home.scss';

describe('Home', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });
});
