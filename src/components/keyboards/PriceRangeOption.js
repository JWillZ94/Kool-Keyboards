import React from 'react';

const PriceRangeOption = ({ active, children, handleFilterPriceRange }) => (
  <button onClick={handleFilterPriceRange} disabled={active}>
    {children}
  </button>
);

export default PriceRangeOption;
