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

    return this.state.myCart.map(item => {
      <li key={item.id}>
        {item.name}
      </li>
    });
  }
}

export default Cart;
