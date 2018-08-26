import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import authReducer from './authReducer';

export default combineReducers({
  itemsReducer,
  authReducer
});

// Possible plans for later, import combineReducers and make itemsReducer and modifyingReducer separate
