import { Dispatch } from 'react';
import { loadProductAction, ProductsActionTypes } from './actions';

const products = [
  {
    id: 1,
    title: "Название 1",
    imgUrl: "",
    price: 2000,
    currency: "руб",
    desc: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом."
  },
  {
    id: 2,
    title: "Название 2",
    imgUrl: "",
    price: 2000,
    currency: "руб",
    desc: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом."
  },
  {
    id: 3,
    title: "Название 3",
    imgUrl: "",
    price: 2000,
    currency: "руб",
    desc: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом."
  },
  {
    id: 4,
    title: "Название 4",
    imgUrl: "",
    price: 2000,
    currency: "руб",
    desc: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом."
  }
];

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const fetchProducts = () => {
  return (dispatch: Dispatch<ProductsActionTypes>) => {
    dispatch(loadProductAction(products));
  }
};