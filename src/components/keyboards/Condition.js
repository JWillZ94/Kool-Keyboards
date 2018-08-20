import React from 'react';
import ConditionContainer from '../../containers/ConditionContainer';
import { ConditionFilters } from '../../actions/conditionActions';

const Condition = () => (
  <div>
    <span>Conditions: </span>
    <ConditionContainer filter={ConditionFilters.ANY_CONDITION}>Any</ConditionContainer>
    <ConditionContainer filter={ConditionFilters.NEW}>New</ConditionContainer>
    <ConditionContainer filter={ConditionFilters.USED}>Used</ConditionContainer>
    <ConditionContainer filter={ConditionFilters.REFURBISHED}>Refurbished</ConditionContainer>
  </div>
);

export default Condition;
