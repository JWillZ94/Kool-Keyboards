export const sortAction = sort => ({
  type: 'SORT_ITEMS',
  sort
});

// export const ItemSorts = {
//   SORT_POPULARITY: {
//     label: 'POPULARITY'
//   },
//   SORT_PRICE_LOW_TO_HIGH: {
//     label: 'SORT_PRICE_LOW_TO_HIGH'
//   },
//   SORT_PRICE_HIGH_TO_LOW: {
//     label: 'SORT_PRICE_HIGH_TO_LOW'
//   },
//   SORT_RATING: {
//     label: 'SORT_RATING'
//   }
// };

export const ItemSorts = {
  SORT_POPULARITY: {
    label: 'POPULARITY',
    sortMethod: arr => arr.sort((a, b) => a.name.localeCompare(b.name))
  },
  SORT_PRICE_LOW_TO_HIGH: {
    label: 'SORT_PRICE_LOW_TO_HIGH',
    sortMethod: arr => arr.sort((a, b) => a.price - b.price)
  },
  SORT_PRICE_HIGH_TO_LOW: {
    label: 'SORT_PRICE_HIGH_TO_LOW',
    sortMethod: arr => arr.sort((a, b) => b.price - a.price)
  },
  SORT_RATING: {
    label: 'SORT_RATING',
    sortMethod: arr => arr.sort((a, b) => b.rating - a.rating)
  }
};
