import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems';
import { removeFromCartAction } from '../actions/cartActions';
import CartCheckout from './CartCheckout';
import { withRouter, Redirect, NavLink } from 'react-router-dom';

const mapStateToProps = state => ({
  cart: state.authReducer.cart,
  amt: state.authReducer.amt,
  total: state.authReducer.total
});

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.filterCart = this.filterCart.bind(this);
    this.totalCost = this.totalCost.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  filterCart(modCart) {
    for (let i = 0; i < modCart.length; i++) {
      for (let j = i + 1; j < modCart.length; j++) {
        if (modCart[i].item._id === modCart[j].item._id) {
          modCart[i].itemAmt += modCart[j].itemAmt;
          modCart.splice(modCart.indexOf(modCart[j]), 1);
        }
      }
    }
    return modCart;
  }

  totalCost(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += Math.imul(cart[i].item.price, cart[i].itemAmt);
    }

    return total;
  }

  removeFromCart(e) {
    for (let i = 0; i < this.props.cart.length; i++) {
      if (e.target.id === this.props.cart[i].item._id) this.props.dispatch(removeFromCartAction(this.props.cart[i]));
    }
  }

  render() {
    return this.props.cart.length === 0
      ? <div>
          <p>Nothing in cart!</p>
        </div>
      : <div>
          <CartItems removeFromCart={this.removeFromCart} cart={this.filterCart(this.props.cart)} />
          <div>
            <CartCheckout checkoutBox={this.filterCart(this.props.cart)}/>
            <p>Total: {this.totalCost(this.filterCart(this.props.cart))}</p>
            <button><NavLink to="/checkout">Checkout</NavLink></button>
          </div>
        </div>;
  }
}

export default connect(
  mapStateToProps
)(CartContainer);
