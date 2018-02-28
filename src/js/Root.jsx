import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import Category from 'containers/Category';
import SettingView from 'containers/SettingView';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/category" component={Category} />
        <Route path="/setting" component={SettingView} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: object
};

Root.defaultProps = {
  store: {}
};

export default Root;
