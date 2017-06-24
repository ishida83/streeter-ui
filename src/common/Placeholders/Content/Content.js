import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Content.scss';

const Content = ({ children, title, subtitle, link, cta }) => (
  <div className={styles.content}>
    {children}
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.subtitle}>
      {subtitle}
    </div>
    <Link to={link}>
      <div className={styles.link}>
        {cta}
      </div>
    </Link>
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};


export default Content;
