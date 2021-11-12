import { ProductsActionTypes, ADD_PRODUCT, EDIT_PRODUCT, LOPAD_PRODUCTS, REMOVE_PRODUCT } from "./actions";

export type ProductType = {
  id: number;
  title: string;
  imgUrl: string;
  price: number;
  currency: string;
  desc?: string;
};

export type ProductsType = {
  products: ProductType[]
};

const initialState: ProductsType = {
  products: []
};

type InitialState = typeof initialState;

export const productsReducer = (state: ProductsType = initialState, action: ProductsActionTypes): InitialState => {
  switch(action.type) {
    case LOPAD_PRODUCTS:
      return {...state, products: [...action.payload]};
    case ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload]};
    case REMOVE_PRODUCT:
      return {...state, products: [...state.products.filter((product) => product.id !== action.payload)]}
    case EDIT_PRODUCT:
      return state
    default:
      return state;
  }
};