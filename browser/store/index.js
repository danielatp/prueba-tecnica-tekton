import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import items from './items';
import user from './user';
import order from './order';

const mainReducer = combineReducers({
  items,
  user,
  order
})

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger()
))

const store = createStore(mainReducer, middleware)

export default store;
