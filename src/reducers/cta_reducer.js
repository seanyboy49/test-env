import { CTA } from '../actions/index'

export default function(state=[], action) {
  if(action.type===CTA) {
    return action.payload;
  } else {
    return state;
  }
}
