import { combineReducers } from 'redux';
import CopyReducer from './copy_reducer';

const rootReducer = combineReducers({
  copy: CopyReducer
})

export default rootReducer;
