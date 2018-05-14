import React, { Component } from 'react';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Any Price'
    }
  }

  filterPriceRange(props, range) {
    this.setState({
      active: range
    });
    this.props.filterPriceRange(range);
  }

  render() {
    const priceRanges = ['Under $25', '$25 to $50', '$50 to $100', '$100 to $200', '$200 & Above', 'Any Price'];

    const priceRangeOption = priceRanges.map(range =>
      <li
        className={this.state.active === range ? 'active-button range' : 'range'}
        key={range} onClick={this.filterPriceRange.bind(this, 'Any Price', range)}
      >{range}</li>
    );

    return (
      <div className="sort-section">
        Price Ranges:
        <ul>
          {priceRangeOption}
        </ul>
        {this.props.priceRange}
      </div>
    );
  }
}

export default Price;
