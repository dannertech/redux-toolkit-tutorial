import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from '../src/components/Modal';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from "./features/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    console.log(cartItems);
    dispatch(actions.calculateTotal())
}, [cartItems]);

  return(
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
