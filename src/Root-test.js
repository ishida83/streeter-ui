import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Root from './Root';
import styles from './index.scss';

describe('Root', () => {
  it('should render a h1 with the className of "red"', () => {
    const wrapper = shallow(<Root />);
    const header = wrapper.find(`.${styles.red}`);
    expect(header.length).to.equal(1);
  });
  it('should ensure Sinon is working', () => {
    const callbackSpy = sinon.spy();
    const callTheCallback = () => (callbackSpy('foo'));

    callTheCallback();
    expect(callbackSpy.getCall(0).args[0]).to.equal('foo');
  });
});
