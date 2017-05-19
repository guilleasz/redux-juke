/* globals window */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/root-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  middleware = applyMiddleware(loggerMiddleware, thunkMiddleware);

/* eslint-disable no-underscore-dangle */
export default createStore(reducer, composeEnhancers(middleware));
/* eslint-enable */

;
