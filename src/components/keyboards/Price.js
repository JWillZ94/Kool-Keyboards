import React from 'react';
import PriceRangeContainer from '../../containers/PriceRangeContainer';
import { PriceRangeFilters } from '../../actions/priceRangeActions';

function Price() {
  return (
    <div>
      <span className="sort-section-title">Price Ranges</span>
      <PriceRangeContainer filter={PriceRangeFilters.PRICE_UNDER_25}>Under $25</PriceRangeContainer>
      <PriceRangeContainer filter={PriceRangeFilters.PRICE_25_TO_50}>$25 to $50</PriceRangeContainer>
      <PriceRangeContainer filter={PriceRangeFilters.PRICE_50_TO_100}>$50 to $100</PriceRangeContainer>
      <PriceRangeContainer filter={PriceRangeFilters.PRICE_100_TO_200}>$100 to $200</PriceRangeContainer>
      <PriceRangeContainer filter={PriceRangeFilters.PRICE_200_AND_UP}>$200 & Above</PriceRangeContainer>
      <PriceRangeContainer filter={PriceRangeFilters.ANY_PRICE}>Any Price</PriceRangeContainer>
    </div>
  );
}

export default Price;
