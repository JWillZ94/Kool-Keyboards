import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckoutContainerSP extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <p>Attention: This is not a real website, this is only for practice. Do not enter your actual private information. It does not go anywhere anyway :)</p>
        <p>Shipping and Payment</p>
        <form>
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
            <input type="radio" name="ship" value="economy" placeholder="Economy..." />
          </div>
          <div>
            <input type="radio" name="ship" value="standard" placeholder="Standard..." />
          </div>
          <div>
            <input type="radio" name="ship" value="express" placeholder="Express..." />
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

export default CheckoutContainerSP;
