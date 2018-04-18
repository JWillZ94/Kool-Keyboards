import React, { Component } from 'react';
import data from '../keyboardInventory';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    }
  }

  render() {
    return (
      <div>
        <div>Price:
          <p>Under $25</p>
          <p>$25 to $50</p>
          <p>$50 to $100</p>
          <p>$100 to $200</p>
          <p>$200 & Above</p>
        </div>
      </div>
    )
  }
}

export default Price;
