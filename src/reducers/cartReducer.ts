import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CartActionTypes,
  CartState,
} from '../actions/types';

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
        products: state.products.filter(p => p.title === action.product.title),
      }
    default:
      return state;
  }
};

export default cartReducer;