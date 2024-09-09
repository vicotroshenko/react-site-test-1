import React, { memo, useState } from 'react';

import { ReactComponent as BurgerMenuIcon } from '../../../assets/images/svg/burger.svg';
import { ButtonsStyle } from '../../../constants';
import CustomButton from '../../CustomButton/CustomButton.component';
import NavMenu from '../../NavMenu/NavMenu.component';
import styles from './Header.module.css';
import MobileMenu from '../../MobileMenu/MobileMenu.component';

interface HeaderProps {
  nav: { [x: string]: string }[];
  logo: string;
  buttonName: string;
}

const Header: React.FC<HeaderProps> = memo(({ nav, logo, buttonName }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleModal = () => setVisible((prev) => !prev);
  return (
    <header className={styles.header}>
      <MobileMenu visible={visible} toggle={toggleModal} links={nav} logo={logo}/>
      <NavMenu
        links={nav}
        isMobile={false}
      />
      <CustomButton
        variant={ButtonsStyle.mobile}
        aria-label="open mobile menu navigation"
        onClick={toggleModal}
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
        <CustomButton variant={ButtonsStyle.primary}>{buttonName}</CustomButton>
      </div>
    </header>
  );
});

export default Header;
