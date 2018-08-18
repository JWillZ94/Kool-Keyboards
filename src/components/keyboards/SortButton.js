import React from 'react';
import './Keyboards.css';

function SortButton({ active, children, handleSort }) {
  return (
    <p onClick={handleSort} className={ active ? "active-choice" : "" }>{ children }</p>
  );
}

export default SortButton;
