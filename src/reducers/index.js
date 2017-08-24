import { combineReducers } from 'redux';
import CopyReducer  from './copy_reducer';
import CTAReducer from './cta_reducer';
import productColourReducer from './productColour_reducer';
import productCategoryReducer from './productCategory_reducer'
import imageVariantReducer from './imageVariant_reducer'


const rootReducer = combineReducers({
  copy: CopyReducer,
  cta: CTAReducer,
  productColour: productColourReducer,
  productCategory: productCategoryReducer,
  imageVariant: imageVariantReducer

})

export default rootReducer;
