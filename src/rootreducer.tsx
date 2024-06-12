// rootReducer.ts
import { combineReducers } from 'redux';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducer;
