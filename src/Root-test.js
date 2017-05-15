import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Root from './Root';
import Search from './routes/Search/Search';

describe('Root', () => {
  it('should render Search component by default', () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(Search).length).to.equal(1);
  });
});
