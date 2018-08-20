export const filterByConditionAction = filter => ({
  type: 'FILTER_BY_CONDITION',
  filter
});

export const ConditionFilters = {
  ANY_CONDITION: {
    label: 'ANY_CONDITION',
    filterMethod: arr => arr.filter(i => i.condition === "new")
  },
  NEW: {
    label: 'NEW',
    filterMethod: arr => arr.filter(i => i.condition === "new")
  },
  USED: {
    label: 'USED',
    filterMethod: arr => arr.filter(i => i.condition === "used")
  },
  REFURBISHED: {
    label: 'REFURBISHED',
    filterMethod: arr => arr.filter(i => i.condition === "refurbished")
  }
};

// ("new" || "used" || "refurbished")
