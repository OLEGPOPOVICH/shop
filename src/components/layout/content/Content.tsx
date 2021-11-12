import React from 'react'
import styles from './Content.module.scss';

type ContentProps = {
  children?: React.ReactNode;
};

export const Content = ({children}: ContentProps) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
};