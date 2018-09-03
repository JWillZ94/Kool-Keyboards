import React from 'react';
import './Keyboards.css';

const BrandOption = ({ active, children, handleFilterByBrand }) => (
  <p onClick={handleFilterByBrand} className={ active ? "active-choice sort-section-choice" : "sort-section-choice" }>{children}</p>
);

export default BrandOption;
