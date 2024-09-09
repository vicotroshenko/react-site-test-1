import clsx from 'clsx';
import React, { memo } from 'react';

import styles from './NavMenu.module.css';

interface NavMenuProps {
  links: {
    [x: string]: string;
  }[];
  isMobile: boolean;
}

const NavMenu: React.FC<NavMenuProps> = memo(({ links, isMobile }) => {
  return (
    <nav
      className={clsx(styles.nav, {
        [styles.isMobile]: isMobile,
      })}
    >
      <ul>
        {links.map((link) => (
          <li
            key={link.anchor}
            className={styles.item}
          >
            <a href={`#${link.anchor}`}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default NavMenu;
