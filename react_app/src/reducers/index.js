import { combineReducers } from 'redux';
import postReducer from './postReducer';
import bankerReducer from './bankerReducer';

export default combineReducers({
  posts: postReducer,
  bankers: bankerReducer,
});