import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  VIEW_CART,
  CartActionTypes,
  CartState,
} from '../types/cart';

const initialState : CartState = {
  products: [],
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
        products: state.products,
      }
    default:
      return state;
  }
};

export default cartReducer;