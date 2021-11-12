import React from 'react'
import styles from './Page.module.scss';

type PageProps = {
  title: string;
  children?: React.ReactNode;
};

export const Page = ({
  title,
  children
}: PageProps) => {

  return (
    <div className={styles.page}>
      <div className={styles.pageCaption}>
        {title}
      </div>
      <div className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
};