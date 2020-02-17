import { Product } from "../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, VIEW_CART, CartActionTypes } from '../types/cart';
import { History } from 'history';

// TODO: manage side-effects, update cart in local storage with the cart service

export const addToCart = (product: Product) : CartActionTypes => {
  return {
    type: ADD_TO_CART,
    product,
  }
};

export const removeFromCart = (location: number) : CartActionTypes => {
  return {
    type: REMOVE_FROM_CART,
    location,
  }
}

export const viewCart = (history: History) : CartActionTypes => {
  history.push('/cart');
  return {
    type: VIEW_CART,
  }
}