import {
  TOGGLE_BANKERS_TABLE,
  TOGGLE_TRADED_BANKERS,
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
    showTraded: toggle,
  });
};