import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  itemsReducer,
  authReducer
});

export default rootReducer;

// Possible plans for later, import combineReducers and make itemsReducer and modifyingReducer separate
