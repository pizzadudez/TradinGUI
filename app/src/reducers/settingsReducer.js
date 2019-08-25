import {

} from '../actions/types'

const initialState = {
  accountsTable: false,
  hideTradedBankers: false,
}

export default function(state=initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}