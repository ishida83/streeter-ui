import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import PlaceholderResults from './PlaceholderResults';
import PlaceholderListing from './PlaceholderListing';
import styles from './PlaceholderResults.scss';

describe('PlaceholderResults', () => {
  it('should render styles and Listings', () => {
    const wrapper = shallow(<PlaceholderResults />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(PlaceholderListing).length).to.equal(4);
  });
});
