import React, { FC } from 'react';
import styles from './Button.module.scss';

type ButtonType = 'button' |'submit' | 'reset';

type ButtonProps = {
  type: ButtonType;
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[styles.button, styles.buttonPrimary].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};