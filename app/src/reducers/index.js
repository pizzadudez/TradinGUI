import { combineReducers } from 'redux';
import bankersReducer from './bankersReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  bankers: bankersReducer,
  settings: settingsReducer,
});