import {
  FETCH_BANKERS,
  FETCH_REALMS,
  SELECT_BANKER,
  UPDATE_BANKER,
  CLEAR_SELECTION,
  WIPE_TRADE,
} from './types';

import axios from 'axios';

// api urls
const localhost = 'http://127.0.0.1:8000';
const pythonanywhere = 'https://vladalbert.pythonanywhere.com';
const api = pythonanywhere;

export const fetchBankers = () => (dispatch) => {
  axios.get(api + '/bankers/?format=json').then((bankers) =>
    dispatch({
      type: FETCH_BANKERS,
      payload: bankers.data,
    })
  );
};

export const fetchRealms = () => (dispatch) => {
  axios.get(api + '/realms/?format=json').then((res) => {
    const realms = res.data.reduce(
      (obj, item) => ({
        ...obj,
        [item.realm]: {
          realm: item.realm,
          code: item.code,
          price_per_mil: item.price_per_mil,
        },
      }),
      {}
    );
    dispatch({
      type: FETCH_REALMS,
      payload: realms,
    });
  });
};

export const selectBanker = (id) => (dispatch) => {
  dispatch({
    type: SELECT_BANKER,
    id: id,
  });
};

export const updateBanker = (banker, timestamp) => (dispatch) => {
  axios.put(api + '/bankers/' + banker.id + '/', {
    ...banker,
    trade_timestamp: timestamp,
    trade_confirmation: 1,
  });
  dispatch({
    type: UPDATE_BANKER,
    id: banker.id,
    timestamp: timestamp,
  });
};

export const clearSelection = () => (dispatch) => {
  dispatch({
    type: CLEAR_SELECTION,
  });
};

export const wipeTrade = (bankers, localOnly = true) => (dispatch) => {
  if (!localOnly) {
    bankers.forEach((banker) => {
      axios.put(api + '/bankers/' + banker.id + '/', {
        ...banker,
        trade_timestamp: null,
        trade_confirmation: null,
      });
    });
  }
  dispatch({
    type: WIPE_TRADE,
    bankerIds: bankers.map((banker) => banker.id),
  });
};

export const restoreDefaultDB = (confirmation) => (dispatch) => {
  if (confirmation) {
    axios.get(api + '/restore_default/');
    console.log('Database restoration request sent.');
  } else {
    console.log('No confirmation.');
  }
};
