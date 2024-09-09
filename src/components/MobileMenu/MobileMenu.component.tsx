import React, { memo } from 'react';

import { ReactComponent as CrossIcon } from '../../assets/images/svg/cross.svg';
import CustomButton from '../CustomButton/CustomButton.component';
import Modal from '../Modal/Modal.component';
import NavMenu from '../NavMenu/NavMenu.component';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  visible: boolean;
  toggle: () => void;
  links: {
    [x: string]: string;
  }[];
  logo: string;
}
const MobileMenu: React.FC<MobileMenuProps> = memo(
  ({ visible, toggle, links, logo }) => {
    return (
      <Modal
        visible={visible}
        toggle={toggle}
      >
        <div className={styles.mobile_menu_container}>
          <div className={styles.button_logo_wrapper}>
            <CustomButton variant="mobile">
              <CrossIcon />
            </CustomButton>
            <a
              href="/"
              className={styles.logo}
            >
              {logo}
            </a>
          </div>
          <NavMenu
            links={links}
            isMobile={true}
          />
        </div>
      </Modal>
    );
  }
);

interface MobileMenuProps {}
export default MobileMenu;
