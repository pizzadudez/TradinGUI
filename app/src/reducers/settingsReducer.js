import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
  TOGGLE_TRADED_TOOLTIPS,
} from '../actions/types'

const initialState = {
  accountsTable: true,
  hideTradedBankers: false,
  showTradedTooltips: false,
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
        hideTradedBankers: action.hideTradedBankers,
      }
    case TOGGLE_TRADED_TOOLTIPS:
      return {
        ...state,
        showTradedTooltips: action.showTradedTooltips,
      }
    default:
      return state;
  }
}