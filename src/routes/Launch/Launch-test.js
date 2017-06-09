import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Launch from './Launch';
import styles from './Launch.scss';

describe('Launch', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Launch />);

    expect(wrapper.find(`.${styles.launch}`).length).to.equal(1);
  });
});
