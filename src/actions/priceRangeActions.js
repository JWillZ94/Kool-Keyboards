export const filterByPriceRangeAction = filter => ({
  type: 'FILTER_BY_PRICE_RANGE',
  filter
});

export const PriceRangeFilters = {
  PRICE_UNDER_25: 'UNDER_25',
  PRICE_25_TO_50: 'PRICE_25_TO_50',
  PRICE_50_TO_100: 'PRICE_50_TO_100',
  PRICE_100_TO_200: 'PRICE_100_TO_200',
  PRICE_200_AND_UP: 'PRICE_200_AND_UP',
  ANY_PRICE: 'ANY_PRICE'
};

// export const PriceRangeFilters = {
//   PRICE_UNDER_25: {
//     label: 'UNDER_25',
//     filterMethod: arr => arr.filter(i => i.price < 25)
//   },
//   PRICE_25_TO_50: 'PRICE_25_TO_50',
//   PRICE_50_TO_100: 'PRICE_50_TO_100',
//   PRICE_100_TO_200: 'PRICE_100_TO_200',
//   PRICE_200_AND_UP: 'PRICE_200_AND_UP',
//   ANY_PRICE: 'ANY_PRICE'
// };
