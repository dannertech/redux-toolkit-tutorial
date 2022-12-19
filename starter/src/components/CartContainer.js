import React from 'react';
import CartItem from '../components/CartItem.js';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from '../features/cart/cartSlice.js';

const CartContainer = () => {
    const {amount, cartItems, total} = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    if(amount < 1){
        return(
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">Is Empty</h4>

                </header>
            </section>
        )
    }
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
                <div>
                    {cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} {...item}/>

                        )
                    })}
                </div>
            </header>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total<span>{total}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(actions.clearCart())}>Clear Cart</button>
            </footer>
        </section>
    )
};

export default CartContainer;