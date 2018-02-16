import { combineReducers } from 'redux';
import dog from './dog';
import mainImage from './mainImage';

const reducers = {
  dog,
  mainImage
};
const reducer = combineReducers(reducers);

export default reducer;
