import { FETCH_BANKERS } from './types';

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