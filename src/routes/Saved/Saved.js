import React from 'react';

import SavedIcon from './../../common/TabBar/icons/saved.svg';
import { Content } from './../../common/Placeholders/index';
import styles from './Saved.scss';

const Saved = () => (
  <div>
    <div className={styles.header}>Saved Items</div>
    <div className={styles.pane}>
      <Content
        title="Watch your saved items here"
        subtitle="Explore thousands of items for sale on Yahoo Japan"
        link="/search"
        cta="Search for Items"
      >
        <SavedIcon />
      </Content>
    </div>
  </div>
);

export default Saved;
