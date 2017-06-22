import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TabBar from './TabBar';
import Tab from './Tab/Tab';
import tabs from './constants';
import styles from './TabBar.scss';

describe('TabBar', () => {
  it('should render Tabs', () => {
    const wrapper = shallow(<TabBar />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(Tab).length).to.equal(tabs.length);
  });
});
