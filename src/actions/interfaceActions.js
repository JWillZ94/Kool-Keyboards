export const filterByInterfaceAction = filter => ({
  type: 'FILTER_BY_INTERFACE',
  filter
});

export const InterfaceFilters = {
  ANY_INTERFACE: {
    label: 'ANY_INTERFACE',
    filterMethod: arr => arr
  },
  NO_INTERFACE: {
    label: 'NO_INTERFACE',
    filterMethod: arr => arr.filter(i => i.interface.length === 0)
  },
  WIRELESS: {
    label: 'WIRELESS',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.interface.length; j++) {
        return i.interface[j] === "Wireless";
      }
    })
  },
  PS_2: {
    label: 'PS_2',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.interface.length; j++) {
        return i.interface[j] === "PS/2";
      }
    })
  },
  USB: {
    label: 'USB',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.interface.length; j++) {
        return i.interface[j] === "USB";
      }
    })
  },
  BLUETOOTH: {
    label: 'BLUETOOTH',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.interface.length; j++) {
        return i.interface[j] === "Bluetooth";
      }
    })
  },
  INFRARED: {
    label: 'INFRARED',
    filterMethod: arr => arr.filter(i => {
      for (let j = 0; j < i.type.length; j++) {
        return i.type[j] === "Infrared";
      }
    })
  }
};
