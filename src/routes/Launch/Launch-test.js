import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Launch from './Launch';

describe('Launch', () => {
  it('should render', () => {
    const wrapper = shallow(<Launch />);

    expect(wrapper.find('h1').length).to.equal(1);
  });
});
