export const filterByFeatureAction = filter => ({
  type: 'FILTER_BY_FEATURE',
  filter
});

export const FeatureFilters = {
  ANY_FEATURE: {
    label: 'ANY_FEATURE',
    filterMethod: arr => arr
  },
  NO_FEATURE: {
    label: 'NO_FEATURE',
    filterMethod: arr => arr.filter(i => i.feature.length === 0)
  },
  ERGONOMIC: {
    label: 'ERGONOMIC',
    filterMethod: arr => arr.filter(i => i.feature === "Ergonomic")
  },
  CORDLESS: {
    label: 'CORDLESS',
    filterMethod: arr => arr.filter(i => i.feature === "Cordless")
  }
};
