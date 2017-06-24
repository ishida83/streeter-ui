import React from 'react';

import Listing from './../Listing/Listing';
import styles from './ResultsPlaceholder.scss';

const Results = () => (
  <div className={styles.container}>
    <div className={styles.subtitle} />
    <Listing />
    <Listing />
    <Listing />
    <Listing />
  </div>
);

export default Results;
