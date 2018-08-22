import React from 'react';
import './Keyboards.css';

const FeatureOption = ({ active, children, handleFilterByFeature }) => (
  <p onClick={handleFilterByFeature} className={ active ? "active-choice" : "" }>{children}</p>
);

export default FeatureOption;
