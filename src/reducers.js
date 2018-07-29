import { Component } from 'react';
import { combineReducers } from 'redux';
import { FETCH_KEYBOARDS_BEGIN, FETCH_KEYBOARDS_SUCCESS, FETCH_KEYBOARDS_FAILURE } from './actions/keyboardActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const kbsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_KEYBOARDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_KEYBOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.keyboards
      };
    case FETCH_KEYBOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}

const login = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  kbsReducer,
  login
});

export default rootReducer;
