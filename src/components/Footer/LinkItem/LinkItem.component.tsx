import React, { ReactNode } from 'react';

import styles from './LinkItem.module.css';

interface LinkItemProps {
  title: string;
  children: ReactNode;
}
const LinkItem: React.FC<LinkItemProps> = ({ title, children }) => {
  return (
    <div className={styles.links_container}>
      <h4>{title}</h4>
      <ul>{children}</ul>
    </div>
  );
};

export default LinkItem;
