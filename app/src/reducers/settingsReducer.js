import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
  TOGGLE_TRADED_TOOLTIPS,
  TOGGLE_TRADED_OPERATIONS,
  TOGGLE_REALM_STATS,
} from '../actions/types'

const initialState = {
  accountsTable: true,
  hideTradedBankers: false,
  showTradedTooltips: false,
  showTradedOperations: false,
  showRealmStats: false,
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
    case TOGGLE_TRADED_OPERATIONS:
      return {
        ...state,
        showTradedOperations: action.showTradedOperations,
      }
    case TOGGLE_REALM_STATS:
      return {
        ...state,
        showRealmStats: action.showRealmStats,
      }
    default:
      return state;
  }
}