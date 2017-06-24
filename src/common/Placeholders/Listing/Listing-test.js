import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Listing from './Listing';
import styles from './Listing.scss';

describe('Listing', () => {
  it('should render styles', () => {
    const wrapper = shallow(<Listing />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });
});
