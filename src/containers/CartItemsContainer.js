import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/cartActions';

const mapStateToProps = state => ({
  cart: state.authReducer.cart,
  amt: state.authReducer.amt
});

class CartItemsContainer extends Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(e) {
    for (let i = 0; i < this.props.cart.length; i++) {
      if (e.target.id === this.props.cart[i]._id) this.props.dispatch(removeFromCartAction(this.props.cart[i]));
    }
  }

  render() {
    return this.props.cart.length === 0
      ? <div>
          <p>Nothing in cart!</p>
        </div>
      : <ul className="items-list">
          {
            this.props.cart.map(kb =>
              <li key={kb._id} className="items">
                <img src={kb.img} alt="pic" className="image" />
                <p className="kb-name">{kb.name}</p>
                <p>{kb.price}</p>
                <p>{kb.condition}</p>
                <p>{this.props.amt}</p>
                <p id={kb._id} onClick={this.removeFromCart}>Remove from Cart</p>
              </li>
            )
          }
        </ul>;
  }
}

export default connect(
  mapStateToProps
)(CartItemsContainer);
