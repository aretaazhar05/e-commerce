import React from 'react';

import Icon from '../Icons/Icon';
import * as styles from './Attribute.module.css';

const Attribute = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.root}>
      <div className={styles.iconContainer}>
        {typeof icon === 'string' ? (
          <Icon symbol={icon} />
        ) : (
          icon
        )}
      </div>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
};

export default Attribute;
