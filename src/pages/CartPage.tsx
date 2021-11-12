
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '@store/root-reducer';

import { Page } from '../components/layout/page/Page';
import { List } from '../components/common/list/List';
import { ProductType } from '../features/product/ducks';

import { Card } from '../features/product';

type CartPageProps = {
  title: string;
  cart: ProductType[]
};

const CartPageContainer = ({
  title,
  cart
}: CartPageProps) => {
  return (
    <Page title={title}>
      <List
        list={cart}
        renderItem={(item) => (<Card key={item.id} {...item} />)}
      />
    </Page>
  );
};

const mapStateToProps = (state: RootState) =>{
  return {
    cart: state.cart.cart
  };
};

export const CartPage = connect(mapStateToProps, null)(CartPageContainer);