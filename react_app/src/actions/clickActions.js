import { CLICK_BANKER } from './types';

export const clickBanker = idx => dispatch => {
  dispatch({
    type: CLICK_BANKER,
    idx: idx,
  });
}

