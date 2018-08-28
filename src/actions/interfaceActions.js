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
    filterMethod: arr => arr.filter(i => i.interface.includes("Wireless"))
  },
  PS_2: {
    label: 'PS_2',
    filterMethod: arr => arr.filter(i => i.interface.includes("PS/2"))
  },
  USB: {
    label: 'USB',
    filterMethod: arr => arr.filter(i => i.interface.includes("USB"))
  },
  BLUETOOTH: {
    label: 'BLUETOOTH',
    filterMethod: arr => arr.filter(i => i.interface.includes("Bluetooth"))
  },
  INFRARED: {
    label: 'INFRARED',
    filterMethod: arr => arr.filter(i => i.interface.includes("Infrared"))
  }
};
