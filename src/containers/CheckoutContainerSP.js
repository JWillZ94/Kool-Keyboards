import React, { Component } from 'react';
import { updateKeyboardAmt } from '../actions/updateItemAmtAction';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cart: state.authReducer.cart
});

class CheckoutContainerSP extends Component {
  constructor(props) {
    super(props);

    this.submitInfo = this.submitInfo.bind(this);
  }

  submitInfo(e) {
    e.preventDefault();
    this.props.dispatch(updateKeyboardAmt(this.props.cart));
  }

  render() {
    return (
      <div>
        <p>Attention: This is not a real website, this is only for practice. Do not enter your actual private information. It does not go anywhere anyway :)</p>
        <p>Shipping and Payment</p>
        <form onSubmit={this.submitInfo}>
          <div>
            <input type="text" placeholder="Country..." />
          </div>
          <div>
            <input type="text" placeholder="Street Address..." />
          </div>
          <div>
            <input type="text" placeholder="City..." />
          </div>
          <div>
            <input type="text" placeholder="State..." />
          </div>
          <div>
            <input type="text" placeholder="Zip Code..." />
          </div>
          <p>Shipping Method</p>
          <div>
            <input type="radio" name="ship" value="economy" />
            <span>Economy</span>
          </div>
          <div>
            <input type="radio" name="ship" value="standard" />
            <span>Standard</span>
          </div>
          <div>
            <input type="radio" name="ship" value="express" />
            <span>Express</span>
          </div>
          <p>Payment</p>
          <select>
            <option>Master Card</option>
            <option>Visa</option>
            <option>Discover</option>
            <option>AMEX</option>
          </select>
          <div>
            <input type="text" placeholder="Cardholder..." />
          </div>
          <div>
            <input type="text" placeholder="Account Number..." />
          </div>
          <div>
            <input type="text" placeholder="CVV..." />
          </div>
          <div>
            <label>Expiration date: </label>
            <input type="date" />
          </div>
          <div>
            <input type="submit" value="Place Order" />
          </div>
        </form>
      </div>
    );
  }
}

// Adds items to boughtItems array in backend if using user
// Takes away amount of items in backend

export default connect(
  mapStateToProps
)(CheckoutContainerSP);
