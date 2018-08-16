import { PriceRangeFilters } from '../actions/priceRangeActions';

const initialState = {
  items: [],
  fetchedItems: [],
  priceRange: PriceRangeFilters.ANY_PRICE.label
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_KEYBOARDS_SUCCESS':
      return Object.assign({}, state, {
        items: action.items,
        fetchedItems: action.items
      });
    case 'FILTER_BY_PRICE_RANGE':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        priceRange: action.filter.label
      });
    default:
      return state;
  }
}

export default rootReducer;

// Possible plans for later, import combineReducers and make itemsReducer and modifyingReducer separate
