import React from 'react';
import {ChevronUp, ChevronDown} from '../icons';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '../../src/features/cart/cartSlice';

const CartItem = ({title, price, img, amount, id}) => {
    const dispatch = useDispatch();
    

    return(
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={() => dispatch(actions.deleteItem(id))}>remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(actions.addItem(id))}><ChevronUp/></button>
                <p className="amount">{amount}</p>
                <button className='amount-btn' onClick={() => dispatch(actions.removeItem(id))}><ChevronDown/></button>
            </div>
        </article>
    )
}

export default CartItem;