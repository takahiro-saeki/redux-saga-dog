import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import {delay} from 'redux-saga';
import actions from 'actions';
import { put, call, takeEvery, fork, take, select } from 'redux-saga/effects';
import { getDog, getMainImage } from 'selector'

const BASE_PATH = '//dog.ceo/api/breeds/list/all'
const MAIN_IMAGE = '//dog.ceo/api/breeds/image/random'

function fetchRankApi(url) {
  return fetch(url).then(res => res.json()).then(json => json)
}


function* mainRandomImage(dispatch) {
  const action = yield take('MAIN_RANDOM_IMAGE')
  while(true) {
    const countDog = yield select(getMainImage)
    if(countDog.length === 2) {
      break
    }
    const { message } = yield call(fetchRankApi, MAIN_IMAGE)
    yield put({type: 'SAVE_MAIN_IMAGE', message})
  }
}

function* watchIncrementAsync(dispatch) {
  const action = yield take('LOAD_CATEGORY')
  const { status, message } = yield call(fetchRankApi, BASE_PATH)
  yield put({type: 'INIT_ACTION', message})
}

export default function* rootSaga() {
  yield fork(watchIncrementAsync);
  yield fork(mainRandomImage)
}