import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Launch from './Launch';
import styles from './Launch.scss';

describe('Launch', () => {
  it('should render', () => {
    const wrapper = shallow(<Launch />);

    expect(wrapper.find(`.${styles.launch}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.text}`).length).to.equal(1);
  });
});
