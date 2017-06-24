import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from './Home';
import styles from './Home.scss';

describe('Home', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(`.${styles.header}`).length).to.equal(1);

    expect(wrapper.find('img').prop('alt')).to.equal('Yahoo Auctions Japan');
    expect(wrapper.find(`.${styles.caption}`).text()).to.equal('Streeter UI');
  });
});
