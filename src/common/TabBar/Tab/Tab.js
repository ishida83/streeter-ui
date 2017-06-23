import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tab.scss';

const isActive = (style, active) => (active ? `${style} ${styles.active}` : style);

const Tab = ({ name, active, children }) => (
  <div className={styles.container}>
    <div className={isActive(styles.icon, active)}>
      {children}
    </div>
    <div className={isActive(styles.text, active)}>{name}</div>
  </div>
);

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Tab;
