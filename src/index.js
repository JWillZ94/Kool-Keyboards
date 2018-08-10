import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { fetchKeyboards } from './actions/itemActions';
import { filterByPriceRangeAction, PriceRangeFilters } from './actions/priceRangeActions';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk, logger];
export const store = createStore(rootReducer, applyMiddleware(...middleware));

store
  .dispatch(fetchKeyboards())
  .then(() => console.log(store.getState()));

store.dispatch(filterByPriceRangeAction(PriceRangeFilters.PRICE_50_TO_100));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
