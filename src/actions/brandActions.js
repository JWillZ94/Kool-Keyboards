export const filterByBrandAction = filter => ({
  type: 'FILTER_BY_BRAND',
  filter
});

export const BrandFilters = {
  ANY_BRAND: {
    label: 'ANY_BRAND',
    filterMethod: arr => arr
  },
  BOX_WAVE: {
    label: 'BOX_WAVE',
    filterMethod: arr => arr.filter(i => i.brand === "BoxWave")
  },
  IBM: {
    label: 'IBM',
    filterMethod: arr => arr.filter(i => i.brand === "IBM")
  },
  SOLID_TEK: {
    label: 'SOLID_TEK',
    filterMethod: arr => arr.filter(i => i.brand === "SolidTek")
  },
  H2O: {
    label: 'H2O',
    filterMethod: arr => arr.filter(i => i.brand === "H2O")
  },
  MACHENIKE: {
    label: 'MACHENIKE',
    filterMethod: arr => arr.filter(i => i.brand === "MACHENIKE")
  },
  FILCO: {
    label: 'FILCO',
    filterMethod: arr => arr.filter(i => i.brand === "Filco")
  },
  DUCKY: {
    label: 'DUCKY',
    filterMethod: arr => arr.filter(i => i.brand === "Ducky")
  },
  OEM: {
    label: 'OEM',
    filterMethod: arr => arr.filter(i => i.brand === "OEM")
  },
  MAN_AND_MACHINE: {
    label: 'MAN_AND_MACHINE',
    filterMethod: arr => arr.filter(i => i.brand === "Man & Machine")
  },
  GINTAI: {
    label: 'GINTAI',
    filterMethod: arr => arr.filter(i => i.brand === "Gintai")
  }
};
