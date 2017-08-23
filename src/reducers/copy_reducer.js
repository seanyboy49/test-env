import { COPY } from '../actions/index'

export default function(state=[], action) {
  if(action.type===COPY) {
    return action.payload;
  } else {
    return state;
  }
}
