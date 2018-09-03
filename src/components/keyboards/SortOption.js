import React from 'react';
import './Keyboards.css';

function SortOption({ active, children, handleSort }) {
  return (
    <p onClick={handleSort} className={ active ? "active-choice sort-section-choice" : "sort-section-choice" }>{children}</p>
  );
}

export default SortOption;
