import { combineReducers } from 'redux';
import cartReducer from './cart';

export const rootReducer = combineReducers({
  cartState: cartReducer,
});

export default rootReducer;
