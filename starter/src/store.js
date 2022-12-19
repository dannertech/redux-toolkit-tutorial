import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from '../src/features/cart/cartSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});