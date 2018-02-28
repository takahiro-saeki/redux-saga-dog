import { combineReducers } from 'redux';
import dog from './dog';
import mainImage from './mainImage';
import setting from './setting';

const reducers = {
  dog,
  mainImage,
  setting
};
const reducer = combineReducers(reducers);

export default reducer;
