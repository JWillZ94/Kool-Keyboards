import React from 'react';
import './Keyboards.css';

const AvailabilityOption = ({ active, children, handleFilterByAvailability }) => (
  <p onClick={handleFilterByAvailability} className={ active ? "active-choice" : "" }>{children}</p>
);

export default AvailabilityOption;
