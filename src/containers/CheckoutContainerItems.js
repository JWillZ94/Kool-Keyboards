import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.authReducer.cart
});

class CheckoutContainerItems extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {
          this.props.cart.map(kb =>
            <li key={kb.item._id}>
              <p>{kb.item.name} - ${kb.item.price} x {kb.itemAmt}</p>
            </li>
          )
        }
      </ul>
    );
  }
}

export default connect(
  mapStateToProps
)(CheckoutContainerItems);
