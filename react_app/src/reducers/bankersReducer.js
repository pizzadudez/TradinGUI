import { CLICK_BANKER, FETCH_BANKERS } from '../actions/types';

const initialState = {
  bankers: [],
  accounts: [],
  selectedBankers: [],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BANKERS:
      return {
        ...state,
        bankers: action.payload,
      }
    case CLICK_BANKER:{
      const newState = {
        ...state,
        bankers: state.bankers.map(banker => banker.id === action.id
        ? {...banker, trade_confirmation: true} 
        : banker),
      };
      return newState;
    }
    default:
      return state;
  }
}
