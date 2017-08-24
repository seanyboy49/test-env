import { PRODUCT_CATEGORY } from '../actions/index'

export default function(state=[], action) {
  if(action.type===PRODUCT_CATEGORY) {
    return action.payload;
  } else {
    return state;
  }
}
