import React, { Component } from 'react';

class Price extends Component {
  constructor(props) {
    super(props);

    this.filterPrice = this.filterPrice.bind(this);
  }

  filterPrice(e, low, high) {
    this.props.priceRange(e.target.value, e.target.low, e.target.high);
  }

  render() {
    return (
      <div>
        <div>Price:
          <p onClick={this.filterPrice} value="0" low="0" high="25">Under $25</p>
          <p onClick={this.filterPrice} value="25">$25 to $50</p>
          <p onClick={this.filterPrice} value="50">$50 to $100</p>
          <p onClick={this.filterPrice}>$100 to $200</p>
          <p onClick={this.filterPrice}>$200 & Above</p>
        </div>
      </div>
    )
  }
}

export default Price;
