import { ProductsType, ProductType } from '@features/cart/ducks';
import { combineReducers } from 'redux';
import { cartReducer } from '../features/cart';
import { productsReducer } from '../features/product';

export interface IAppState {
  products: {
    products: ProductType[]
  };
  cart: {
    cart: ProductType[]
  };
};

export const rootReducer = combineReducers<IAppState>({
  products: productsReducer,
  cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;