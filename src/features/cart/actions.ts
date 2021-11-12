import { ProductType } from './ducks';
export const BUY_PRODUCT = 'BUY_PRODUCT';

type BuyProductTypeAction = {type: typeof BUY_PRODUCT, payload: ProductType};

export type ProductsActionTypes = BuyProductTypeAction;

export const buyProductAction = (payload: ProductType): BuyProductTypeAction => {
  return {
    type: BUY_PRODUCT,
    payload
  }
};