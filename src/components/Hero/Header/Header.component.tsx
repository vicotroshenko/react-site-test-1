import React, { memo } from 'react';

import { ReactComponent as BurgerMenuIcon } from '../../../assets/images/svg/burger.svg';
import CustomButton from '../../CustomButton/CustomButton.component';
import styles from './Header.module.css';

interface HeaderProps {
  nav: { [x: string]: string }[];
  logo: string;
  buttonName: string;
}

const Header: React.FC<HeaderProps> = memo(({ nav, logo, buttonName }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {nav.map((link) => (
            <li
              key={link.anchor}
              className={styles.item}
            >
              <a href={`#${link.anchor}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <CustomButton
        variant="MOBILE"
        aria-label="open mobile menu navigation"
      >
        <BurgerMenuIcon />
      </CustomButton>
      <a
        href="/"
        className={styles.logo_link}
      >
        {logo}
      </a>
      <div className={styles.primary_btn}>
        <CustomButton variant="PRIMARY">{buttonName}</CustomButton>
      </div>
    </header>
  );
});

export default Header;
