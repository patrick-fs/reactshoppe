import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  VIEW_CART,
  CHECKOUT_CART,
  CartActionTypes,
  CartState,
} from '../types/cart';
import { Product } from '../types/product';

const initialState : CartState = {
  products: [],
}

const sortByTitle = (prod1: Product, prod2: Product) => {
  if (prod1.title > prod2.title) return 1;
  if (prod1.title < prod2.title) return -1;
  return 0;
}

const cartReducer = (state = initialState, action: CartActionTypes) : CartState => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        products: [...state.products, action.product],
      };
    case REMOVE_FROM_CART:
      return {
        products: state.products.filter((_, index) => index !== action.location),
      }
    case VIEW_CART:
      return {
        products: state.products.sort(sortByTitle),
      }
    case CHECKOUT_CART:
      return {
        products: [],
      }
    default:
      return state;
  }
};

export default cartReducer;