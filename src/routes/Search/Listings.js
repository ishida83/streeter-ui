import React from 'react';

import styles from './Listings.scss';

const Listings = listings => (
  <div>
    { listings.listings.map((listing, index) => (
      <a className={styles.listing} href={listing.url}>
        <div className={styles.listing} key={index}>
          <img className={styles.img} src={listing.img} alt={listing.title} />
          <div className={styles.title}>{listing.title}</div>
          <div>ID: {listing.id}</div>
          <div className={styles.price}>
              Current price: {listing.price}{'\u5186'}
          </div>
        </div>
      </a>
      ))
    }
  </div>
  );

export default Listings;
