import { combineReducers } from 'redux';
import CopyReducer  from './copy_reducer';
import CTAReducer from './cta_reducer';
import productColourReducer from './productColour_reducer';


const rootReducer = combineReducers({
  copy: CopyReducer,
  cta: CTAReducer,
  productColour: productColourReducer

})

export default rootReducer;
