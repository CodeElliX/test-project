import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './slices/shopSlice';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import menuReducer from './slices/menuSlice';

export const store = configureStore({
  reducer: {
    shops: shopReducer,
    products: productReducer,
    cart: cartReducer,
    menu: menuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch