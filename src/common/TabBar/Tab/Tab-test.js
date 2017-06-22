import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tab from './Tab';
import styles from './Tab.scss';

describe('Tab', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Tab />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });
});
