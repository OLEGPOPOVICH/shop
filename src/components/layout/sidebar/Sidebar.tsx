import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { Button } from '../../common/button/Button';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Button
        type="button"
        onClick={() => console.log("Добавить товар")}
      >Добавить товар</Button>
      <div className={styles.sidebarNav}>
        <NavLink
          to="/shop"
        >Товары</NavLink>
      </div>
    </div>
  );
};