import { combineReducers } from 'redux';
import dog from './dog';

const reducers = {
  dog
};
const reducer = combineReducers(reducers);

export default reducer;
