import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    }

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
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

  render() {
    return (
      <div>
        <p>Quantity:
          <input
            className="quantity-input"
            type="text"
            pattern="[0-9]*"
            value={this.state.quantity}
            placeholder="0"
          />
          <span className="quantity-symbols">
            <button className="sym decrement" onClick={this.handleDecrement}>-</button>
            <button className="sym increment" onClick={this.handleIncrement}>+</button>
          </span>
        </p>
      </div>
    );
  }
}

export default Quantity;
