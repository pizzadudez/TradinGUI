import {
  FETCH_BANKERS,
  FETCH_REALMS,
  SELECT_BANKER,
} from '../actions/types';

const initialState = {
  bankers: [],
  realms: [],
  accounts: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BANKERS:
      return {
        ...state,
        bankers: action.payload,
      }
    case FETCH_REALMS:
      return {
        ...state,
        realms: action.payload,
      }
    default:
      return state;
  }
}