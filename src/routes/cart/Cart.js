import React, { Component } from 'react';
import myCart from './myCart';
import './Cart.css'

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCart: myCart
    }
  }

  render() {
    return (
      <div className="cart">
        <p>the cart</p>
      </div>
    );
  }


}

export default Cart;
