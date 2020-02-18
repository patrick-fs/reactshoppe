import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import analytics from './analyticsMiddleware';

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(analytics),
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
