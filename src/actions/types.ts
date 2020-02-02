import { Product } from '../services/product';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface AddToCardAction {
  type: typeof ADD_TO_CART,
  product: Product,
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART,
  product: Product, // TODO: just use Id, after this is added to the product entity
}

export type CartActionTypes = AddToCardAction | RemoveFromCartAction;

export interface CartState {
  products: Product[],
}