import React, { Component } from 'react';
import myCart from './myCart';
import './Cart.css';
import '../keyboards/Keyboards.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCart: myCart
    }
  }

  render() {

    const cartItems = this.state.myCart.map(kb =>
      <li key={kb._id} className="items">
        <img src={kb.img} alt="" width="300" />
        <p>{kb.name}</p>
        <p>Price: ${kb.price}</p>
        <p>Rating: {kb.rating}/5</p>
        <p>Quantity: </p>
        <button>Delete</button>
      </li>
    );

    return (
      <div className="cart">
        <p className="section-title">Cart</p>
        <div className="cart-section">
          <ul className="items-list">
            {cartItems}
          </ul>
          <div>
            <p>Subtotal ([num] items): $total cost</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    );
  }


}

export default Cart;
