import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Cart from '../components/cart/Cart';
// import Quantity from './Quantity';

class Items extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   showArrows: null,
    //   quantity: 0
    // }
    //
    // this.hideArrows = this.hideArrows.bind(this);
    //
    // this.handleShowModal = this.handleShowModal.bind(this);
    // this.addToCart = this.addToCart.bind(this);

  }

  // showArrows(props, kb) {
  //   this.setState({
  //     showArrows: kb
  //   });
  // }
  //
  // hideArrows() {
  //   this.setState({
  //     showArrows: null
  //   });
  // }
  //
  // handleShowModal(id) {
  //   this.props.handleShowModal(id);
  // }
  //
  // addToCart(kb) {
  //   this.props.addToCart(kb);
  // }
  //
  // handleDecrement(e, id) {
  //   if (this.state.quantity > 0) {
  //     this.setState({
  //       quantity: this.state.quantity - 1
  //     });
  //   }
  //   console.log(id);
  // }
  //
  // handleIncrement(id) {
  //   this.setState({
  //     quantity: this.state.quantity + 1
  //   });
  // }

  render() {
    const items = this.props.store.map(kb =>
      <li key={kb._id} className="items">
        // <div
        //   className="image"
        //   onMouseEnter={this.showArrows.bind(this, null, kb)}
        //   onMouseLeave={this.hideArrows}
        //   onClick={() => this.handleShowModal(kb._id)}
        // >
        //   <i className={this.state.showArrows === kb ? 'fa fa-angle-left' : null}></i>
        //   <img src={kb.img} alt="" width="300" />
        //   <i className={this.state.showArrows === kb ? 'fa fa-angle-right' : null}></i>
        // </div>
        // <p className="kb-name" onClick={() => this.handleShowModal(kb._id)}>{kb.name}</p>
        // <p>Price: ${kb.price}</p>
        // <p>Rating: {kb.rating}/5</p>
        // <p>Quantity:
        //   <input
        //     className="quantity-input"
        //     type="text"
        //     pattern="[0-9]*"
        //     value={this.state.quantity}
        //     placeholder="0"
        //   />
        //   <span className="quantity-symbols">
        //     <button className="sym decrement" onClick={this.handleDecrement.bind(this, kb)}>-</button>
        //     <button className="sym increment" onClick={this.handleIncrement.bind(this, kb)}>+</button>
        //   </span>
        // </p>
        // <button onClick={() => this.addToCart(kb)}>Add to Cart</button>
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
