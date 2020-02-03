import { Product } from '../services/product';
import { ADD_TO_CART, REMOVE_FROM_CART, CartActionTypes } from './types';

// TODO: manage side-effects, update cart in local storage with the cart service

export const addToCart = (product: Product) : CartActionTypes => {
  return {
    type: ADD_TO_CART,
    product,
  }
};

export const removeFromCart = (product: Product) : CartActionTypes => {
  return {
    type: REMOVE_FROM_CART,
    product,
  }
}

