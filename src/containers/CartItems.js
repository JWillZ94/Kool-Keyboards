import React, { Component } from 'react';
import '../components/keyboards/Keyboards.css';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(e) {
    this.props.removeFromCart(e);
  }

  render() {
    return (
      <ul className="items-list">
        {
          this.props.cart.map(kb =>
            <li key={kb.item._id} className="items">
              <div className="image-container">
                <img src={kb.item.img} alt="pic" className="image" />
              </div>
              <p className="kb-name">{kb.item.name}</p>
              <p>${kb.item.price}</p>
              <p>Rating: {kb.item.rating} / 5</p>
              <p>Condition: {kb.item.condition}</p>
              <p>Amount: {kb.itemAmt}</p>
              <p id={kb.item._id} className="btn" onClick={this.removeFromCart}>Remove from Cart</p>
            </li>
          )
        }
      </ul>
    )
  }
}

export default CartItems;
