import { combineReducers } from 'redux';
import bankersReducer from './bankersReducer';

export default combineReducers({
  bankers: bankersReducer,
});