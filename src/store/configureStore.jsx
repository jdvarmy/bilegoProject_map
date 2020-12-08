import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import rootReducer from './reducers/root-reducer';
import rootSaga from './sagas/root-saga';

export const history = createHashHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
