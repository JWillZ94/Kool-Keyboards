import React from 'react';
import { connect } from 'react-redux';
import '../components/keyboards/Keyboards.css';
// import { filterByAvailabilityAction, AvailabilityFilters } from '../actions/availabilityActions';
// import { filterByBrandAction, BrandFilters } from '../actions/brandActions';
// import { filterByConditionAction, ConditionFilters } from '../actions/conditionActions';
// import { filterByFeatureAction, FeatureFilters } from '../actions/featureActions';
// import { filterByInterfaceAction, InterfaceFilters } from '../actions/interfaceActions';
import { filterByPriceRangeAction, PriceRangeFilters } from '../actions/priceRangeActions';
// import { filterByTypeAction, TypeFilters } from '../actions/typeActions';
import Availability from '../components/keyboards/Availability';
import Brand from '../components/keyboards/Brand';
import Condition from '../components/keyboards/Condition';
import Feature from '../components/keyboards/Feature';
import Interface from '../components/keyboards/Interface';
import Price from '../components/keyboards/Price';
import Sort from '../components/keyboards/Sort';
import Type from '../components/keyboards/Type';

const mapStateToProps = state => ({
  availability: state.itemsReducer.availability,
  brand: state.itemsReducer.brand,
  condition: state.itemsReducer.condition,
  feature: state.itemsReducer.feature,
  interface: state.itemsReducer.interface,
  priceRange: state.itemsReducer.priceRange,
  type: state.itemsReducer.type
});

const mapDispatchToProps = dispatch => ({
  showAllItems: () => dispatch(filterByPriceRangeAction(PriceRangeFilters.ANY_PRICE))
});

function SortMenu({ showAllItems }) {
  return (
    <div className="sort-menu">
      <p className="btn" onClick={showAllItems}>Show All</p>
      <hr className="line" />
      <Sort />
      <hr className="line" />
      <Availability />
      <hr className="line" />
      <Brand />
      <hr className="line" />
      <Condition />
      <hr className="line" />
      <Feature />
      <hr className="line" />
      <Interface />
      <hr className="line" />
      <Price />
      <hr className="line" />
      <Type />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortMenu);
