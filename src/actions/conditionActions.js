export const filterByConditionAction = filter => ({
  type: 'FILTER_BY_CONDITION',
  filter
});

export const ConditionFilters = {
  ANY_CONDITION: {
    label: 'ANY_CONDITION',
    filterMethod: arr => arr
  },
  NEW: {
    label: 'NEW',
    filterMethod: arr => arr.filter(i => i.condition === "New")
  },
  USED: {
    label: 'USED',
    filterMethod: arr => arr.filter(i => i.condition === "Used")
  },
  REFURBISHED: {
    label: 'REFURBISHED',
    filterMethod: arr => arr.filter(i => i.condition === "Refurbished")
  }
};
