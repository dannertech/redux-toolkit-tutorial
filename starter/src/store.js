import {configureStore} from '@reduxjs/toolkit';
import {cartSlice} from '../src/features/cart/cartSlice.js';
import { modalSlice } from './features/modal/modalSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        modal: modalSlice.reducer,
    }
});