import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
  TOGGLE_TRADED_TOOLTIPS,
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