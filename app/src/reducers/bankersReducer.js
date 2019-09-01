import {
  FETCH_BANKERS,
  FETCH_REALMS,
  SELECT_BANKER,
  UPDATE_BANKER,
  CLEAR_SELECTION,
} from '../actions/types';

const initialState = {
  bankers: [],
  realms: [],
  selectedIds: [],
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
    case SELECT_BANKER: {
      return {
        ...state,
        selectedIds: [...state.selectedIds, action.id],
      }
    }
    case UPDATE_BANKER: {
      return {
        ...state,
        bankers: state.bankers.map(banker =>
          action.id === banker.id
          ? {...banker, trade_timestamp: action.timestamp, trade_confirmation: 1}
          : banker
        ),
      }
    }
    case CLEAR_SELECTION: {
      return {
        ...state,
        selectedIds: [],
      }
    }
    default:
      return state;
  }
}