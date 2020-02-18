import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
import { RootState } from '../store'
import { CartActionTypes,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../types/cart';
import { trackCartSize } from '../services/analytics';
import * as Sentry from '@sentry/browser';

const analyticsMiddleware: Middleware<
  {}, 
  RootState, 
  Dispatch
> = (api: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (action: CartActionTypes) => {

  const result = next(action);
  const { products } = api.getState().cartState;
  try {
    if (action.type === ADD_TO_CART || action.type === REMOVE_FROM_CART) {
      trackCartSize(products);
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
  }
  
  return result;
};

export default analyticsMiddleware;