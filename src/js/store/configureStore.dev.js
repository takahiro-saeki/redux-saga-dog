import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run
  };
}
