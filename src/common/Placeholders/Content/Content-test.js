import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Content from './Content';
import styles from './Content.scss';

describe('Content', () => {
  it('should render children and props', () => {
    const props = {
      children: (<h1>some child</h1>),
      title: 'some title',
      subtitle: 'some subtitle',
      link: 'some link',
      cta: 'some cta',
    };
    const wrapper = shallow(<Content {...props} />);

    expect(wrapper.find(`.${styles.content}`).length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('some child');
    expect(wrapper.find(`.${styles.title}`).text()).to.equal('some title');
    expect(wrapper.find(`.${styles.subtitle}`).text()).to.equal('some subtitle');
    expect(wrapper.find(`.${styles.link}`).length).to.equal(1);
    expect(wrapper.find(`.${styles.link}`).text()).to.equal('some cta');
  });
});
