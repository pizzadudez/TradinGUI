import { FETCH_BANKERS } from './types';
import { CLICK_BANKER } from './types';

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

export const clickBanker = id => dispatch => {
  dispatch({
    type: CLICK_BANKER,
    id: id,
  });
}

// export function fetchPosts() {
//   return function (dispatch) {
//     fetch('http://127.0.0.1:8000/bankers/?format=json')
//     .then(res => res.json())
//     .then(bankers => dispatch({
//       type: FETCH_BANKERS,
//       payload: bankers,
//     }));
//   }
// }