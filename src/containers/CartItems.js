import React, { Component } from 'react';

class CartItems extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {
          this.props.cart.map(kb =>
            <li key={kb.item._id} className="items">
              <img src={kb.item.img} alt="pic" className="image" />
              <p className="kb-name">{kb.item.name}</p>
              <p>{kb.item.price}</p>
              <p>{kb.item.condition}</p>
              <p>Amount: {kb.itemAmt}</p>
              <p id={kb.item._id} onClick={this.removeFromCart}>Remove from Cart</p>
            </li>
          )
        }
      </ul>
    )
  }
}

export default CartItems;
