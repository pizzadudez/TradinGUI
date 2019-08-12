import { SELECT_BANKER, FETCH_BANKERS, UPDATE_BANKER, CHANGE_TIMESTAMP } from '../actions/types';

const initialState = {
  bankers: [],
  accounts: [],
  selectedBankersIds: [],
  timestamp: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_BANKERS:
      return {
        ...state,
        bankers: action.payload,
      }
    case SELECT_BANKER: {
      const newState = {
        ...state,
        selectedBankersIds: [...state.selectedBankersIds, action.id],
      };
      return newState;
    }
    case UPDATE_BANKER:
      return {
        ...state,
        bankers: state.bankers.map(banker => 
          action.id === banker.id
          ? {...banker, trade_timestamp: action.timestamp, trade_confirmation: 1}
          : banker
        ),
      }
    case CHANGE_TIMESTAMP:
      return {
        ...state,
        timestamp: action.date,
      }
    default:
      return state;
  }
}
