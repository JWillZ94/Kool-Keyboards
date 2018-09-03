import React from 'react';
import './Keyboards.css';

const InterfaceOption = ({ active, children, handleFilterByInterface }) => (
  <p onClick={handleFilterByInterface} className={ active ? "active-choice sort-section-choice" : "sort-section-choice" }>{children}</p>
);

export default InterfaceOption;
