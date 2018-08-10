import React from 'react';
import PriceRangeOptionFilter from '../../containers/PriceRangeOptionFilter';
import { PriceRangeFilters } from '../../actions/priceRangeActions';

function Price() {
  return (
    <div className="sort-section sort-menu-item">
      Price Ranges:
      <PriceRangeOptionFilter filter={PriceRangeFilters.PRICE_UNDER_25}>Under $25</PriceRangeOptionFilter>
      <PriceRangeOptionFilter filter={PriceRangeFilters.PRICE_25_TO_50}>$25 to $50</PriceRangeOptionFilter>
      <PriceRangeOptionFilter filter={PriceRangeFilters.PRICE_50_TO_100}>$50 to $100</PriceRangeOptionFilter>
      <PriceRangeOptionFilter filter={PriceRangeFilters.PRICE_100_TO_200}>$100 to $200</PriceRangeOptionFilter>
      <PriceRangeOptionFilter filter={PriceRangeFilters.PRICE_200_AND_UP}>$200 & Above</PriceRangeOptionFilter>
      <PriceRangeOptionFilter filter={PriceRangeFilters.ANY_PRICE}>Any Price</PriceRangeOptionFilter>
    </div>
  );
}

export default Price;
