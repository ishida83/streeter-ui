import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Search from './Search';
import SearchBar from './SearchBar/SearchBar';
import Results from './Results/Results';
import styles from './Search.scss';

describe('Results', () => {
  it('should not render results when there is no query', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(SearchBar).length).to.equal(1);
    expect(wrapper.find(Results).length).to.equal(0);
  });

  it('should render update queries', () => {
    const wrapper = shallow(<Search />);
    const query = 'some new query';

    expect(wrapper.state().query).to.equal('');

    wrapper.instance().updateQuery(query);

    expect(wrapper.state().query).to.equal('some new query');
  });
});
