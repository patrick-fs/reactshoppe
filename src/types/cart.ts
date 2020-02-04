import { Product } from "./product";

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const VIEW_CART = 'VIEW_CART';

export interface AddToCardAction {
  type: typeof ADD_TO_CART,
  product: Product,
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART,
  location: number,
}

export interface ViewCartAction {
  type: typeof VIEW_CART,
  products: Product[],
}

export type CartActionTypes = AddToCardAction | RemoveFromCartAction | ViewCartAction;

export interface CartState {
  products: Product[],
}