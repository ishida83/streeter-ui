import React from 'react';
import PropTypes from 'prop-types';

import styles from './Listings.scss';

const Listings = ({ listings }) => (
  <div>
    { listings.map((listing, index) => (
      <a className={styles.listing} href={listing.url} key={index}>
        <div className={styles.listing}>
          <img className={styles.img} src={listing.img} alt={listing.title} />
          <div className={styles.title}>{listing.title}</div>
          <div>ID: {listing.id}</div>
          <div className={styles.price}>
            Current price: {listing.price}{'\u5186'}
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
