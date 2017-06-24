import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import SearchBar from './SearchBar';
import styles from './SearchBar.scss';

describe('SearchBar', () => {
  const context = { updateQuery: spy() };

  it('should render styles', () => {
    const wrapper = shallow(<SearchBar />, { context });

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
  });

  it('should read input onchange', () => {
    const wrapper = shallow(<SearchBar />, { context });
    const inputEvent = { target: { value: 'new query' } };

    wrapper.setState({ query: 'some query' });
    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state().query).to.equal('new query');
  });

  it('should update query onSubmit', () => {
    const wrapper = shallow(<SearchBar />, { context });
    const inputEvent = { preventDefault: () => {} };

    wrapper.setState({ query: 'some query' });
    wrapper.instance().handleSubmit(inputEvent);

    expect(context.updateQuery.called).to.equal(true);
  });

  it('should display search query after submit', () => {
    const wrapper = shallow(<SearchBar />, { context });

    expect(wrapper.find('form').length).to.equal(1);
    expect(wrapper.find('button').length).to.equal(0);

    wrapper.setState({ searchable: false });

    expect(wrapper.find('form').length).to.equal(0);
    expect(wrapper.find('button').length).to.equal(1);
  });
});
