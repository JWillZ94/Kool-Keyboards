export const filterByTypeAction = filter => ({
  type: 'FILTER_BY_TYPE',
  filter
});

export const TypeFilters = {
  ANY_TYPE: {
    label: 'ANY_TYPE',
    filterMethod: arr => arr
  },
  NO_TYPE: {
    label: 'NO_TYPE',
    filterMethod: arr => arr.filter(i => i.type.length === 0)
  },
  WINDOWS: {
    label: 'WINDOWS',
    filterMethod: arr => arr.filter(i => i.type.includes("Windows"))
  },
  APPLE: {
    label: 'APPLE',
    filterMethod: arr => arr.filter(i => i.type.includes("Apple"))
  },
  SPILL_RESISTANT: {
    label: 'SPILL_RESISTANT',
    filterMethod: arr => arr.filter(i => i.type.includes("Spill-Resistant"))
  },
  ULTRA_THIN: {
    label: 'ULTRA_THIN',
    filterMethod: arr => arr.filter(i => i.type.includes("Ultra Thin"))
  },
  FULL_SIZE: {
    label: 'FULL_SIZE',
    filterMethod: arr => arr.filter(i => i.type.includes("Full-Size"))
  },
  BACKLIT: {
    label: 'BACKLIT',
    filterMethod: arr => arr.filter(i => i.type.includes("Backlit"))
  },
  GAMING: {
    label: 'GAMING',
    filterMethod: arr => arr.filter(i => i.type.includes("Gaming"))
  },
  MECHANICAL: {
    label: 'MECHANICAL',
    filterMethod: arr => arr.filter(i => i.type.includes("Mechanical"))
  },
  LARGE_PRINT: {
    label: 'LARGE_PRINT',
    filterMethod: arr => arr.filter(i => i.type.includes("Large Print"))
  }
};
