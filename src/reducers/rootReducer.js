import { filterByPriceRange, PriceRangeFilters } from '../actions/priceRangeActions';

const initialState = {
  items: [3, 4, 6, 1, 6, 3, 6, 8],
  priceRange: PriceRangeFilters.ANY_PRICE
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_BY_PRICE_RANGE':
      return Object.assign({}, state, {
        items: Object.Assign([], state.items.filter(action.filter)),
        priceRange: action.filter
      });
    default:
      return state;
  }
}

export default rootReducer;
