import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Tab from './Tab';
import SearchIcon from './../icons/search.svg';
import styles from './Tab.scss';

describe('Tab', () => {
  const props = { name: 'some tab name', active: true };

  it('should render styles with props', () => {
    const wrapper = shallow(<Tab {...props} />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.active}`).length).to.equal(2);
    expect(wrapper.find('div').at(2).text()).to.equal('some tab name');
  });

  it('should render children', () => {
    const wrapper = shallow(<Tab {...props}><SearchIcon /></Tab>);

    expect(wrapper.find(SearchIcon).length).to.equal(1);
  });
});
