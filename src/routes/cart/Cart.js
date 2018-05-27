import React, { Component } from 'react';
import myCart from './myCart';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCart: myCart
    }
  }

  render() {
    return (
      <p>the cart</p>
    )
  }


}

export default Cart;
