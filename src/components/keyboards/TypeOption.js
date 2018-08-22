import React from 'react';
import './Keyboards.css';

const TypeOption = ({ active, children, handleFilterByType }) => (
  <p onClick={handleFilterByType} className={ active ? "active-choice" : "" }>{children}</p>
);

export default TypeOption;
