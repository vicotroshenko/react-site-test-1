import clsx from 'clsx';
import React from 'react';

import styles from './CustomButton.module.css';

enum ButtonsStyle {
  PRIMARY = 'primary',
  MOBILE = 'mobile',
  SLIDER_LEFT = 'slider_left',
  SLIDER_RIGHT = 'slider_right',
}

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
