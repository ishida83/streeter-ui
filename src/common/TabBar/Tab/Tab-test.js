import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tab from './Tab';
import styles from './Tab.scss';

describe('Tab', () => {
  it('should render styles with props', () => {
    const props = { name: 'some tab name', active: true };
    const wrapper = shallow(<Tab {...props} />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.active}`).length).to.equal(1);
    expect(wrapper.find('div').at(2).text()).to.equal('some tab name');
  });
});
