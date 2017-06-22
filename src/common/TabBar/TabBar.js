import React from 'react';

import Tab from './Tab/Tab';
import tabs from './constants';
import styles from './TabBar.scss';

const TabBar = () => (
  <div className={styles.container}>
    { tabs.map((tab, index) => (
      <Tab key={index} name={tab.name} active={tab.active} />
    ))}
  </div>
);

export default TabBar;
