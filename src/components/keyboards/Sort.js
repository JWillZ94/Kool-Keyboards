import React from 'react';
import { ItemSorts } from '../../actions/sortActions';
import SortContainer from '../../containers/SortContainer';

function Sort() {
  return (
    <div>
      <span>Sort By:</span>
      <div>
        <SortContainer sort={ItemSorts.SORT_POPULARITY}>Popularity</SortContainer>
        <SortContainer sort={ItemSorts.SORT_PRICE_LOW_TO_HIGH}>Price: Low to High</SortContainer>
        <SortContainer sort={ItemSorts.SORT_PRICE_HIGH_TO_LOW}>Price: High to Low</SortContainer>
        <SortContainer sort={ItemSorts.SORT_RATING}>Rating: High to Low</SortContainer>
      </div>
    </div>
  );
}

export default Sort;
