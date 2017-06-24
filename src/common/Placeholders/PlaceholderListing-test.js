import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PlaceholderListing from './PlaceholderListing';
import styles from './PlaceholderListing.scss';

describe('PlaceholderListing', () => {
  it('should render styles', () => {
    const wrapper = shallow(<PlaceholderListing />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });
});
