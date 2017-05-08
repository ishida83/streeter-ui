import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Results from './Results';
import Listings from './Listings';

describe('Results', () => {
  it('should not render Listings component if no data', () => {
    const wrapper = shallow(<Results query="some string" />);

    expect(wrapper.find(Listings).length).to.equal(0);

    wrapper.setState({ listings: [{ some: 'listing' }] });

    expect(wrapper.find(Listings).length).to.equal(1);
  });
});
