import React from 'react';
import { Link } from 'react-router-dom';

import SavedIcon from './../../common/TabBar/icons/saved.svg';
import styles from './Saved.scss';

const Saved = () => (
  <div>
    <div className={styles.header}>Saved Items</div>
    <div className={styles.pane}>
      <div className={styles.content}>
        <SavedIcon />
        <div className={styles.title}>
          Watch your saved items here
        </div>
        <div className={styles.subtitle}>
          Explore thousands of items for sale on Yahoo Japan
        </div>
        <Link to="/search">
          <div className={styles.link}>
            Search for Items
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Saved;
