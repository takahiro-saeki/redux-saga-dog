import { combineReducers } from 'redux';
import dog from './dog';
import mainImage from './mainImage';
import setting from './setting';
import lang from './lang';

const reducers = {
  dog,
  mainImage,
  setting,
  lang
};
const reducer = combineReducers(reducers);

export default reducer;
