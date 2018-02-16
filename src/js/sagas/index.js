import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import {delay} from 'redux-saga';
import actions from 'actions';
import {put, call, takeEvery, fork, take} from 'redux-saga/effects';

const BASE_PATH = '//dog.ceo/api/breeds/list/all'

function fetchRankApi(url) {
  return fetch(url).then(res => res.json()).then(json => json)
}

function* watchIncrementAsync(dispatch) {
  const action = yield take('LOAD_CATEGORY')
  const { status, message } = yield call(fetchRankApi, BASE_PATH)
  yield put({type: 'INIT_ACTION', message})
}

export default function* rootSaga() {
  yield fork(watchIncrementAsync);
}