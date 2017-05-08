import React from 'react';

import Search from './routes/Search/Search';
import styles from './index.scss';

const Root = () => (
  <div>
    <h1 className={styles.red}>Hello World</h1>
    <Search />
  </div>
);

export default Root;
