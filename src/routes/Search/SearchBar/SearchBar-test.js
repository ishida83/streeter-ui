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


  it('should display Submitted if valid query', () => {
    const wrapper = shallow(<SearchBar />, { context });

    expect(wrapper.find(`.${styles.input}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.cancel}`).length).to.equal(1);

    wrapper.setState({ focused: false, submitted: 'some submit' });

    expect(wrapper.find(`.${styles.input}`).length).to.equal(0);
    expect(wrapper.find(`.${styles.searched}`).length).to.equal(1);
  });

  describe('handleChange', () => {
    it('should read input onChange', () => {
      const wrapper = shallow(<SearchBar />, { context });
      const inputEvent = { target: { value: 'new query' } };

      wrapper.setState({ query: 'some query' });
      wrapper.instance().handleChange(inputEvent);

      expect(wrapper.state().query).to.equal('new query');
    });
  });

  describe('handleSubmit', () => {
    const inputEvent = { preventDefault: () => {} };

    it('should update query onSubmit', () => {
      const wrapper = shallow(<SearchBar />, { context });

      wrapper.setState({ query: 'some query' });
      wrapper.instance().handleSubmit(inputEvent);

      expect(context.updateQuery.called).to.equal(true);
    });

    it('should not update submitted if no query', () => {
      const wrapper = shallow(<SearchBar />, { context });

      wrapper.instance().handleSubmit(inputEvent);

      expect(wrapper.state().submitted).to.equal('');
    });
  });

  describe('handleClick', () => {
    it('should display Searchable and hide Submitted', () => {
      const wrapper = shallow(<SearchBar />);

      wrapper.setState({ focused: false, submitted: 'some submitted' });

      expect(wrapper.find(`.${styles.input}`).length).to.equal(0);
      expect(wrapper.find(`.${styles.searched}`).length).to.equal(1);

      wrapper.instance().handleClick();

      expect(wrapper.find(`.${styles.input}`).length).to.equal(1);
      expect(wrapper.find(`.${styles.searched}`).length).to.equal(0);
    });
  });

  describe('onFocus and onBlur', () => {
    it('should show Cancel only when in focus', () => {
      const wrapper = shallow(<SearchBar />);

      expect(wrapper.find(`.${styles.cancel}`).length).to.equal(1);

      wrapper.setState({ focused: false });

      expect(wrapper.find(`.${styles.cancel}`).length).to.equal(0);
    });
  });
});
