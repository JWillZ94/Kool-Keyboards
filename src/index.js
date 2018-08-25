import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk, logger];
export const store = createStore(rootReducer, applyMiddleware(...middleware));

console.log(store.getState());

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
