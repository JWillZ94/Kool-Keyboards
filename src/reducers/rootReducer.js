import { filterByPriceRangeAction, PriceRangeFilters } from '../actions/priceRangeActions';

const initialState = {
  items: [],
  priceRange: PriceRangeFilters.ANY_PRICE
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_KEYBOARDS_SUCCESS':
      return Object.assign({}, state, {
        items: action.items
      });
    case 'FILTER_BY_PRICE_RANGE':
      return Object.assign({}, state, {
        priceRange: action.filter
      });
    default:
      return state;
  }
}

export default rootReducer;
