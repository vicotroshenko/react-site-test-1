import clsx from 'clsx';
import React, { memo } from 'react';

import styles from './NavMenu.module.css';

interface NavMenuProps {
  links: {
    [x: string]: string;
  }[];
  isMobile: boolean;
  toggle?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = memo(({ links, isMobile, toggle }) => {
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
            onClick={toggle}
          >
            <a
              href={`#${link.anchor}`}
              aria-label="anchor"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default NavMenu;
