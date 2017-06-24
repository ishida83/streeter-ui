import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Listing from './Listing';
import styles from './Listing.scss';

describe('Listing', () => {
  it('should render listings', () => {
    const listing = {
      url: 'some url',
      title: 'some title',
      price: 'some price',
      id: 'some id',
      img: 'some img',
    };
    const wrapper = shallow(<Listing listing={listing} />);
    const img = wrapper.find(`.${styles.img}`);

    expect(img.length).to.equal(1);
  });
});
