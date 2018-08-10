import React from 'react';
// Component

const PriceRangeOption = ({ active, children, handleFilterPriceRange }) => (
  <button onClick={handleFilterPriceRange} disabled={active}>
    {children}
  </button>
);

export default PriceRangeOption;
