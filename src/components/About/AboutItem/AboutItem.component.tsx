import React from 'react';

import styles from './AboutItem.module.css';

interface AboutItemProps {
  quantity: string;
  name: string;
}

const AboutItem: React.FC<AboutItemProps> = ({ quantity, name }) => {
  return (
    <li className={styles.item}>
      <p className={styles.quantity}>{quantity}</p>
      <p className={styles.item_name}>{name}</p>
    </li>
  );
};

export default AboutItem;
