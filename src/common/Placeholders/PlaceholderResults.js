import React from 'react';

import PlaceholderListing from './PlaceholderListing';
import styles from './PlaceholderResults.scss';

const PlaceholderResults = () => (
  <div className={styles.container}>
    <div className={styles.subtitle} />
    <PlaceholderListing />
    <PlaceholderListing />
    <PlaceholderListing />
    <PlaceholderListing />
  </div>
);

export default PlaceholderResults;
