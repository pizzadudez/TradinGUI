import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
  TOGGLE_TRADED_TOOLTIPS,
  TOGGLE_TRADED_OPERATIONS,
  TOGGLE_REALM_STATS,
  SELECT_STATS_REALM,
  SELECT_STATS_CURRENCY,
} from './types';

export const toggleBankersTable = toggle => dispatch => {
  dispatch({
    type: TOGGLE_BANKERS_TABLE,
    accountsTable: toggle,
  });
};

export const toggleTradedBankers = toggle => dispatch => {
  dispatch({
    type: TOGGLE_TRADED_BANKERS,
    hideTradedBankers: toggle,
  });
};

export const toggleTradedTooltips = toggle => dispatch => {
  dispatch({
    type: TOGGLE_TRADED_TOOLTIPS,
    showTradedTooltips: toggle,
  });
};

export const toggleTradedOperations = toggle => dispatch => {
  dispatch({
    type: TOGGLE_TRADED_OPERATIONS,
    showTradedOperations: toggle,
  })
};

export const toggleRealmStats = toggle => dispatch => {
  dispatch({
    type: TOGGLE_REALM_STATS,
    showRealmStats: toggle,
  });
};

export const selectStatsRealm = realm => dispatch => {
  dispatch({
    type: SELECT_STATS_REALM,
    statsRealm: realm,
  });
};

export const selectStatsCurrency = currency => dispatch => {
  dispatch({
    type: SELECT_STATS_CURRENCY,
    statsCurrency: currency,
  });
};