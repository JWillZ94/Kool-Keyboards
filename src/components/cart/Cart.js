import React from 'react';
import './Cart.css';
import '../keyboards/Keyboards.css';

function Cart() {
  return (
    <div className="cart">
      <p className="section-title">Cart</p>
      <div className="cart-section">
        <ul className="items-list">

        </ul>
        <div>
          <p>Subtotal ([num] items): $total cost</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
