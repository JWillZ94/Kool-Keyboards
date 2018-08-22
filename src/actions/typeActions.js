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
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Windows";
      }
    })
  },
  APPLE: {
    label: 'APPLE',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Apple";
      }
    })
  },
  SPILL_RESISTANT: {
    label: 'SPILL_RESISTANT',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Spill-Resistant";
      }
    })
  },
  ULTRA_THIN: {
    label: 'ULTRA_THIN',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Ultra Thin";
      }
    })
  },
  FULL_SIZE: {
    label: 'FULL_SIZE',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Full-Size";
      }
    })
  },
  BACKLIT: {
    label: 'BACKLIT',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Backlit";
      }
    })
  },
  GAMING: {
    label: 'GAMING',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Gaming";
      }
    })
  },
  MECHANICAL: {
    label: 'MECHANICAL',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Mechanical";
      }
    })
  },
  LARGE_PRINT: {
    label: 'LARGE_PRINT',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Large Print";
      }
    })
  }
};
