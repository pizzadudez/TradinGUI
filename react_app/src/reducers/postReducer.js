import { FETCH_BANKERS } from '../actions/types';

const initialState = {
  bankers: [],
  accounts: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BANKERS:
      return {
        ...state,
        bankers: action.payload,
      }
    default:
      return state;
  }
}