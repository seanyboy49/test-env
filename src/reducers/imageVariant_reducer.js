import { IMAGE_VARIANT } from '../actions/index'

export default function(state=[], action) {
  if(action.type===IMAGE_VARIANT) {
    return action.payload;
  } else {
    return state;
  }
}
