import React from 'react';
import InterfaceContainer from '../../containers/InterfaceContainer';
import { InterfaceFilters } from '../../actions/interfaceActions';

const Interface = () => (
  <div>
    <span className="sort-section-title">Interfaces</span>
    <InterfaceContainer filter={InterfaceFilters.NO_INTERFACE}>None</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.WIRELESS}>Wireless</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.PS_2}>PS/2</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.USB}>USB</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.BLUETOOTH}>Bluetooth</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.INFRARED}>Infrared</InterfaceContainer>
    <InterfaceContainer filter={InterfaceFilters.ANY_INTERFACE}>Any</InterfaceContainer>
  </div>
);

export default Interface;
