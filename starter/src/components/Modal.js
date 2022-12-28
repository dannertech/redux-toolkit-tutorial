import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from '../features/modal/modalSlice';
import { cartSlice } from '../features/cart/cartSlice';
const Modal = () => {
    const dispatch = useDispatch();
    
    return(
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={() => 
                     {
                        dispatch(cartSlice.actions.clearCart())
                        dispatch(actions.closeModal())
                     }}>Confirm</button>
                    <button type='button' className='btn clear-btn' onClick={() => dispatch(actions.closeModal())}>Cancel</button>
                </div>
            </div>
        </aside>
    )
};

export default Modal;