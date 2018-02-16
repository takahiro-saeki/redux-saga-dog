import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import {delay} from 'redux-saga';
import actions from 'actions';
import {put, call, takeEvery, fork, take} from 'redux-saga/effects';

const BASE_PATH = '//dog.ceo/api/breeds/image/random'

function fetchRankApi(url) {
  return fetch(url).then(res => res.json()).then(json => json)
}

export default function* watchIncrementAsync(dispatch) {
  const param = yield call(() => fetchRankApi(BASE_PATH))
  yield put({type: 'INIT_ACTION', param})
}
