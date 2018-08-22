import { AvailabilityFilters } from '../actions/availabilityActions';
import { BrandFilters } from '../actions/brandActions';
import { ConditionFilters } from '../actions/conditionActions';
import { FeatureFilters } from '../actions/featureActions';
import { InterfaceFilters } from '../actions/interfaceActions';
import { PriceRangeFilters } from '../actions/priceRangeActions';
import { ItemSorts } from '../actions/sortActions';
import { TypeFilters } from '../actions/typeActions';


const initialState = {
  items: [],
  fetchedItems: [],
  availability: AvailabilityFilters.ANY_AVAILABILITY.label,
  brand: BrandFilters.ANY_BRAND.label,
  condition: ConditionFilters.ANY_CONDITION.label,
  feature: FeatureFilters.ANY_FEATURE.label,
  interface: InterfaceFilters.ANY_INTERFACE.label,
  priceRange: PriceRangeFilters.ANY_PRICE.label,
  sort: ItemSorts.SORT_POPULARITY.label,
  type: TypeFilters.ANY_TYPE.label
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_KEYBOARDS_SUCCESS':
      return Object.assign({}, state, {
        items: action.items,
        fetchedItems: action.items
      });
    case 'SORT_ITEMS':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.sort.sortMethod(state.items.kbs)
        }),
        sort: action.sort.label
      });
    case 'FILTER_BY_AVAILABILITY':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: action.filter.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_BRAND':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: action.filter.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_CONDITION':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: action.filter.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_FEATURE':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: action.filter.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_INTERFACE':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: action.filter.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_PRICE_RANGE':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: action.filter.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: TypeFilters.ANY_TYPE.label
      });
    case 'FILTER_BY_TYPE':
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          kbs: action.filter.filterMethod(state.fetchedItems.kbs)
        }),
        availability: AvailabilityFilters.ANY_AVAILABILITY.label,
        brand: BrandFilters.ANY_BRAND.label,
        condition: ConditionFilters.ANY_CONDITION.label,
        feature: FeatureFilters.ANY_FEATURE.label,
        interface: InterfaceFilters.ANY_INTERFACE.label,
        priceRange: PriceRangeFilters.ANY_PRICE.label,
        sort: ItemSorts.SORT_POPULARITY.label,
        type: action.filter.label
      });
    default:
      return state;
  }
}

export default rootReducer;

// Possible plans for later, import combineReducers and make itemsReducer and modifyingReducer separate
