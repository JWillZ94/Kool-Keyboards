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
  availability: state.availability,
  brand: state.brand,
  condition: state.condition,
  feature: state.feature,
  interface: state.interface,
  priceRange: state.priceRange,
  type: state.type
});

const mapDispatchToProps = dispatch => ({
  showAllItems: () => dispatch(filterByPriceRangeAction(PriceRangeFilters.ANY_PRICE))
});

function SortMenu({ showAllItems }) {
  return (
    <div className="sort-menu">
      <button onClick={showAllItems}>Show All</button>
      <Sort />
      <Availability />
      <Brand />
      <Condition />
      <Feature />
      <Interface />
      <Price />
      <Type />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortMenu);
