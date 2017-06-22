import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TabBar from './TabBar';
import Tab from './Tab/Tab';
import styles from './TabBar.scss';

describe('TabBar', () => {
  it('should render Tab', () => {
    const wrapper = shallow(<TabBar />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(Tab).length).to.equal(1);
  });
});
