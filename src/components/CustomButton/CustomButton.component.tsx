import clsx from 'clsx';
import React from 'react';

import ButtonsStyle from '../../constants/button-style.constant';
import styles from './CustomButton.module.css';

interface CustomButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'className' | 'type'
  > {
  children: React.ReactNode;
  variant: keyof typeof ButtonsStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(styles[ButtonsStyle[variant]])}
    >
      {children}
    </button>
  );
};

export default CustomButton;
