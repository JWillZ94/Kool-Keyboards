import { PriceRangeFilters } from '../actions/priceRangeActions';
import { ItemSorts } from '../actions/sortActions';
import { ConditionFilters } from '../actions/conditionActions';

const initialState = {
  items: [],
  priceRange: PriceRangeFilters.ANY_PRICE.label,
  sort: ItemSorts.SORT_POPULARITY.label,
  condition: ConditionFilters.ANY_CONDITION.label
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_KEYBOARDS_SUCCESS':
      return Object.assign({}, state, {
        items: action.items
      });
    case 'SORT_ITEMS':
      return Object.assign({}, state, {
        sort: action.sort.label
      });
    case 'FILTER_BY_PRICE_RANGE':
      return Object.assign({}, state, {
        priceRange: action.filter.label
      });
    case 'FILTER_BY_CONDITION':
      return Object.assign({}, state, {
        condition: action.filter.label
      });
    default:
      return state;
  }
}

export default rootReducer;

// Possible plans for later, import combineReducers and make itemsReducer and modifyingReducer separate

// items: Object.assign({}, state.items, {
//   kbs: action.filter.filterMethod(state.items.kbs)
// }),
