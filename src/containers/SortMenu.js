import React from 'react';
import { connect } from 'react-redux';
import { store } from '../index';
import { filterByPriceRangeAction, PriceRangeFilters } from '../actions/priceRangeActions';
// import Sort from '../components/keyboards/Sort';
import Price from '../components/keyboards/Price';

// <Sort />


const mapStateToProps = state => {
  return {
    priceRange: state.priceRange
  };
}

const mapDispatchToProps = dispatch => {
  return {
    showAllItems: () => {
      dispatch(filterByPriceRangeAction(PriceRangeFilters.ANY_PRICE));
      console.log(store.getState());
    }
  };
}

function SortMenu({ showAllItems }) {
  return (
    <div>
      <button onClick={showAllItems}>Show All</button>
      <Price />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortMenu);
