import clsx from 'clsx';
import React, { memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface IModal {
  visible?: boolean;
  children: React.ReactNode;
  toggle: () => void;
}

const Modal: React.FC<IModal> = memo(({ visible, children, toggle }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [visible]);

  const onBackdropClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      toggle();
    }
  };

  return createPortal(
    <div
      className={clsx(styles.backdrop, {
        [styles.isOpen]: visible,
      })}
      onClick={onBackdropClick}
    >
      <div className={styles.modal_container}>{children}</div>
    </div>,
    modalRoot
  );
});

export default Modal;
