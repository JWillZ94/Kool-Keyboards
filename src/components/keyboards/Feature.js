import React from 'react';
import FeatureContainer from '../../containers/FeatureContainer';
import { FeatureFilters } from '../../actions/featureActions';

const Feature = () => (
  <div>
    <span>Features: </span>
    <FeatureContainer filter={FeatureFilters.NO_FEATURE}>None</FeatureContainer>
    <FeatureContainer filter={FeatureFilters.ERGONOMIC}>Ergonomic</FeatureContainer>
    <FeatureContainer filter={FeatureFilters.CORDLESS}>Cordless</FeatureContainer>
    <FeatureContainer filter={FeatureFilters.ANY_FEATURE}>Any</FeatureContainer>
  </div>
);

export default Feature;
