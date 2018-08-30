import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCartAction } from '../actions/cartActions';
import CartItems from './CartItems';
import CartCheckout from './CartCheckout';
import { Redirect, NavLink } from 'react-router-dom';

const mapStateToProps = state => ({
  cart: state.authReducer.cart,
  amt: state.authReducer.amt
});

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.filterCart = this.filterCart.bind(this);
    this.totalCost = this.totalCost.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.checkout = this.checkout.bind(this);
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
      if (e.target.id === this.props.cart[i]._id) this.props.dispatch(removeFromCartAction(this.props.cart[i]));
    }
  }

  checkout(total) {
    return <li className="nav-item">
      <NavLink to="/checkout" className="nav-link"></NavLink>
      <Redirect to="/checkout" />
    </li>;
  }

  render() {
    return this.props.cart.length === 0
      ? <div>
          <p>Nothing in cart!</p>
        </div>
      : <div>
          <CartItems cart={this.filterCart(this.props.cart)} />
          <div>
            <CartCheckout checkoutBox={this.filterCart(this.props.cart)}/>
            <p>Total: {this.totalCost(this.filterCart(this.props.cart))}</p>
            <button onClick={this.checkout(this.totalCost(this.filterCart(this.props.cart)))}>Checkout</button>
          </div>
        </div>;
  }
}

export default connect(
  mapStateToProps
)(CartContainer);
