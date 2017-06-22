import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.scss';

const Input = ({ onChange }) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      placeholder="Search Yahoo Auctions Japan..."
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default Input;
