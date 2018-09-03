import React from 'react';

const PriceRangeOption = ({ active, children, handleFilterPriceRange }) => (
  <p onClick={handleFilterPriceRange} className={ active ? "active-choice sort-section-choice" : "sort-section-choice" }>
    {children}
  </p>
);

export default PriceRangeOption;
