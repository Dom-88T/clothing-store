import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/api';
import cartReducer from './store/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware), 
});