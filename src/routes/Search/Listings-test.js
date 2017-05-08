// TODO: Write tests when styles are used

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Listings from './Listings';
import styles from './Listings.scss';

describe('Listings', () => {
  it('should render listings', () => {
    const listing = {
      url: 'some url',
      title: 'some title',
      price: 'some price',
      id: 'some id',
      img: 'some img',
    };
    const listings = [listing, listing];
    const wrapper = shallow(<Listings listings={listings} />);
    const img = wrapper.find(`.${styles.img}`);

    expect(img.length).to.equal(2);
  });
});
