import React, { Component } from 'react';
import cart from '../cart';

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Kool Keyboards</h1>
        <p>Cart: {cart}</p>
      </div>
    );
  }
}

export default Title;
