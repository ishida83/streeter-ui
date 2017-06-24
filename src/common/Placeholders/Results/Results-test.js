import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Results from './Results';
import Listing from './../Listing/Listing';
import styles from './Results.scss';

describe('Results', () => {
  it('should render styles and Listings', () => {
    const wrapper = shallow(<Results />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(Listing).length).to.equal(4);
  });
});
