import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../index';
import { filterByPriceRangeAction, PriceRangeFilters } from '../actions/priceRangeActions';

const mapStateToProps = state => {
  return {
    priceRange: state.priceRange
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleFilterPriceRange: () => {
      dispatch(filterByPriceRangeAction(PriceRangeFilters.PRICE_200_AND_UP));
      console.log(store.getState());
    }
  };
}

  // className={this.state.active === range ? 'active-button range' : 'range'}
  // key={range}

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'inactive'
    };

  }

  render() {

    const priceRanges = ['Under $25', '$25 to $50', '$50 to $100', '$100 to $200', '$200 & Above', 'Any Price'];

    const priceRangeOption = priceRanges.map((range, { handleFilterPriceRange }) =>
      <li onClick={handleFilterPriceRange} key={range}>{range}</li>
    );
    return (
      <div className="sort-section sort-menu-item">
        Price Ranges:
        <ul>
          {priceRangeOption}
        </ul>
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Price);
