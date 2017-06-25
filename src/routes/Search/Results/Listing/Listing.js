import React from 'react';
import PropTypes from 'prop-types';

import styles from './Listing.scss';

const Listing = ({ listing }) => (
  <a href={listing.url}>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={listing.img} alt={listing.title} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.price}>{listing.price}{'\u5186'}</div>
        <div className={styles.id}>ID: {listing.id}</div>
      </div>
    </div>
  </a>
);

Listing.propTypes = {
  listing: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default Listing;
