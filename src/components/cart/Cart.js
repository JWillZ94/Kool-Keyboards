import React from 'react';
import './Cart.css';
import '../keyboards/Keyboards.css';
import CartContainer from '../../containers/CartContainer';

const Cart = () => (
  <div className="cart">
    <p className="section-title">Cart</p>
    <div className="cart-section">
      <CartContainer />
    </div>
  </div>
);

export default Cart;
