import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'containers/App';
import Category from 'containers/Category';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/category" component={Category} />
      </div>
    </Router>
  </Provider>
);

export default Root;
