import React from 'react';
import { connect } from 'react-redux';
import { filterByPriceRangeAction, PriceRangeFilters } from '../actions/priceRangeActions';
import '../components/keyboards/Keyboards.css';
import Sort from '../components/keyboards/Sort';
import Price from '../components/keyboards/Price';
import Condition from '../components/keyboards/Condition';

const mapStateToProps = state => ({
  priceRange: state.priceRange
});

const mapDispatchToProps = dispatch => ({
  showAllItems: () => dispatch(filterByPriceRangeAction(PriceRangeFilters.ANY_PRICE))
});

function SortMenu({ showAllItems }) {
  return (
    <div>
      <button onClick={showAllItems}>Show All</button>
      <Sort />
      <Price />
      <Condition />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortMenu);
