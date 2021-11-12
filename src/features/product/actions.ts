import { ProductType } from './ducks';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const LOPAD_PRODUCTS = 'LOPAD_PRODUCTS';

type AppProductTypeAction = {type: typeof ADD_PRODUCT, payload: ProductType};
type RemoveProductTypeAction = {type: typeof REMOVE_PRODUCT, payload: number};
type EditProductTypeAction = {type: typeof EDIT_PRODUCT, payload: Partial<ProductType>};
type LoadProductTypeAction = {type: typeof LOPAD_PRODUCTS, payload: ProductType[]};

export type ProductsActionTypes = AppProductTypeAction | EditProductTypeAction | LoadProductTypeAction | RemoveProductTypeAction;

export const addProductAction = (payload: ProductType): AppProductTypeAction => {
  return {
    type: ADD_PRODUCT,
    payload
  }
};

export const removeProductAction = (payload: number): RemoveProductTypeAction => {
  return {
    type: REMOVE_PRODUCT,
    payload
  }
};

export const editProductAction = (payload: Partial<ProductType>): EditProductTypeAction => {
  return {
    type: EDIT_PRODUCT,
    payload
  }
};

export const loadProductAction = (payload: ProductType[]): LoadProductTypeAction => {
  return {
    type: LOPAD_PRODUCTS,
    payload
  }
};