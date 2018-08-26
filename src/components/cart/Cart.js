import React from 'react';
import './Cart.css';
import '../keyboards/Keyboards.css';
import CartItemsContainer from '../../containers/CartItemsContainer';

function Cart() {
  return (
    <div className="cart">
      <p className="section-title">Cart</p>
      <div className="cart-section">
        <CartItemsContainer />
      </div>
    </div>
  );
}

export default Cart;
