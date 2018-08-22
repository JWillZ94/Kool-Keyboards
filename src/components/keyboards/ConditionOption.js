import React from 'react';
import './Keyboards.css';

const ConditionOption = ({ active, children, handleFilterByCondition }) => (
  <p onClick={handleFilterByCondition} className={ active ? "active-choice" : "" }>{children}</p>
);

export default ConditionOption;
