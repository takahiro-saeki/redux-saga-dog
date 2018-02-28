import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './Root';
import saga from './sagas';

if(!module.hot) {
  injectTapEventPlugin();
}

document.body.style.margin = 0;

const store = configureStore();
store.runSaga(saga);

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Root store={store} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
