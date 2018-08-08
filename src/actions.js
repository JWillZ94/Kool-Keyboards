// All actions

export const fetchKeyboardsBegin = () => ({
  type: 'FETCH_KEYBOARDS_BEGIN'
});

export const fetchKeyboardsSuccess = keyboards => ({
  type: 'FETCH_KEYBOARDS_SUCCESS',
  payload: { keyboards }
});

export const fetchKeyboardsError = error => ({
  type: 'FETCH_KEYBOARDS_FAILURE',
  payload: { error }
});

export const sortKbs = sort => ({
  type: 'SORT_KBS',
  sort
});

export const KbSorts = {
  SORT_PRICE_LOW_TO_HIGH: 'SORT_PRICE_LOW_TO_HIGH',
  SORT_PRICE_HIGH_TO_LOW: 'SORT_PRICE_HIGH_TO_LOW',
  SORT_RATING: 'SORT_RATING'
};

export const filterKbs = filter => ({
  type: 'FILTER_KBS',
  filter
});

export const KbFilters = {
  PRICE_UNDER_25: 'UNDER_25',
  PRICE_25_TO_50: 'PRICE_25_TO_50',
  PRICE_50_TO_100: 'PRICE_50_TO_100',
  PRICE_100_TO_200: 'PRICE_100_TO_200',
  PRICE_200_AND_UP: 'PRICE_200_AND_UP',
  ANY_PRICE: 'ANY_PRICE'
};
