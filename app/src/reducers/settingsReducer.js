import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
  TOGGLE_TRADED_TOOLTIPS,
  TOGGLE_TRADED_OPERATIONS,
  TOGGLE_REALM_STATS,
  SELECT_STATS_REALM,
  SELECT_STATS_CURRENCY,
} from '../actions/types'

const initialState = {
  accountsTable: true,
  hideTradedBankers: false,
  showTradedTooltips: false,
  showTradedOperations: false,
  showRealmStats: false,
  statsRealm: 'Ragnaros',
  statsCurrency: 'USD',
  currencies: {
    'USD': {
      code: 'USD',
      symbol: '$',
      exchangeRate: 1,
    },
    'EUR': {
      code: 'EUR',
      symbol: '€',
      exchangeRate: 0.8980,
    },
    'GBP': {
      code: 'GBP',
      symbol: '£',
      exchangeRate: 0.8234,
    }
  },
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
    case SELECT_STATS_REALM:
      return {
        ...state,
        statsRealm: action.statsRealm,
      }
    case SELECT_STATS_CURRENCY:
      return {
        ...state,
        statsCurrency: action.statsCurrency,
      }
    default:
      return state;
  }
}