import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cartItems from '../../cartItems'
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
cartItems: cartItems,
amount: 4,
total: 0,
isLoading: true
};

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url).then((resp) => resp.json())
    .catch((error) => console.log(error));
})

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    clearCart: (state) => {
        state.cartItems = [];
    },
    removeItem: (state, action) => {
        state.cartItems.map((item) => {
            if(item.id == action.payload){
                if(item.amount > 0){
                    item.amount -= 1;
                } else {
                    item.amount = 0;
                }
            }
        })
    },
    addItem: (state, action) => {
        state.cartItems.map((item) => {
            if(item.id == action.payload){
                item.amount += 1;
            }
        })
    },
    deleteItem: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id != action.payload)
    },
    calculateTotal: (state) => {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.price * item.amount;
        })
        state.amount = amount;
        state.total = total;
    }
},
extraReducers: {
    [getCartItems.pending] : (state,action) => {
        state.isLoading = true;
    },
    [getCartItems.fulfilled] : (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload
    }
}
});


export const actions = cartSlice.actions;