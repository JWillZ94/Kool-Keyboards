import React, { Component } from 'react';
import Cart from '../../cart/Cart';

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showArrows: null,
      quantity: 0
    }

    this.hideArrows = this.hideArrows.bind(this);

    this.handleShowModal = this.handleShowModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  showArrows(props, kb) {
    this.setState({
      showArrows: kb
    });
  }

  hideArrows() {
    this.setState({
      showArrows: null
    });
  }

  handleShowModal(id) {
    this.props.handleShowModal(id);
  }

  addToCart(kb) {
    this.props.addToCart(kb);
  }

  handleChangeQuantity() {

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
    const items = this.props.data.map(kb =>
      <li key={kb._id} className="items">
        <div
          className="image"
          onMouseEnter={this.showArrows.bind(this, null, kb)}
          onMouseLeave={this.hideArrows}
          onClick={() => this.handleShowModal(kb._id)}
        >
          <i className={this.state.showArrows === kb ? 'fa fa-angle-left' : null}></i>
          <img src={kb.img} alt="" width="300" />
          <i className={this.state.showArrows === kb ? 'fa fa-angle-right' : null}></i>
        </div>
        <p className="kb-name" onClick={() => this.handleShowModal(kb._id)}>{kb.name}</p>
        <p>Price: ${kb.price}</p>
        <p>Rating: {kb.rating}/5</p>
        <p>Quantity:
          <input
            className="quantity-input"
            type="text"
            pattern="[0-9]*"
            value={this.state.quantity}
            onChange={this.handleChangeQuantity}
            placeholder="0"
          />
          <span className="quantity-symbols">
            <span onClick={this.handleIncrement}>+</span>
            <span onClick={this.handleDecrement}>-</span>
          </span>
        </p>
        <button onClick={() => this.addToCart(kb)}>Add to Cart</button>
      </li>
    );

    return (
      <div>
        <ul className="items-list">
          {items}
        </ul>
      </div>
    );
  }
}

export default Items;
