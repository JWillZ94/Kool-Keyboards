import React from 'react';
import TypeContainer from '../../containers/TypeContainer';
import { TypeFilters } from '../../actions/typeActions';

const Type = () => (
  <div>
    <span>Types: </span>
    <TypeContainer filter={TypeFilters.NO_TYPE}>None</TypeContainer>
    <TypeContainer filter={TypeFilters.WINDOWS}>Windows</TypeContainer>
    <TypeContainer filter={TypeFilters.APPLE}>Apple</TypeContainer>
    <TypeContainer filter={TypeFilters.SPILL_RESISTANT}>Spill-Resistant</TypeContainer>
    <TypeContainer filter={TypeFilters.ULTRA_THIN}>Ultra Thin</TypeContainer>
    <TypeContainer filter={TypeFilters.FULL_SIZE}>Full-Size</TypeContainer>
    <TypeContainer filter={TypeFilters.BACKLIT}>Backlit</TypeContainer>
    <TypeContainer filter={TypeFilters.GAMING}>Gaming</TypeContainer>
    <TypeContainer filter={TypeFilters.MECHANICAL}>Mechanical</TypeContainer>
    <TypeContainer filter={TypeFilters.LARGE_PRINT}>Large Print</TypeContainer>
    <TypeContainer filter={TypeFilters.ANY_TYPE}>Any</TypeContainer>
  </div>
);

export default Type;
