import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Results from './Results';
import Listing from './Listing/Listing';
import { Results as Placeholder } from './../../../common/Placeholders/index';
import styles from './Results.scss';

describe('Results', () => {
  it('should not render Listing component if no data', () => {
    const wrapper = shallow(<Results query="some string" />);
    const listing = {
      url: 'some url',
      title: 'some title',
      price: 'some price',
      id: 'some id',
      img: 'some img',
    };

    expect(wrapper.find(`.${styles.container}`).length).to.equal(1);
    expect(wrapper.find(Listing).length).to.equal(0);

    wrapper.setState({ listings: [listing] });

    expect(wrapper.find(Listing).length).to.equal(1);
  });

  it('should show placeholder when fetching data', () => {
    const wrapper = shallow(<Results query="some string" />);

    expect(wrapper.find(Placeholder).length).to.equal(0);

    wrapper.setState({ fetching: true });

    expect(wrapper.find(Placeholder).length).to.equal(1);
  });
});
