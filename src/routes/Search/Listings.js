import React from 'react';
import PropTypes from 'prop-types';

import styles from './Listings.scss';

const Listings = ({ listings }) => (
  <div className={styles.listings}>
    { listings.map((listing, index) => (
      <a href={listing.url} key={index}>
        <div className={styles.listing}>
          <div className={styles.placeholder}>
            <img className={styles.img} src={listing.img} alt={listing.title} />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{listing.title}</div>
            <div className={styles.price}>{listing.price}{'\u5186'}</div>
            <div className={styles.id}>ID: {listing.id}</div>
          </div>
        </div>
      </a>
    ))}
  </div>
);

Listings.propTypes = {
  listings: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Listings;
