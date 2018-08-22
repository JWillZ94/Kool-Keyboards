export const filterByAvailabilityAction = filter => ({
  type: 'FILTER_BY_AVAILABILITY',
  filter
});

export const AvailabilityFilters = {
  ANY_AVAILABILITY: {
    label: 'ANY_AVAILABILITY',
    filterMethod: arr => arr
  },
  IN_STOCK: {
    label: 'IN_STOCK',
    filterMethod: arr => arr.filter(i => i.availability === "In Stock")
  }
};
