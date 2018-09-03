import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../../actions/cartActions';
import PlusButtonContainer from '../../containers/PlusButtonContainer';
// <AddToCart kb={kb._id}  />

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    }

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleDecrement() {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  }

  handleIncrement() {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  addToCart(e) {
    if (this.state.quantity > 0) {
      if (e.target.id === this.props.kb._id) {
        this.props.dispatch(
          addToCartAction(this.props.kb, this.state.quantity)
        );
      }
    }
  }

  render() {
    return (
      <div>
        <span>Quantity: </span>
        <span className="quantity-symbols">
          <button className="sym decrement" onClick={this.handleDecrement}>-</button>
        </span>
        <input
          className="quantity-input"
          type="text"
          pattern="[0-9]*"
          value={this.state.quantity}
          placeholder="0"
        />
        <PlusButtonContainer
          isOverAmt={false}
          amt={this.props.amt}
          handleIncrement={this.handleIncrement}
          quantity={this.state.quantity}
        />
        <p id={this.props.kb._id} className="btn" onClick={this.addToCart}>Add to Cart</p>
      </div>
    );
  }
}

export default connect()(Quantity);
