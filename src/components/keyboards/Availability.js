import React from 'react';
import AvailabilityContainer from '../../containers/AvailabilityContainer';
import { AvailabilityFilters } from '../../actions/availabilityActions';

const Availability = () => (
  <div>
    <span className="sort-section-title">Availability</span>
    <AvailabilityContainer filter={AvailabilityFilters.IN_STOCK}>In Stock</AvailabilityContainer>
    <AvailabilityContainer filter={AvailabilityFilters.ANY_AVAILABILITY}>Any</AvailabilityContainer>
  </div>
);

export default Availability;
