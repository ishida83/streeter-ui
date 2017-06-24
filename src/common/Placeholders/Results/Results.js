import React from 'react';

import Listing from './../Listing/Listing';
import styles from './Results.scss';

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
