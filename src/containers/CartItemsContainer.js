import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.authReducer.cart
});

class CartItemsContainer extends Component {
  render() {
    return this.props.cart === []
      ? <div>
          <p>Nothing in cart!</p>
        </div>
      : <ul>
          {
            this.props.cart.kbs.map(kb => {
              <li key={kb._id}>
                <img src={kb.img} />
                <p>{kb.name}</p>
              </li>
            })
          }
        </ul>;
  }
}

export default connect(
  mapStateToProps
)(CartItemsContainer);
