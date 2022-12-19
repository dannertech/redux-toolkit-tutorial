import {createSlice} from '@reduxjs/toolkit';

const initialState = {
cartitems: [],
amount: 0,
total: 0,
isLoading: true
};

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    clearCart: (state, action) => {
        state.cartitems = [];
    },
}
});

console.log(cartSlice)
export const actions = cartSlice.actions;