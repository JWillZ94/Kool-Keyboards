export const filterByPriceRangeAction = filter => ({
  type: 'FILTER_BY_PRICE_RANGE',
  filter
});

export const PriceRangeFilters = {
  PRICE_UNDER_25: {
    label: 'UNDER_25',
    filterMethod: arr => arr.filter(i => i.price < 25)
  },
  PRICE_25_TO_50: {
    label: 'PRICE_25_TO_50',
    filterMethod: arr => arr.filter(i => i.price >= 25 && i.price <= 50)
  },
  PRICE_50_TO_100: {
    label: 'PRICE_50_TO_100',
    filterMethod: arr => arr.filter(i => i.price >= 50 && i.price <= 100)
  },
  PRICE_100_TO_200: {
    label: 'PRICE_100_TO_200',
    filterMethod: arr => arr.filter(i => i.price >= 100 && i.price <= 200)
  },
  PRICE_200_AND_UP: {
    label: 'PRICE_200_AND_UP',
    filterMethod: arr => arr.filter(i => i.price >= 200)
  },
  ANY_PRICE: {
    label: 'ANY_PRICE',
    filterMethod: arr => arr
  }
};

// items: action.filter.filterMethod(this.items) // a way to sort/filter items based on action
