import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Root from './Root';
import Home from './routes/Home/Home';
import Search from './routes/Search/Search';

describe('Root', () => {
  it('should render Home component by default', () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(Home).length).to.equal(1);
    expect(wrapper.find(Search).length).to.equal(0);
  });
});
