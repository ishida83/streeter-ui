import React from 'react';

import styles from './ListingPlaceholder.scss';

const Listing = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.placeholder}>
        <div className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.title} />
        <div className={styles.price} />
        <div className={styles.id} />
      </div>
    </div>
  </div>
);

export default Listing;
