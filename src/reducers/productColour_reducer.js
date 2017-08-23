import { PRODUCT_COLOUR } from '../actions/index'

export default function(state=[], action) {
  if(action.type===PRODUCT_COLOUR) {
    return action.payload;
  } else {
    return state;
  }
}
