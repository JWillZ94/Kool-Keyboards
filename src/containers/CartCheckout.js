import React, { Component } from 'react';

class CartCheckout extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {
          this.props.checkoutBox.map(kb =>
            <li key={kb.item._id} className="items checkout-item">
              <span className="kb-name">{kb.item.name} ${kb.item.price} x {kb.itemAmt} = ${Math.imul(kb.item.price, kb.itemAmt)}</span>
            </li>
          )
        }
      </ul>
    );
  }
}

export default CartCheckout;
