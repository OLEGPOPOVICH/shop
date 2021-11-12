import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { RootState } from '@store/root-reducer';


import { List } from '../components/common/list/List';
import { Page } from '../components/layout/page/Page';
import { fetchProducts, Card } from '../features/product';
import { ProductType } from '../features/product/ducks';
import { buyProductAction } from '../features/cart';

type ShopPageProps = {
  title: string;
  products: ProductType[];
  fetchProducts: () => void;
};

const ShopPageContainer = ({
  title,
  products,
  fetchProducts
}: ShopPageProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const handleByuProduct = (product: ProductType) => {
    dispatch(buyProductAction(product));
  }

  return (
    <Page title={title}>
      <List
        list={products}
        renderItem={(item) => (<Card key={item.id} {...item} onBuyProduct={handleByuProduct} />)}
      />
    </Page>
  );
};

const mapDispatchToProps = () => {
  return {
    fetchProducts
  }
};

const mapStateToProps = (state: RootState) =>{
  return {
    products: state.products.products
  };
};

export const ShopPage = connect(mapStateToProps, mapDispatchToProps)(ShopPageContainer);
