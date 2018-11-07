import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  todoReducer,
  routing: routerReducer,
});
