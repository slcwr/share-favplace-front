
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './rootreducer';


export const store = configureStore({
  reducer: rootReducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
