import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Input from './Input';
import styles from './Input.scss';

describe('Input', () => {
  it('should render styles', () => {
    const inputSpy = spy();
    const wrapper = shallow(<Input onChange={inputSpy} />);

    expect(wrapper.find(`.${styles.input}`).length).to.equal(1);

    wrapper.find('input').props().onChange();

    expect(inputSpy.called).to.equal(true);
  });
});
