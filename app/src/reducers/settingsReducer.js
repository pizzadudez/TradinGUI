import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
} from '../actions/types'

const initialState = {
  accountsTable: true,
  showTraded: true,
}

export default function(state=initialState, action) {
  switch(action.type) {
    case TOGGLE_BANKERS_TABLE:
      return {
        ...state,
        accountsTable: action.accountsTable,
      }
    case TOGGLE_TRADED_BANKERS:
      return {
        ...state,
        showTraded: action.showTraded,
      }
    default:
      return state;
  }
}