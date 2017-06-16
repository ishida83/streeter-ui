import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Results from './Results';
import Listings from './Listings/Listings';
import styles from './Results.scss';

describe('Results', () => {
  it('should not render Listings component if no data', () => {
    const wrapper = shallow(<Results query="some string" />);
    const listing = {
      url: 'some url',
      title: 'some title',
      price: 'some price',
      id: 'some id',
      img: 'some img',
    };

    expect(wrapper.find(`.${styles.subtitle}`).length).to.equal(1);
    expect(wrapper.find(Listings).length).to.equal(0);

    wrapper.setState({ listings: [listing] });

    expect(wrapper.find(Listings).length).to.equal(1);
  });
});
