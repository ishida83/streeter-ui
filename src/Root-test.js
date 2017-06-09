import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Root from './Root';
import Search from './routes/Search/Search';
import Launch from './routes/Launch/Launch';

describe('Root', () => {
  it('should render Launch before Search component', () => {
    const wrapper = shallow(<Root />);

    expect(wrapper.find(Launch).length).to.equal(1);
    expect(wrapper.find(Search).length).to.equal(1);

    wrapper.setState({ loading: false });

    expect(wrapper.find(Launch).length).to.equal(0);
    expect(wrapper.find(Search).length).to.equal(1);
  });
});
