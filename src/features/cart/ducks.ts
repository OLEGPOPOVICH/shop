import { ProductsActionTypes, BUY_PRODUCT } from "./actions";

export type ProductType = {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  currency: string;
  desc?: string;
};

export type ProductsType = {
  cart: ProductType[]
};

const initialState: ProductsType = {
  cart: []
};

type InitialState = typeof initialState;

export const cartReducer = (state: ProductsType = initialState, action: ProductsActionTypes): InitialState => {
  switch(action.type) {
    case BUY_PRODUCT:
      return {...state, cart: [...state.cart, action.payload]};

    default:
      return state;
  }
};