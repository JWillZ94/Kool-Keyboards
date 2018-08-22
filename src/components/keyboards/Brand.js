import React from 'react';
import BrandContainer from '../../containers/BrandContainer';
import { BrandFilters } from '../../actions/brandActions';

const Brand = () => (
  <div>
    <span>Brands: </span>
    <BrandContainer filter={BrandFilters.BOX_WAVE}>BoxWave</BrandContainer>
    <BrandContainer filter={BrandFilters.IBM}>IBM</BrandContainer>
    <BrandContainer filter={BrandFilters.SOLID_TEK}>SolidTek</BrandContainer>
    <BrandContainer filter={BrandFilters.H2O}>H2O</BrandContainer>
    <BrandContainer filter={BrandFilters.MACHENIKE}>MACHENIKE</BrandContainer>
    <BrandContainer filter={BrandFilters.FILCO}>Filco</BrandContainer>
    <BrandContainer filter={BrandFilters.DUCKY}>Ducky</BrandContainer>
    <BrandContainer filter={BrandFilters.OEM}>OEM</BrandContainer>
    <BrandContainer filter={BrandFilters.MAN_AND_MACHINE}>Man & Machine</BrandContainer>
    <BrandContainer filter={BrandFilters.GINTAI}>Gintai</BrandContainer>
    <BrandContainer filter={BrandFilters.ANY_BRAND}>Any</BrandContainer>
  </div>
);

export default Brand;
