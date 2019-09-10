import { FETCH_BANKERS } from './types';
import { FETCH_REALMS} from './types';
import { SELECT_BANKER } from './types';
import { UPDATE_BANKER } from './types';
import { CHANGE_TIMESTAMP } from './types';

import axios from 'axios'

export const fetchBankers = () => dispatch => {
    fetch('http://127.0.0.1:8000/bankers/?format=json')
    .then(res => res.json())
    .then(bankers => 
      dispatch({
        type: FETCH_BANKERS,
        payload: bankers,
      })
    );
};

export const fetchRealms = () => dispatch => {
  axios.get('http://127.0.0.1:8000/realms/?format=json')
  .then(res => {
    const realms = res.data.reduce((obj, item) => ({
      ...obj, [item.realm]: {
        'realm': item.realm,
        'code': item.code,
        'price_per_mil': item.price_per_mil,
      }, 
    }), {});
    dispatch({
      type: FETCH_REALMS,
      payload: realms,
    })
  } 
  );
};

export const clickBanker = id => dispatch => {
  dispatch({
    type: SELECT_BANKER,
    id: id,
  });
};

export const updateBanker = (banker, timestamp) => dispatch => {
  axios.put('http://127.0.0.1:8000/bankers/' + banker.id + '/',
    {
      ...banker,
      trade_timestamp: timestamp,
      trade_confirmation: 1,
    },
  )
  dispatch({
    type: UPDATE_BANKER,
    id: banker.id,
    timestamp: timestamp,
  });
};

export const changeTimestamp = date => dispatch => {
  dispatch({
    type: CHANGE_TIMESTAMP,
    date: date,
  });
};