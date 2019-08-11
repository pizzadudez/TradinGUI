import { CLICK_BANKER } from '../actions/types';

// const initialState = {
//   bankers: [],
// };

export default function(state = {}, action) {
  switch(action.type) {
    case CLICK_BANKER:{
      const newState = {
        ...state,
        bankers: state.bankers.map((banker, idx) => idx === action.idx
        ? {...banker, trade_confirmation: true} 
        : banker),
      };
      console.log(newState);
      return newState;
    }
    default:
      return state;
  }
}