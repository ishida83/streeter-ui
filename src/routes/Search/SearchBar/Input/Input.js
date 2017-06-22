import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.scss';

const Input = ({ onChange }) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      placeholder="Search Yahoo Auctions Japan..."
      type="text"
      onKeyDown={onChange}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
