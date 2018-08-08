export const sortKbs = sort => ({
  type: 'SORT_KBS',
  sort
});

export const KbSorts = {
  SORT_PRICE_LOW_TO_HIGH: 'SORT_PRICE_LOW_TO_HIGH',
  SORT_PRICE_HIGH_TO_LOW: 'SORT_PRICE_HIGH_TO_LOW',
  SORT_RATING: 'SORT_RATING'
};
