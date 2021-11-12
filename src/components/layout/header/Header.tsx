import { RootState } from '@store/root-reducer';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const cart = useSelector<RootState>(state => state.cart.cart);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          Shop
        </div>
        <div className={styles.headerCart}>
          <span className={styles.headerNumberGoods}>{Array.isArray(cart) && cart.length}</span>
          <Link to="/cart"><i className={styles.iconCart}></i></Link>
        </div>
      </div>
    </header>
  );
};