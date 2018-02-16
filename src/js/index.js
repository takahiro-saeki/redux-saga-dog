import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { createStore } from 'redux';
import reducer from 'reducers/index.js'
import Root from './Root.js';
import saga from './sagas/index.js'

document.body.style.margin = 0;

const store = configureStore();
store.runSaga(saga)

render(
  <Root store={store} />,
  document.getElementById('app')
);
