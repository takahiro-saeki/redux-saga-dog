import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import { put, call, fork, take, select } from 'redux-saga/effects';
import { getMainImage } from 'selector';

const BASE_PATH = '//dog.ceo/api/breeds/list/all';
const MAIN_IMAGE = '//dog.ceo/api/breeds/image/random';

function fetchRankApi(url) {
  return fetch(url).then(res => res.json()).then(json => json);
}

function* imageLoop(payload) {
  while(true) {
    const countDog = yield select(getMainImage);
    if(countDog.length > payload) {
      break;
    }
    const { message } = yield call(fetchRankApi, MAIN_IMAGE);
    yield put({type: 'SAVE_MAIN_IMAGE', message});
  }
}

function* changeRandomImages() {
  while(true) {
    const action = yield take('INVOKE_CHANE_SETTING');
    const { payload } = action;
    yield put({type: 'CHANGE_SETTING', payload});
    yield imageLoop(payload);
  }
}

function* mainRandomImage() {
  const action = yield take('MAIN_RANDOM_IMAGE');
  const { payload } = action;
  yield imageLoop(payload);
}

function* watchIncrementAsync() {
  yield take('LOAD_CATEGORY');
  const { message } = yield call(fetchRankApi, BASE_PATH);
  yield put({type: 'INIT_ACTION', message});
}

export default function* rootSaga() {
  yield fork(watchIncrementAsync);
  yield fork(mainRandomImage);
  yield fork(changeRandomImages);
}
