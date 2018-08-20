import React from 'react';
import './Keyboards.css';

function SortOption({ active, children, handleSort }) {
  return (
    <p onClick={handleSort} className={ active ? "active-choice" : "" }>{ children }</p>
  );
}

export default SortOption;
