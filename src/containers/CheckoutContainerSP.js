import React, { Component } from 'react';
import { updateKeyboardAmt } from '../actions/updateItemAmtAction';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
        <p id="attention"><strong>Attention: This is not a real website, this is only for practice. Do not enter your actual private information. It does not go anywhere anyway :)</strong></p>
        <p className="section-title">Shipping and Payment</p>
        <div id="ship-pay">
          <form onSubmit={this.submitInfo}>
            <p>Shipping Destination</p>
            <div>
              <input type="text" className="input-box" placeholder="Country..." />
            </div>
            <div>
              <input type="text" className="input-box" placeholder="Street Address..." />
            </div>
            <div>
              <input type="text" className="input-box" placeholder="City..." />
            </div>
            <div>
              <input type="text" className="input-box" placeholder="State..." />
            </div>
            <div>
              <input type="text" className="input-box" placeholder="Zip Code..." />
            </div>
            <p>Shipping Method</p>
            <div id="ship-method">
              <div className="ship-method-item">
                <input type="radio" name="ship" value="economy" />
                <span>Economy</span>
              </div>
              <div className="ship-method-item">
                <input type="radio" name="ship" value="standard" />
                <span>Standard</span>
              </div>
              <div className="ship-method-item">
                <input type="radio" name="ship" value="express" />
                <span>Express</span>
              </div>
            </div>
            <p>Payment</p>
            <div id="card-payment">
              <div className="card-payment-item">
                <span>Type of card: </span>
                <select>
                  <option>Master Card</option>
                  <option>Visa</option>
                  <option>Discover</option>
                  <option>AMEX</option>
                </select>
              </div>
              <div className="card-payment-item">
                <div>
                  <input type="text" className="input-box" placeholder="Cardholder..." />
                </div>
                <div>
                  <input type="text" className="input-box" placeholder="Account Number..." />
                </div>
                <div>
                  <input type="text" className="input-box" placeholder="CVV..." />
                </div>
              </div>
              <div>
                <label>Expiration date: </label>
                <input type="date" />
              </div>
            </div>
            <div id="place-order-btn">
              <NavLink to="/order-complete"><input type="submit" className="btn place-order" value="Place Order" /></NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// Adds items to boughtItems array in backend if using user
// Takes away amount of items in backend

export default connect(
  mapStateToProps
)(CheckoutContainerSP);
